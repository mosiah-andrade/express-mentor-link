import React from 'react';

export const UserIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
);

export const MailIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
);

export const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.6,3H4.4C3.6,3,3,3.6,3,4.4v15.2C3,20.4,3.6,21,4.4,21h15.2c0.8,0,1.4-0.6,1.4-1.4V4.4C21,3.6,20.4,3,19.6,3z M8.4,18.1H5.7V9.5h2.7V18.1z M7,8.2C6.2,8.2,5.6,7.6,5.6,6.9C5.6,6.1,6.2,5.5,7,5.5c0.8,0,1.5,0.6,1.5,1.4C8.5,7.6,7.9,8.2,7,8.2z M18.4,18.1h-2.7v-4.5c0-1.1-0.4-1.8-1.3-1.8c-0.7,0-1.2,0.5-1.4,1c-0.1,0.2-0.1,0.4-0.1,0.7v4.6h-2.7V9.5h2.7v1.2c0.4-0.6,1-1.5,2.4-1.5c1.8,0,3.1,1.2,3.1,3.7V18.1z" />
  </svg>
);

export const TargetIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
    </svg>
);
