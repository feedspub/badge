import React from 'react';
import getFeedBadge from '../utils/getFeedBadge';

export default ({ title, url, feedUrl}) => (
  <div className="flex items-center justify-between mb-4 text-gray-900 ">
    <div>
    <a
      href={url}
      className="text-lg hover:underline"
    >
      {title}
    </a>
    {/* <span className=""> by </span>
    <a>
      timqian
    </a> */}
    </div>
    <a
      href={`https://feeds.pub/feed/${encodeURIComponent(feedUrl)}`}  
    >
      <img
        src={getFeedBadge(feedUrl)}
        alt="badge"
      />
    </a>
  </div>
);