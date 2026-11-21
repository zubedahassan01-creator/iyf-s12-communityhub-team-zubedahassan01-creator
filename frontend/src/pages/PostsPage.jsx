import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import PostCard from '../components/PostCard.jsx';
import useFetch from '../hooks/useFetch.js';
import styles from './Pages.module.css';

export default function PostsPage({ posts, onSetPosts, likedIds, onToggleLike }) {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');
  const [query, setQuery] = useState('');
  const remotePosts = data || [];
  const allPosts = useMemo(() => {
    const localIds = new Set((posts || []).map((post) => post.id));
    return [...(posts || []), ...remotePosts.filter((post) => !localIds.has(post.id))];
  }, [posts, remotePosts]);
  const visible = allPosts.filter((post) => `${post.title} ${post.body}`.toLowerCase().includes(query.trim().toLowerCase()));
  return <section>
    <p className={styles.eyebrow}>THE COMMUNITY FEED</p><div className={styles.pageHeading}><div><h1>Stories from the hub</h1><p>Ideas and moments shared by people like you.</p></div><Link className={styles.primaryButton} to="/create">＋ Write a story</Link></div>
    <label className={styles.searchLabel} htmlFor="story-search">Search stories</label><input className={styles.search} id="story-search" type="search" placeholder="Try a topic or keyword…" value={query} onChange={(event) => setQuery(event.target.value)} />
    {loading && <p className={styles.status} role="status">Loading community stories…</p>}
    {error && <div className={styles.error} role="alert"><strong>We couldn’t reach the story service.</strong><p>{error}</p>{allPosts.length === 0 && <p>Your own stories stay available on this device.</p>}</div>}
    {!loading && visible.length === 0 && <div className={styles.empty}><h2>{query ? 'No matching stories' : 'No stories yet'}</h2><p>{query ? 'Try another search term.' : 'Start the conversation by sharing the first story.'}</p>{!query && <Link to="/create" className={styles.primaryButton}>Write a story</Link>}</div>}
    {visible.length > 0 && <><p className={styles.results} aria-live="polite">{visible.length} {visible.length === 1 ? 'story' : 'stories'}</p><div className={styles.grid}>{visible.map((post) => <PostCard key={post.id} post={post} liked={likedIds.includes(post.id)} onToggleLike={onToggleLike} />)}</div></>}
  </section>;
}
