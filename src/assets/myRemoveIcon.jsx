// src/components/RemoveIcon.jsx

// import React from 'react';

// The 'fill' attribute is set to 'currentColor' for Tailwind text classes to work.
function RemoveIcon(props) {
  return (
    <svg 
      viewBox="0 0 1024 1024" 
      xmlns="http://www.w3.org/2000/svg" 
      // All styling classes and sizing props are passed from the parent
      {...props} 
    >
        <path fill="currentColor" d="M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"/>
        <path fill="currentColor" d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"/>
        {/* <path fill="currentColor" d="M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"/>
        <path fill="currentColor" d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"/> */}
    </svg>
  );
}

export default RemoveIcon;