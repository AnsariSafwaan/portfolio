import React from 'react';

export const TechIcon = ({ name, className = "w-6 h-6" }) => {
  switch (name.toLowerCase()) {
    case 'python':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M11.914 2C9.176 2 7.37 3.2 7.37 4.97v2.17h4.63v.65H4.25C2.5 7.79 1 9.3 1 12.02c0 2.76 1.48 4.23 3.25 4.23h1.92v-2.31c0-2.07 1.76-3.8 3.83-3.8h4.59V8.69c0-1.89-1.57-3.69-3.68-3.69h-3v-3h4zm-2.02 1.55a.8.8 0 110 1.6.8.8 0 010-1.6z" fill="#3776AB"/>
          <path d="M12.086 22c2.738 0 4.544-1.2 4.544-2.97v-2.17H12v-.65h7.75c1.75 0 3.25-1.51 3.25-4.23 0-2.76-1.48-4.23-3.25-4.23h-1.92v2.31c0 2.07-1.76 3.8-3.83 3.8H9.41v1.45c0 1.89 1.57 3.69 3.68 3.69h3v3h-4.004zm2.02-1.55a.8.8 0 110-1.6.8.8 0 010 1.6z" fill="#FFD43B"/>
        </svg>
      );

    case 'fastapi':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0z" fill="#009688"/>
          <path d="M13.2 5.5L7.5 13.5h4.2L10.8 18.5 16.5 10.5h-4.2l1.2-5z" fill="#ffffff"/>
        </svg>
      );

    case 'react':
    case 'react.js':
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
    case 'javascript (es6+)':
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
        </svg>
      );

    case 'ms sql':
    case 'ms sql server':
    case 'microsoft sql server':
    case 'microsoft sql server (ms sql)':
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="#CC292B"/>
          <path d="M7 9C7 7.5 11 6.5 16 6.5S25 7.5 25 9v14c0 1.5-4 2.5-9 2.5S7 24.5 7 23V9z" fill="#ffffff" opacity="0.2"/>
          <ellipse cx="16" cy="9" rx="8" ry="2.5" fill="#ffffff"/>
          <path d="M8 14c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5" stroke="#ffffff" strokeWidth="1.5"/>
          <path d="M8 19c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5" stroke="#ffffff" strokeWidth="1.5"/>
          <path d="M8 9v14c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V9" stroke="#ffffff" strokeWidth="1.5"/>
        </svg>
      );

    case 'mysql':
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none">
          <path d="M42 24C42 33.94 33.94 42 24 42C14.06 42 6 33.94 6 24C6 14.06 14.06 6 24 6C33.94 6 42 14.06 42 24Z" fill="#00758F" />
          <path d="M34.2 27.8c-.5-1.2-1.4-2.1-2.4-2.8-1.5-1-3.3-1.4-5.1-1.5-1.9-.1-3.8.3-5.5 1-1.5.7-2.9 1.7-3.9 3-.4.5-.8 1.1-.9 1.8-.1.6.1 1.2.6 1.6.5.4 1.1.4 1.7.3 1.2-.2 2.3-.7 3.3-1.4 1.5-1.1 3.2-1.8 5-2.1 1.6-.3 3.3-.2 4.9.4.9.4 1.8 1 2.3 1.9.4.7.7 1.6.7 2.4 0 .9-.3 1.8-.8 2.5-1.2 1.6-3 2.7-4.9 3.3-2.3.7-4.8.7-7.1.1-1.8-.5-3.5-1.4-4.8-2.7-.6-.6-1.1-1.3-1.3-2.1-.2-.8 0-1.6.5-2.3.5-.7 1.3-1.1 2.1-1.4 1.4-.5 2.9-.6 4.4-.5 1.5.1 3 .5 4.3 1.2 1 .5 1.9 1.2 2.6 2.1.3.4.6.9.7 1.4.1.4 0 .8-.3 1.1-.3.3-.8.4-1.2.3-1-.2-1.9-.7-2.7-1.3-.9-.7-2-1.1-3.1-1.3-1.3-.2-2.7-.1-3.9.4-.9.4-1.7 1-2.2 1.9-.3.6-.5 1.3-.3 2 .1.6.5 1.2 1 1.6.9.7 2 1.1 3.1 1.3 1.8.3 3.6.2 5.3-.3 1.7-.5 3.2-1.4 4.3-2.7.7-.8 1.1-1.7 1.2-2.7.2-1.2-.1-2.4-.7-3.4z" fill="#F29111" />
        </svg>
      );

    case 'bootstrap':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#7952B3"/>
          <path d="M7 6h5.2c1.7 0 2.8.8 2.8 2.1 0 .9-.5 1.6-1.4 1.9 1.1.3 1.8 1.1 1.8 2.2 0 1.5-1.2 2.3-3.1 2.3H7V6zm2.4 3.4h2.5c.7 0 1.1-.3 1.1-.9 0-.6-.4-.9-1.1-.9H9.4v1.8zm0 3.3h2.8c.8 0 1.3-.4 1.3-1 0-.6-.5-1-1.3-1H9.4v2z" fill="#ffffff"/>
        </svg>
      );

    case 'html5':
    case 'html5 & css3':
    case 'html5, css3':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M2.5 2h19l-1.7 19.3L12 23.5l-7.8-2.2L2.5 2z" fill="#E44D26"/>
          <path d="M12 21.6l6.2-1.7 1.5-16.4H12v18.1z" fill="#F16529"/>
          <path d="M12 9.5H8.2l-.2-2.5h8.2l.2-2.5H5.5l.7 7.5H12V9.5zm0 6.2l-.1.02-3.4-.9-.2-2.3H5.8l.4 4.5 5.8 1.6V15.7z" fill="#EBEBEB"/>
          <path d="M12 9.5v2.5h3.9l-.4 4.2-3.5 1v2.6l5.8-1.6.8-8.7H12z" fill="#FFFFFF"/>
        </svg>
      );

    case 'sqlalchemy':
    case 'sqlalchemy (orm)':
      return (
        <div className={`${className} bg-red-600 text-white rounded-lg flex items-center justify-center font-bold text-[10px] shadow-sm`}>
          SQLA
        </div>
      );

    case 'jwt':
    case 'jwt authentication':
      return (
        <div className={`${className} bg-pink-600 text-white rounded-lg flex items-center justify-center font-bold text-[10px] shadow-sm`}>
          JWT
        </div>
      );

    case 'sql':
      return (
        <div className={`${className} bg-blue-700 text-white rounded-lg flex items-center justify-center font-bold text-[10px] shadow-sm`}>
          SQL
        </div>
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

    case 'vs code':
    case 'vscode':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M17.5 2L6.8 12l10.7 10 4.5-2.2V4.2L17.5 2z" fill="#007ACC"/>
          <path d="M17.5 2L7.3 11.5 2 7.4v9.2l5.3-4.1 10.2 9.5V2z" fill="#0065A9"/>
        </svg>
      );

    default:
      return (
        <div className={`${className} bg-blue-100 text-brand-600 rounded-lg flex items-center justify-center font-bold text-xs`}>
          {name.slice(0, 2).toUpperCase()}
        </div>
      );
  }
};
