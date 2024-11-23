import React from 'react';
import { MessageSquare } from 'lucide-react';
import { ForumCategoryType } from '../types';
import { Link } from 'react-router-dom';

export function ForumCategory({ category }: { category: ForumCategoryType }) {
  return (
    <div className="p-4 hover:bg-[#F5F7FA] flex items-start gap-4">
      <div className="mt-1">
        <MessageSquare size={24} className="text-[#006699]" />
      </div>
      <div className="flex-1">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <Link to={`/forum/${category.id}`}>
              <h3 className="text-[#006699] font-semibold hover:underline cursor-pointer">
                {category.name}
              </h3>
            </Link>
            <p className="text-sm text-gray-600 mt-1">{category.description}</p>
            {category.subforums && (
              <div className="mt-2 text-sm">
                <span className="text-gray-600">Subforums:</span>{' '}
                {category.subforums.map((subforum, index) => (
                  <React.Fragment key={subforum}>
                    <span className="text-[#006699] hover:underline cursor-pointer">
                      {subforum}
                    </span>
                    {index < category.subforums!.length - 1 && ', '}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
          <div className="text-right text-sm">
            <div className="text-gray-600">
              Topics: <span className="font-semibold">{category.topics}</span>
            </div>
            <div className="text-gray-600">
              Posts: <span className="font-semibold">{category.posts}</span>
            </div>
          </div>
        </div>
        <div className="mt-2 text-sm text-gray-500">
          Last post by{' '}
          <span className="text-[#006699] hover:underline cursor-pointer">
            {category.lastPost.author}
          </span>{' '}
          in{' '}
          <span className="text-[#006699] hover:underline cursor-pointer">
            {category.lastPost.title}
          </span>
          <br />
          {category.lastPost.date}
        </div>
      </div>
    </div>
  );
}