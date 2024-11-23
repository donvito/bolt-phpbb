import React from 'react';

type NavButtonProps = {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  onClick?: () => void;
};

export function NavButton({ icon, text, active = false, onClick }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-1 px-3 py-1 rounded ${
        active
          ? 'bg-[#006699] text-white'
          : 'text-[#006699] hover:bg-[#006699] hover:text-white'
      }`}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}