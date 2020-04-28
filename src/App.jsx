import React, { useState } from "react";
import Header from './components/Header';
import Example from './components/Example';
import getFeedBadge from './utils/getFeedBadge';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const BadgeComponent = ({ feedURL, badgeURL }) => {

  const HTMLText = `<a href="https://feeds.pub/feed/${encodeURIComponent(feedURL)}"><img src="${badgeURL}" alt="Follow on Feeds Pub"/></a>`;
  const MDText = `[![Follow on Feeds Pub](${badgeURL})](https://feeds.pub/feed/${encodeURIComponent(feedURL)})`;
  return (
    <div>
      <div className="flex justify-center my-10">
        <img
          src={badgeURL}
          alt="badge"
        />
      </div>
      <div className="flex justify-end items-center">
        <label className="pr-2 font-semibold" >
          HTML:
      </label>
        <input
          className="border px-1 text-gray-700 h-6 focus:outline-none"
          value={HTMLText}
        />
        <CopyToClipboard text={HTMLText} >
          <span className="rounded px-2 m-2 cursor-pointer bg-green-500 hover:bg-green-400 text-white text-sm">
            Copy
        </span>
        </CopyToClipboard>
      </div>
      <div className="flex justify-end items-center">
        <label className="pr-2 font-semibold" >
          Markdown:
      </label>
        <input
          className="border px-1 text-gray-700 h-6 focus:outline-none"
          value={MDText}
        />
        <CopyToClipboard text={MDText} >
          <span className="rounded px-2 m-2 cursor-pointer bg-green-500 hover:bg-green-400 text-white text-sm">
            Copy
        </span>
        </CopyToClipboard>
      </div>
      <div className="flex justify-end items-center">
        <label className="pr-2 font-semibold" >
          Image URL:
      </label>
        <input
          className="border px-1 text-gray-700 h-6 focus:outline-none"
          value={badgeURL}
        />
        <CopyToClipboard text={badgeURL} >
          <span className="rounded px-2 m-2 cursor-pointer bg-green-500 hover:bg-green-400 text-white text-sm">
            Copy
        </span>
        </CopyToClipboard>
      </div>
    </div>
  );
}

export default () => {
  const [feedURL, setFeedURL] = useState('');
  const [badgeURL, setBadgeURL] = useState('');
  // const [feedURL, setFeedURL] = useState('https://blog.feeds.pub/rss.xml');
  // const [badgeURL, setBadgeURL] = useState(getFeedBadge(feedURL));

  const onClick = () => {
    if (!feedURL.startsWith('http')) {
      alert('Please input a valid feed URL (start with "http")');
      return;
    }
    setBadgeURL(getFeedBadge(feedURL));
  }

  return (
    <div>
      <Header />
      <div className="flex justify-center ">
        <div className="max-w-lg mt-24 w-full flex justify-center m-4">
          <input
            className="max-w-lg w-full shadow-inner border border-gray-400 p-3 bg-transparent text-gray-700 leading-tight focus:outline-none rounded-l"
            type="text"
            placeholder='Feed URL. e.g. "https://blog.feeds.pub/rss.xml"'
            onChange={e => setFeedURL(e.target.value)}
          />
          <button
            type="button"
            className="px-3 py-1 hover:bg-green-400 shadow bg-green-500 text-white rounded-r"
            onClick={onClick}
          >
            Generate
          </button>
        </div>
      </div>
      <div className="flex justify-center" >
        {
          badgeURL
            ? <BadgeComponent feedURL={feedURL} badgeURL={badgeURL} />
            : <div className="">
            </div>
        }
      </div>
      <div className="flex justify-center m-4">
        <div className="max-w-lg mt-24 w-full content-center">
          <h2 className="text-2xl text-gray-900 font-semibold text-center py-8">Who is using Feeds Pub Badge</h2>
          <a
            href="https://github.com/FeedsPub/badge/issues/new"
            className="block text-right font-semibold text-sm hover:underline"
          >
            + ADD
          </a>
          <div className="w-full flex justify-center">
            <div className="max-w-lg w-full">
              <Example title="t9t.io" url="https://blog.t9t.io" feedUrl="https://blog.t9t.io/atom.xml" />
              <Example title="Feeds Pub Blog" url="https://blog.feeds.pub" feedUrl="https://blog.feeds.pub/rss.xml" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}