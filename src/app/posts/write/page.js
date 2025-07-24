'use client';

import { useRef, useState } from 'react';
import { X, Plus, Send } from 'lucide-react';
import { Switch } from '@/components/ui/Switch';
import { GROUP } from '@/lib/MOCK_DATA';
import MDEdit from '@/components/posts/MDEdit';

import { createPostAction } from '@/lib/createPosts';

const myUserId = 'user001';

export default function CreatePostPage() {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState(['React', 'Tutorial']);
  const [newTag, setNewTag] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('');
  const [isGroupPost, setIsGroupPost] = useState(false);
  const getValue = useRef('');

  const myGroups = GROUP.filter((group) => group.group_member.includes(myUserId));

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }
  };

  return (
    <form action={createPostAction} method="post" className="flex min-h-screen">
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto bg-white/60 backdrop-blur-sm shadow-lg rounded-md p-6 space-y-8">
          <h1 className="text-2xl font-bold">Create New Post</h1>

          {/* Title & Group */}
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-1">
                Post Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border rounded text-lg"
                placeholder="Enter your post title..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Group Post</label>
              <div className="flex items-center gap-2 mb-2">
                <Switch checked={isGroupPost} onCheckedChange={setIsGroupPost} />
                <span className="text-sm text-gray-500">Post to a group</span>
              </div>

              {isGroupPost && (
                <select
                  name="groupId"
                  value={selectedGroup}
                  onChange={(e) => setSelectedGroup(e.target.value)}
                  className="w-full border p-2 rounded"
                  required
                >
                  <option value="">그룹을 선택하세요</option>
                  {myGroups.map((group) => (
                    <option key={group.group_id} value={group.group_id}>
                      {group.group_name}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium mb-1">Tags</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#20C4F0]/10 text-[#0067AC] px-2 py-1 rounded flex items-center gap-1 text-sm"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    aria-label={`Remove tag ${tag}`}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Add a tag..."
                className="flex-1 border rounded p-2"
              />
              <button
                type="button"
                onClick={addTag}
                className="border p-2 rounded hover:bg-gray-100"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* 태그 배열을 서버로 보내기 위해 콤마로 join해서 hidden input 으로 전달 */}
            <input type="hidden" name="tags" value={tags.join(',')} />
          </div>

          {/* Markdown Editor */}
          <div>
            <label htmlFor="content" className="block text-sm font-medium mb-1">
              Content
            </label>
            <MDEdit height="500" getValue={getValue} />
            {/* MDEdit에서 getValue.current에 저장된 내용을 hidden input으로 전달 */}
            <input type="hidden" id="content" name="content" value={getValue.current} />
          </div>

          {/* 유저 아이디는 hidden으로 전달 */}
          <input type="hidden" name="userId" value={myUserId} />

          {/* 제출 버튼 */}
          <div className="flex justify-end gap-4 pt-6 border-t pt-4">
            <button
              type="submit"
              className="bg-[#0067AC] hover:bg-[#0067AC]/90 text-white px-4 py-2 rounded flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Publish Post
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
