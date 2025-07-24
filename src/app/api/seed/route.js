import postgres from 'postgres';
import { NextResponse } from 'next/server';
import { USER, GROUP, POST } from '@/lib/MOCK_DATA';

const sql = postgres(process.env.POSTGRES_URL, { ssl: 'require' });
export async function GET() {
  try {
    // 테이블 생성
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        user_id TEXT PRIMARY KEY,
        user_name TEXT NOT NULL,
        user_intro TEXT,
        user_profile_url TEXT
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS groups (
        group_id TEXT PRIMARY KEY,
        group_name TEXT NOT NULL,
        group_intro TEXT
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS user_groups (
        user_id TEXT REFERENCES users(user_id),
        group_id TEXT REFERENCES groups(group_id),
        PRIMARY KEY (user_id, group_id)
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS posts (
        post_id TEXT PRIMARY KEY,
        post_title TEXT NOT NULL,
        post_docs TEXT,
        author_id TEXT REFERENCES users(user_id),
        group_id TEXT REFERENCES groups(group_id),
        post_date DATE,
        update_date DATE,
        post_tag TEXT[]
      );
    `;

    // 유저 삽입
    for (const user of USER) {
      await sql`
        INSERT INTO users (user_id, user_name, user_intro, user_profile_url)
        VALUES (${user.user_id}, ${user.user_name}, ${user.user_intro}, ${user.user_profile_url})
        ON CONFLICT (user_id) DO NOTHING;
      `;
    }

    // 그룹 및 그룹 멤버 삽입
    for (const group of GROUP) {
      await sql`
        INSERT INTO groups (group_id, group_name, group_intro)
        VALUES (${group.group_id}, ${group.group_name}, ${group.group_intro})
        ON CONFLICT (group_id) DO NOTHING;
      `;

      for (const member of group.group_member) {
        await sql`
          INSERT INTO user_groups (user_id, group_id)
          VALUES (${member}, ${group.group_id})
          ON CONFLICT (user_id, group_id) DO NOTHING;
        `;
      }
    }

    // 포스트 삽입
    for (const post of POST) {
      await sql`
        INSERT INTO posts (
          post_id, post_title, post_docs,
          author_id, group_id, post_date,
          update_date, post_tag
        )
        VALUES (
          ${post.post_id}, ${post.post_title}, ${post.post_docs},
          ${post.author_id}, ${post.group_id}, ${post.post_date},
          ${post.update_date}, ${post.post_tag}
        )
        ON CONFLICT (post_id) DO NOTHING;
      `;
    }

    return NextResponse.json({ message: 'Seed complete ✅' });
  } catch (error) {
    console.error('Seed error:', error);
    return NextResponse.json({ error: 'Seed failed ❌' }, { status: 500 });
  }
}
