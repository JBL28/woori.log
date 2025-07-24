'use server';

import { sql } from '@vercel/postgres';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';

const CreatePostSchema = z.object({
  userId: z.string(),
  title: z.string().min(1),
  content: z.string().min(1),
});

export async function createPost(formData) {
  const validated = CreatePostSchema.safeParse({
    userId: formData.get('userId'),
    title: formData.get('title'),
    content: formData.get('content'),
  });

  if (!validated.success) {
    return {
      errors: validated.error.flatten().fieldErrors,
      message: 'Invalid form input',
    };
  }

  const { userId, title, content } = validated.data;

  try {
    await sql`
      INSERT INTO posts (user_id, title, content)
      VALUES (${userId}, ${title}, ${content});
    `;
  } catch (err) {
    console.error('DB Error:', err);
    return { message: 'Database Error' };
  }

  revalidatePath('/dashboard/posts');
  return { message: 'Post created successfully' };
}
