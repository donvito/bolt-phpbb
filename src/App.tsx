import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { ForumPage } from './pages/ForumPage';
import { ForumSection } from './components/ForumSection';
import { forumCategories } from './data/forumData';

function HomePage() {
  const mainCategories = forumCategories.filter(cat => cat.id <= 2);
  const discussionCategories = forumCategories.filter(cat => cat.id > 2);

  return (
    <main className="max-w-7xl mx-auto mt-4 px-4">
      <ForumSection title="Main" categories={mainCategories} />
      <ForumSection title="Discussions" categories={discussionCategories} />

      <div className="forum-online-box">
        <h3 className="font-bold mb-2">Who is online</h3>
        <p className="text-gray-600">
          In total there are <span className="font-bold">42 users online</span> :: 12
          registered, 2 hidden and 28 guests (based on users active over the past 5
          minutes)
        </p>
      </div>

      <footer className="mt-6 mb-8 text-center text-xs text-gray-600">
        <p>Powered by phpBB © 2024</p>
        <p className="mt-1">
          <a href="#" className="forum-link">Terms</a>
          {' • '}
          <a href="#" className="forum-link">Privacy</a>
          {' • '}
          <a href="#" className="forum-link">Contact</a>
        </p>
      </footer>
    </main>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#E5E9F0]">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/forum/:categoryId" element={<ForumPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}