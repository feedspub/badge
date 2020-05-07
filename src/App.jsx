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
        <label className="pr-2 font-semibold" >
          Preview:
        </label>
        <div>
        <img
          src={badgeURL}
          alt="badge"
        />
        </div>
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
      <div className="text-right text-gray-500 pt-5 font-light text-xs">
        <span>Powered by <a className="underline" href="https://shields.io">shields.io</a></span>
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
      <div className="mt-16 max-w-lg w-full content-center mx-2">
        <h2 className="text-3xl text-gray-900 font-light text-center py-6">Generate a badge and embed to your website</h2>
        <div className="max-w-lg w-full flex justify-center">
          <input
            className="max-w-sm w-full shadow-inner border border-gray-400 p-3 bg-transparent text-gray-700 leading-tight focus:outline-none rounded-l"
            type="text"
            placeholder='Feed URL. e.g. "https://blog.feeds.pub/rss.xml"'
            onChange={e => {
              let url = e.target.value.trim();
              if (url[url.length - 1] === '/') url = url.slice(0, -1);
              setFeedURL(url);
            }}
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
      </div>
      <div className="flex justify-center" >
        {
          badgeURL
            ? <BadgeComponent feedURL={feedURL} badgeURL={badgeURL} />
            : <div className="my-10">
                <img src="sample.svg" />
              </div>
        }
      </div>
      <div className="flex justify-center m-4">
        <div className="max-w-lg w-full content-center">
          <h2 className="text-2xl text-gray-900 font-light text-center py-4">Who is using Feeds Pub Badge</h2>
          <a
            href="https://github.com/FeedsPub/badge/issues/new?assignees=&labels=&template=add-website.md&title=%5BADD+WEBSITE%5D%3A+"
            className="block text-right font-semibold text-sm hover:underline pb-2"
          >
            + ADD
          </a>
          <div className="w-full flex justify-center">
            <div className="max-w-lg w-full">
              <Example title="Dr. X's Y" url="https://drxwhy.com" feedUrl="https://www.drxwhy.com/index.xml" />
              <Example title="juuun.io" url="https://juuun.io/" feedUrl="https://juuun.io/rss.xml" />
              <Example title="胡涂说 hutusi.com" url="https://hutusi.com" feedUrl="https://hutusi.com/feed.xml" />
              <Example title="Panda Home" url="https://old-panda.com/" feedUrl="https://old-panda.com/feed" />
              <Example title="老周快救我" url="https://zxx.im" feedUrl="https://zxx.im/feed" />
              <Example title="xcodebuild's blog" url="https://www.xcodebuild.com" feedUrl="https://www.xcodebuild.com/atom.xml" />
              <Example title="cn.ylines.org" url="https://cn.ylines.org" feedUrl="https://cn.ylines.org/rss.xml" />
              <Example title="t9t.io" url="https://blog.t9t.io" feedUrl="https://blog.t9t.io/atom.xml" />
              <Example title="Feeds Pub Blog" url="https://blog.feeds.pub" feedUrl="https://blog.feeds.pub/rss.xml" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}