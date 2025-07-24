'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';

const sql = postgres(process.env.POSTGRES_URL, { ssl: 'require' });
 

const CreatePostSchema = z.object({
  userId: z.string(),
  title: z.string().min(1),
  content: z.string().min(1),
  groupId: z.string().optional().nullable(),
  tags: z.string().optional(),
});

export async function createPostAction(formData) {
  const validated = CreatePostSchema.safeParse({
    userId: formData.get('userId'),
    title: formData.get('title'),
    content: formData.get('content'),
    groupId: formData.get('groupId'),
    tags: formData.get('tags'),
  });

  if (!validated.success) {
    return {
      errors: validated.error.flatten().fieldErrors,
      message: 'Invalid form input',
    };
  }

  const { userId, title, content, groupId, tags } = validated.data;
  const tagArray = tags ? tags.split(',').map(t => t.trim()).filter(Boolean) : [];

  try {
    await sql`
      INSERT INTO posts (
        post_id, post_title, post_docs,
        author_id, group_id, post_date,
        update_date, post_tag
      )
      VALUES (
        gen_random_uuid(), ${title}, ${content},
        ${userId}, ${groupId}, current_date,
        current_date, ${tagArray}
      );
    `;
  } catch (err) {
    console.error('DB Error:', err);
    return { message: 'Database Error' };
  }

  revalidatePath('/dashboard/posts');

  return { message: 'Post created successfully' };
}
