import { ForumThread } from '../types';

export const forumThreads: Record<number, ForumThread[]> = {
  1: [
    {
      id: 1,
      title: 'Forum Rules - READ FIRST!',
      author: 'Administrator',
      preview: 'Welcome to our forum! Please read these rules carefully before posting. Any violation may result in account suspension.',
      replies: 0,
      views: 15234,
      isPinned: true,
      lastPost: {
        title: 'Forum Rules - READ FIRST!',
        author: 'Administrator',
        date: '2024-03-19 15:23'
      }
    },
    {
      id: 2,
      title: 'Important: New Forum Features',
      author: 'Moderator',
      preview: 'We\'re excited to announce several new features that will enhance your forum experience, including improved search and notifications.',
      replies: 25,
      views: 1205,
      isPinned: true,
      lastPost: {
        title: 'Important: New Forum Features',
        author: 'TechUser',
        date: '2024-03-19 14:15'
      }
    }
  ],
  2: [
    {
      id: 3,
      title: 'What are you listening to?',
      author: 'MusicLover',
      preview: 'Share your current favorite songs and discover new music! I\'ve been really into indie rock lately.',
      replies: 1534,
      views: 45678,
      lastPost: {
        title: 'What are you listening to?',
        author: 'MusicLover',
        date: '2024-03-19 16:45'
      }
    },
    {
      id: 4,
      title: 'Weekend Plans Thread',
      author: 'Socialite',
      preview: 'What\'s everyone up to this weekend? I\'m planning to check out that new restaurant downtown.',
      replies: 89,
      views: 2341,
      lastPost: {
        title: 'Weekend Plans Thread',
        author: 'WeekendWarrior',
        date: '2024-03-19 16:30'
      }
    }
  ]
};