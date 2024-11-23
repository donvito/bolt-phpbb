import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';
import { ForumCategoryType } from '../types';

type ForumSectionProps = {
  title: string;
  categories: ForumCategoryType[];
};

export function ForumSection({ title, categories }: ForumSectionProps) {
  return (
    <div className="forum-section">
      <div className="forum-header">
        <h2 className="text-lg font-normal">{title}</h2>
      </div>
      <div className="divide-y divide-[#A9B8C2]">
        {categories.map((category) => (
          <div key={category.id} className="p-4 hover:bg-[#F5F7FA]">
            <div className="flex gap-4">
              <div className="mt-1">
                <MessageSquare size={20} className="text-[#006699]" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <Link to={`/forum/${category.id}`} className="forum-link font-medium">
                      {category.name}
                    </Link>
                    <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                    {category.subforums && (
                      <div className="text-xs mt-2">
                        <span className="text-gray-600">Subforums:</span>{' '}
                        {category.subforums.map((subforum, index) => (
                          <React.Fragment key={subforum}>
                            <Link to="#" className="forum-link">{subforum}</Link>
                            {index < category.subforums!.length - 1 && ', '}
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="text-right text-sm">
                    <div className="text-gray-600">
                      Topics: <span className="font-medium">{category.topics}</span>
                    </div>
                    <div className="text-gray-600">
                      Posts: <span className="font-medium">{category.posts}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  Last post in{' '}
                  <Link to="#" className="forum-link">{category.lastPost.title}</Link>
                  <br />
                  by <Link to="#" className="forum-link">{category.lastPost.author}</Link>
                  {' • '}
                  {category.lastPost.date}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}