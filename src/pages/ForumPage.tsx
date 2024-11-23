import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, MessageSquare, Pin, Lock } from 'lucide-react';
import { forumCategories } from '../data/forumData';
import { forumThreads } from '../data/threadData';

export function ForumPage() {
  const { categoryId } = useParams();
  const category = forumCategories.find(
    (cat) => cat.id === Number(categoryId)
  );
  const threads = forumThreads[Number(categoryId)] || [];

  if (!category) {
    return <div>Forum not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto mt-4 px-4">
      <div className="flex items-center gap-2 text-xs mb-4">
        <Link to="/" className="forum-link">Forums</Link>
        <ChevronRight size={12} />
        <span>{category.name}</span>
      </div>

      <div className="forum-section">
        <div className="forum-header">
          <h2 className="text-lg font-normal">{category.name}</h2>
          <button className="forum-button">New Topic</button>
        </div>

        <div className="forum-category">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-7">Topic</div>
            <div className="col-span-1 text-center">Replies</div>
            <div className="col-span-1 text-center">Views</div>
            <div className="col-span-3">Last post</div>
          </div>
        </div>

        <div className="divide-y divide-[#A9B8C2]">
          {threads.map((thread) => (
            <div key={thread.id} className="p-4 hover:bg-[#F5F7FA]">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-7">
                  <div className="flex gap-2">
                    <MessageSquare size={16} className="text-[#006699] mt-1" />
                    <div>
                      <div className="flex items-center gap-2">
                        {thread.isPinned && <Pin size={14} className="text-orange-500" />}
                        {thread.isLocked && <Lock size={14} className="text-red-500" />}
                        <Link to="#" className="forum-link font-medium">
                          {thread.title}
                        </Link>
                      </div>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                        {thread.preview}
                      </p>
                      <div className="text-xs text-gray-600 mt-1">
                        by <Link to="#" className="forum-link">{thread.author}</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 text-center text-sm text-gray-600">
                  {thread.replies}
                </div>
                <div className="col-span-1 text-center text-sm text-gray-600">
                  {thread.views}
                </div>
                <div className="col-span-3">
                  <div className="text-xs text-gray-600">
                    by <Link to="#" className="forum-link">{thread.lastPost.author}</Link>
                    <br />
                    {thread.lastPost.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}