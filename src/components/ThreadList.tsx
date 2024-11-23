import React from 'react';
import { Pin, Lock, MessageSquare } from 'lucide-react';
import { ForumThread } from '../types';

export function ThreadList({ threads }: { threads: ForumThread[] }) {
  return (
    <div className="divide-y divide-[#A9B8C2]">
      {threads.map((thread) => (
        <div key={thread.id} className="p-4 hover:bg-[#F5F7FA] flex items-start gap-4">
          <div className="mt-1">
            <MessageSquare size={24} className="text-[#006699]" />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  {thread.isPinned && (
                    <Pin size={14} className="text-orange-500" />
                  )}
                  {thread.isLocked && (
                    <Lock size={14} className="text-red-500" />
                  )}
                  <h3 className="text-[#006699] font-semibold hover:underline cursor-pointer inline-flex items-center">
                    {thread.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {thread.preview}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  by{' '}
                  <span className="text-[#006699] hover:underline cursor-pointer">
                    {thread.author}
                  </span>
                </p>
              </div>
              <div className="text-right text-sm">
                <div className="text-gray-600">
                  Replies: <span className="font-semibold">{thread.replies}</span>
                </div>
                <div className="text-gray-600">
                  Views: <span className="font-semibold">{thread.views}</span>
                </div>
              </div>
            </div>
            <div className="mt-2 text-sm text-gray-500">
              Last post by{' '}
              <span className="text-[#006699] hover:underline cursor-pointer">
                {thread.lastPost.author}
              </span>
              <br />
              {thread.lastPost.date}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}