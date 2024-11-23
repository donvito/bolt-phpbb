import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Users, 
  Download, 
  HelpCircle, 
  Users2, 
  Palette, 
  Wrench 
} from 'lucide-react';

export function Header() {
  return (
    <header>
      <div className="classic-header py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="text-[#006699]">
                <h1 className="text-4xl font-bold">phpBB</h1>
                <p className="text-sm mt-1">Creating Communities</p>
              </Link>
            </div>
            <div className="flex gap-4 text-sm">
              <Link to="/news" className="text-[#006699] hover:underline">News</Link>
              <span className="text-gray-400">|</span>
              <Link to="/about" className="text-[#006699] hover:underline">About</Link>
              <span className="text-gray-400">|</span>
              <Link to="/" className="text-[#006699] hover:underline">Home</Link>
            </div>
          </div>
        </div>
      </div>

      <nav className="classic-nav py-2">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between">
            <Link to="/features" className="classic-nav-item">
              <Home className="classic-nav-icon" />
              <span>Features</span>
            </Link>
            <Link to="/demo" className="classic-nav-item">
              <Users className="classic-nav-icon" />
              <span>Demo</span>
            </Link>
            <Link to="/downloads" className="classic-nav-item">
              <Download className="classic-nav-icon" />
              <span>Downloads</span>
            </Link>
            <Link to="/support" className="classic-nav-item">
              <HelpCircle className="classic-nav-icon" />
              <span>Support</span>
            </Link>
            <Link to="/community" className="classic-nav-item">
              <Users2 className="classic-nav-icon" />
              <span>Community</span>
            </Link>
            <Link to="/styles" className="classic-nav-item">
              <Palette className="classic-nav-icon" />
              <span>Styles</span>
            </Link>
            <Link to="/mods" className="classic-nav-item">
              <Wrench className="classic-nav-icon" />
              <span>Mods</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="bg-[#DEE3E7] border-y border-[#A9B8C2]">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-4">
          <div className="flex gap-6">
            <Link to="/" className="text-[#006699] hover:underline text-sm">FAQ</Link>
            <Link to="/search" className="text-[#006699] hover:underline text-sm">Search</Link>
            <Link to="/memberlist" className="text-[#006699] hover:underline text-sm">Memberlist</Link>
            <Link to="/usergroups" className="text-[#006699] hover:underline text-sm">Usergroups</Link>
            <Link to="/profile" className="text-[#006699] hover:underline text-sm">Profile</Link>
            <Link to="/messages" className="text-[#006699] hover:underline text-sm">Messages</Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Guest</span>
            <button className="bg-[#006699] text-white px-3 py-1 text-sm rounded hover:bg-[#005588]">
              Login
            </button>
            <button className="bg-[#006699] text-white px-3 py-1 text-sm rounded hover:bg-[#005588]">
              Register
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}