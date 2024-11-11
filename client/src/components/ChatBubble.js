import React from 'react';

function ChatBubble({heading, text}) {
  return (
    <div className="absolute top-20 translate-y-10 bg-white text-black p-4 rounded-xl shadow-lg max-w-xs m-10">
        <h1 style={{ color: '#F36359' }}>{heading}</h1>
        <p className="text-sm">{text}</p>
    </div>

  );
}

export default ChatBubble;
