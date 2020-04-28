let API = 'http://localhost:4000/graphql';

if (process.env.NODE_ENV === 'dev' ) API = 'https://api-beta.feeds.pub/graphql';
if (process.env.NODE_ENV === 'production' ) API = 'https://api.feeds.pub/graphql';

export const APIURL = API;

export const featuredFeeds = [{
  tag: 'tech',
  id: 'https://feeds.pub/blog/feed.rss',
  website: 'https://feeds.pub/blog/',
  title: 'Feeds Pub: blogs',
  description: 'Updates of Feeds.Pub',
}, {
  tag: 'tech',
  id: 'https://hnrss.org/newest?points=100',
  website: 'https://news.ycombinator.com/',
  title: 'Hacker News top stories (with 100+ score)',
  description: 'Hacker News RSS',
}, {
  tag: 'science',
  id: 'http://rss.sciam.com/ScientificAmerican-Global',
  title: 'Scientific American',
  description: ''
}, {
  tag: 'tech',
  id: 'https://feeds.pub/blog/feed.rss',
  website: 'https://feeds.pub/blog/',
  title: 'Feeds.Pub blog',
  description: 'Updates of Feeds.Pub',
}, {
  tag: 'tech',
  id: 'https://hnrss.org/newest?points=100',
  website: 'https://news.ycombinator.com/',
  title: 'Top stories from https://news.ycombinator.com (with 100+ score)',
  description: 'Hacker News RSS',
}, {
  tag: 'science',
  id: 'http://rss.sciam.com/ScientificAmerican-Global',
  title: 'Scientific American Content',
  description: ''
}, {
  tag: 'tech',
  id: 'https://feeds.pub/blog/feed.rss',
  website: 'https://feeds.pub/blog/',
  title: 'Feeds Pub: blogs',
  description: 'Updates of Feeds.Pub',
}, {
  tag: 'tech',
  id: 'https://hnrss.org/newest?points=100',
  website: 'https://news.ycombinator.com/',
  title: 'Top stories from https://news.ycombinator.com (with 100+ score)',
  description: 'Hacker News RSS',
}, {
  tag: 'science',
  id: 'http://rss.sciam.com/ScientificAmerican-Global',
  title: 'Scientific American Content',
  description: ''
}];