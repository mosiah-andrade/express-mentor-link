
import React from 'react';

const LogoIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="8" fill="url(#paint0_linear_1_2)" />
      <defs>
        <linearGradient
          id="paint0_linear_1_2"
          x1="0"
          y1="0"
          x2="40"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4F46E5" />
          <stop offset="1" stopColor="#A259FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LogoIcon;
