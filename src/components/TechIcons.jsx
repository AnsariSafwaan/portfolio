import React from 'react';

export const TechIcon = ({ name, className = "w-6 h-6" }) => {
  switch (name.toLowerCase()) {
    case 'react':
      return (
        <svg className={className} viewBox="0 0 115.3 100" fill="none">
          <ellipse cx="57.65" cy="50" rx="57.65" ry="22.2" stroke="#00d8ff" strokeWidth="6" fill="none" transform="rotate(30 57.65 50)" />
          <ellipse cx="57.65" cy="50" rx="57.65" ry="22.2" stroke="#00d8ff" strokeWidth="6" fill="none" transform="rotate(90 57.65 50)" />
          <ellipse cx="57.65" cy="50" rx="57.65" ry="22.2" stroke="#00d8ff" strokeWidth="6" fill="none" transform="rotate(150 57.65 50)" />
          <circle cx="57.65" cy="50" r="10" fill="#00d8ff" />
        </svg>
      );

    case 'nextjs':
    case 'next.js':
      return (
        <svg className={className} viewBox="0 0 180 180" fill="none">
          <mask id="next-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: 'alpha' }}>
            <circle cx="90" cy="90" r="90" fill="black" />
          </mask>
          <g mask="url(#next-mask)">
            <circle cx="90" cy="90" r="90" fill="black" />
            <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear)" />
            <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear)" />
          </g>
          <defs>
            <linearGradient id="paint0_linear" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint1_linear" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'javascript':
    case 'js':
      return (
        <svg className={className} viewBox="0 0 630 630">
          <rect width="630" height="630" fill="#F7DF1E" rx="80" />
          <path d="M.001 0h630v630H.001z" fill="#f7df1e" />
          <path d="M174.4 513.7c10.4 16.5 27.6 28 53.6 28 30.5 0 49.3-15.1 49.3-43.1v-197h45.2v197.8c0 47.7-27.6 68.6-80.3 68.6-40.1 0-66.7-18.7-79.6-45.7l11.8-8.6zm228.6-11.5c12.9 20.8 33.7 35.1 63.8 35.1 27.2 0 44.4-13.6 44.4-32.3 0-22.2-18.6-30.1-50.2-43.7-44.4-18.7-65.2-36.6-65.2-76.7 0-41.6 32.3-73.8 81.7-73.8 35.1 0 60.9 14.3 75.3 39.4l-11.5 8.6c-11.5-17.9-29.4-29.4-53.8-29.4-25.1 0-41.6 13.6-41.6 30.8 0 20.8 15.8 28.7 47.3 42.3 47.3 20.1 68.1 38 68.1 78.9 0 45.9-35.8 76.7-88.9 76.7-43 0-71-20.1-84.6-47.3l15.2-8.6z" />
        </svg>
      );

    case 'typescript':
    case 'ts':
      return (
        <svg className={className} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="16" fill="#3178C6" />
          <path fill="#fff" d="M72.9 66.8h13.2v-7.2H59.7v7.2h13.2v39.4h9.9V66.8zm23.2 16.9c3.9 0 6.6 1.4 8.7 3.5l5.9-6.3c-4.1-3.9-8.9-5.7-14.9-5.7-11.8 0-19.5 8.4-19.5 20.2 0 12.3 7.8 20.4 19.8 20.4 6.7 0 11.5-2.2 15.6-6.3l-5.6-6.4c-2.4 2.2-5.3 3.7-9.3 3.7-6.2 0-10.4-4.5-10.4-11.4-.1-7.1 4-11.4 9.7-11.4z" />
          <path fill="#fff" d="M117.8 77.2c-2.1-2.9-5.7-4.8-10.4-4.8-8.2 0-13.6 5.3-13.6 13.2s5.4 13.3 13.6 13.3c4.8 0 8.4-1.9 10.5-4.8l7.2 6.5c-4.4 5.4-10.7 8.2-18.1 8.2-14.7 0-24.5-10.2-24.5-23.2 0-13.1 9.8-23.2 24.5-23.2 7.5 0 13.8 2.9 18.2 8.3l-7.4 6.5z" style={{ display: 'none' }} />
        </svg>
      );

    case 'nodejs':
    case 'node.js':
      return (
        <svg className={className} viewBox="0 0 32 32">
          <path fill="#339933" d="M16 2.3L3.1 9.8v14.9L16 32.2l12.9-7.5V9.8L16 2.3zm0 2.4l10.8 6.2v12.5L16 29.7 5.2 23.4V10.9L16 4.7z"/>
          <path fill="#339933" d="M16 8.5c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5 7.5-3.4 7.5-7.5-3.4-7.5-7.5-7.5zm0 12.5c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"/>
        </svg>
      );

    case 'express':
    case 'express.js':
      return (
        <div className={`${className} bg-slate-900 text-white rounded-lg flex items-center justify-center font-bold text-xs shadow-inner`}>
          ex
        </div>
      );

    case 'mongodb':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 2C12 2 6 9 6 15C6 18.3 8.7 21 12 21C15.3 21 18 18.3 18 15C18 9 12 2 12 2Z" fill="#47A248"/>
          <path d="M12 2V21C11.5 21 6 18.3 6 15C6 9 12 2 12 2Z" fill="#3FA037"/>
          <path d="M12 22C11.7 22 11.5 21.6 11.5 21V3C11.5 2.4 12.5 2.4 12.5 3V21C12.5 21.6 12.3 22 12 22Z" fill="#FFFFFF" opacity="0.3"/>
        </svg>
      );

    case 'mysql':
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none">
          <path d="M42 24C42 33.94 33.94 42 24 42C14.06 42 6 33.94 6 24C6 14.06 14.06 6 24 6C33.94 6 42 14.06 42 24Z" fill="#00758F" />
          <path d="M34.2 27.8c-.5-1.2-1.4-2.1-2.4-2.8-1.5-1-3.3-1.4-5.1-1.5-1.9-.1-3.8.3-5.5 1-1.5.7-2.9 1.7-3.9 3-.4.5-.8 1.1-.9 1.8-.1.6.1 1.2.6 1.6.5.4 1.1.4 1.7.3 1.2-.2 2.3-.7 3.3-1.4 1.5-1.1 3.2-1.8 5-2.1 1.6-.3 3.3-.2 4.9.4.9.4 1.8 1 2.3 1.9.4.7.7 1.6.7 2.4 0 .9-.3 1.8-.8 2.5-1.2 1.6-3 2.7-4.9 3.3-2.3.7-4.8.7-7.1.1-1.8-.5-3.5-1.4-4.8-2.7-.6-.6-1.1-1.3-1.3-2.1-.2-.8 0-1.6.5-2.3.5-.7 1.3-1.1 2.1-1.4 1.4-.5 2.9-.6 4.4-.5 1.5.1 3 .5 4.3 1.2 1 .5 1.9 1.2 2.6 2.1.3.4.6.9.7 1.4.1.4 0 .8-.3 1.1-.3.3-.8.4-1.2.3-1-.2-1.9-.7-2.7-1.3-.9-.7-2-1.1-3.1-1.3-1.3-.2-2.7-.1-3.9.4-.9.4-1.7 1-2.2 1.9-.3.6-.5 1.3-.3 2 .1.6.5 1.2 1 1.6.9.7 2 1.1 3.1 1.3 1.8.3 3.6.2 5.3-.3 1.7-.5 3.2-1.4 4.3-2.7.7-.8 1.1-1.7 1.2-2.7.2-1.2-.1-2.4-.7-3.4z" fill="#F29111" />
        </svg>
      );

    case 'tailwind':
    case 'tailwind css':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#38BDF8"/>
        </svg>
      );

    case 'git':
    case 'git & github':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M21.6 10.9L13.1 2.4C12.7 2 12.2 1.8 11.7 1.8C11.2 1.8 10.7 2 10.3 2.4L8.7 4L11.5 6.8C12.1 6.6 12.8 6.7 13.3 7.2C13.8 7.7 14 8.5 13.7 9.1L16.3 11.7C16.9 11.4 17.7 11.6 18.2 12.1C18.9 12.8 18.9 13.9 18.2 14.6C17.5 15.3 16.4 15.3 15.7 14.6C15.2 14.1 15 13.3 15.3 12.7L12.7 10.1V15.7C12.9 15.9 13 16.2 13 16.5C13 17.3 12.3 18 11.5 18C10.7 18 10 17.3 10 16.5C10 15.9 10.4 15.4 10.9 15.2V9.6C10.4 9.4 10.1 9 10 8.5L7.2 5.7L2.4 10.5C2 10.9 1.8 11.4 1.8 11.9C1.8 12.4 2 12.9 2.4 13.3L10.9 21.8C11.3 22.2 11.8 22.4 12.3 22.4C12.8 22.4 13.3 22.2 13.7 21.8L21.6 13.9C22 13.5 22.2 13 22.2 12.5C22.2 11.9 22 11.3 21.6 10.9Z" fill="#F05032"/>
        </svg>
      );

    case 'postman':
      return (
        <svg className={className} viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="15" fill="#FF6C37" />
          <path d="M17.4 9.6c-.4-.3-.9-.4-1.4-.4s-1 .1-1.4.4c-.9.6-1.4 1.7-1.4 2.8 0 .5.1 1 .4 1.4l3.8 6.4c.3.5.8.8 1.4.8.6 0 1.1-.3 1.4-.8l3.8-6.4c.3-.4.4-.9.4-1.4 0-1.1-.5-2.2-1.4-2.8-.8-.6-1.9-.7-2.8-.2l-1.8 1.2-1.8-1.2c-.3-.2-.5-.2-.6-.2z" fill="#FFFFFF"/>
          <circle cx="16" cy="22.5" r="2.5" fill="#FFFFFF"/>
        </svg>
      );

    case 'docker':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M13.9 10.5h1.9v1.9h-1.9zm-2.8 0h1.9v1.9h-1.9zm-2.8 0h1.9v1.9H8.3zm-2.8 0h1.9v1.9H5.5zm5.6-2.8h1.9v1.9h-1.9zm-2.8 0h1.9v1.9H8.3zm-2.8 0h1.9v1.9H5.5zm8.4 0h1.9v1.9h-1.9zm-2.8-2.8h1.9v1.9h-1.9zm-2.8 0h1.9v1.9H8.3z" fill="#2496ED"/>
          <path d="M22.5 11.5c-.3-.2-.8-.4-1.4-.3-.2-.5-.6-1.1-1.2-1.5l-.6-.4-.4.6c-.4.7-.6 1.6-.4 2.4-.4.2-1.1.3-2 .3H2.5C2.2 13 2 13.5 2 14c.2 4.1 3.5 7.5 7.8 7.5 5 0 9.2-3.3 10.5-8 .8 0 1.9-.3 2.4-1.2.2-.3.1-.7-.2-.8z" fill="#2496ED"/>
        </svg>
      );

    default:
      return (
        <div className={`${className} bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold text-xs`}>
          {name.slice(0, 2).toUpperCase()}
        </div>
      );
  }
};
