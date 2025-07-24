import { Component } from '@/components/ui/badge-variants';
import { USER, POST, GROUP } from '@/lib/MOCK_DATA';

export default function PostList({ user_id }) { // user_id prop을 받습니다.
    console.log("user_id",user_id)
    // 🌟 1. user_id와 일치하는 게시물만 필터링합니다.
    const userPosts = POST.filter(post => post.author_id === user_id);
    console.log("userPost",userPosts)
    // 🌟 2. 해당 user_id를 가진 게시물이 없는 경우를 처리할 수 있습니다.
    if (userPosts.length === 0) {
        return (
            <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
                <p>작성된 게시물이 없습니다.</p>
            </div>
        );
    }

    return (
        <div className="
 grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 p-2 mt-20
  "
>
        
            {userPosts.map(post => {
                // 게시물 작성자 정보 찾기
    const author = USER.find(user => user.user_id === user_id);
                // 게시물이 속한 그룹 정보 찾기 (그룹이 없는 경우 null)
                const group = post.group_id ? GROUP.find(g => g.group_id === post.group_id) : null;

                return (
                    <div className=' w-xs h-130 flex justify-start items-center flex-col'>
                        <div className='border-2 w-9/10 h-50 bg-blue-200 rounded-xl'></div>
                        <div className='w-full p-4'>
                            <Component/>
                        </div>
                        
                     <div className="flex flex-col justify-center items-start"key={post.post_id} style={{ padding: '15px', marginBottom: '15px', borderRadius: '8px'}}>
                        <p style={{ color:"gray"}}>
                            {post.post_date}
                            {post.post_date !== post.update_date && ` (Edit: ${post.update_date})`}
                        </p>
                        
                        <p>
                            <strong>Writer:</strong> {author ? author.user_name : '알 수 없음'}
                            {group && <span> (Group: {group.group_name})</span>}
                        </p>
                        <h2>{post.post_title}</h2>
                        <p>
                            <strong>TAG:</strong> {post.post_tag.join(', ')}
                        </p>
                        <div style={{padding: '10px', borderRadius: '4px' }}>
                            {post.post_docs.substring(0, 150)}
                        </div>
                    </div>
                    </div>
                );
            })}
            
        </div>
    );
}