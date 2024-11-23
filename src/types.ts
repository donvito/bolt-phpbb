export type LastPost = {
  title: string;
  author: string;
  date: string;
};

export type ForumCategoryType = {
  id: number;
  name: string;
  description: string;
  topics: number;
  posts: number;
  lastPost: LastPost;
  subforums?: string[];
};

export type ForumThread = {
  id: number;
  title: string;
  author: string;
  preview: string;
  replies: number;
  views: number;
  lastPost: LastPost;
  isPinned?: boolean;
  isLocked?: boolean;
};