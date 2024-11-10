import React from 'react';

function ChatBubble() {
  return (
    <div className="absolute top-20 translate-y-10 bg-white text-black p-4 rounded-xl shadow-lg max-w-xs m-10">
        <h1 style={{ color: '#F36359' }}>Hello!</h1>
        <p className="text-sm">Let's set up your preferences</p>
    </div>

  );
}

export default ChatBubble;
