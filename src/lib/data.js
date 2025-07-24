import postgres from 'postgres';


const sql = postgres(process.env.POSTGRES_URL, { ssl: 'require' });

//유저id로 포스트 찾기
export async function fetchPostsByUser(userId) {
  try {
    console.log(`Fetching posts by user ${userId}...`);
    const posts = await sql`
      SELECT * FROM posts WHERE author_id = ${userId}
    `;
    return posts;
  } catch (error) {
    console.error('Database Error (user posts):', error);
    throw new Error('Failed to fetch user posts.');
  }
}

//그룹 id로 포스트
export async function fetchGroupWithPosts(groupId) {
  try {
    console.log(`Fetching group ${groupId} info and posts...`);

    const [group] = await sql`
      SELECT * FROM groups WHERE group_id = ${groupId}
    `;

    const posts = await sql`
      SELECT * FROM posts WHERE group_id = ${groupId}
    `;

    return { group, posts };
  } catch (error) {
    console.error('Database Error (group with posts):', error);
    throw new Error('Failed to fetch group and posts.');
  }
}

//그룹 생성
export async function createGroup(groupId, groupName, groupIntro) {
  try {
    console.log(`Creating group ${groupId}...`);

    await sql`
      INSERT INTO groups (group_id, group_name, group_intro)
      VALUES (${groupId}, ${groupName}, ${groupIntro})
    `;

    return { message: 'Group created ✅' };
  } catch (error) {
    console.error('Database Error (create group):', error);
    throw new Error('Failed to create group.');
  }
}

//post 생성
export async function createPost({
  postId,
  postTitle,
  postDocs,
  authorId,
  groupId,
  postDate,
  updateDate,
  postTag,
}) {
  try {
    console.log(`Creating post ${postId}...`);

    await sql`
      INSERT INTO posts (
        post_id, post_title, post_docs,
        author_id, group_id, post_date,
        update_date, post_tag
      )
      VALUES (
        ${postId}, ${postTitle}, ${postDocs},
        ${authorId}, ${groupId}, ${postDate},
        ${updateDate}, ${postTag}
      )
    `;

    return { message: 'Post created ✅' };
  } catch (error) {
    console.error('Database Error (create post):', error);
    throw new Error('Failed to create post.');
  }
}
