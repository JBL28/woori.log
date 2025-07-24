// app/components/UserPosts.tsx

import { fetchPostsByUser } from '@/lib/data'; // fetchPostsByUser를 여기에 정의했다고 가정
import React from 'react';

export default async function UserPosts() {
  const posts = await fetchPostsByUser('user001');
  console.log(posts);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">user001님의 게시글</h2>
      {posts.length === 0 ? (
        <p className="text-gray-500">게시글이 없습니다.</p>
      ) : (
        posts.map((post) => (
          <div key={post.post_id} className="p-4 border rounded">
            <h3 className="text-lg font-semibold">{post.post_title}</h3>
            <p>{post.post_docs}</p>
          </div>
        ))
      )}
    </div>
  );
}
