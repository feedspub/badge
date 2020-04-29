import React from 'react';

export default () => (
  <nav className="w-full bg-gray-900 flex justify-center shadow fixed px-4 py-2 z-20">
  <div className="w-full max-w-lg flex justify-between flex-wrap relative ">
    <div className="flex items-center flex-shrink-0">
      <a href="https://feeds.pub" className="font-semibold text-xl tracking-tight">
        <img className="w-8 h-8 inline-block" src="https://timqian-imgs.s3.ap-southeast-1.amazonaws.com/2020-03-feedspub-logo.png" alt="logo" />
      </a>
      <a href="https://feeds.pub" className="text-white font-semibold text-xl tracking-tight ml-2 hover:text-gray-200">
        Feeds Pub Badge
      </a>
    </div>
    <div className="flex items-center">
      <a href="https://github.com/FeedsPub/badge" className="text-white">
        <span className="inline-block flex">
          GitHub
        </span>
      </a>
    </div>
  </div>
</nav>
)