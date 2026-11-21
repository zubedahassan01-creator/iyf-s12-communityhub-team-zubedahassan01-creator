import { Link, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch.js';
import styles from './Pages.module.css';

export default function PostDetailPage({ posts, likedIds, onToggleLike }) {
  const { postId } = useParams();
  const localPost = posts.find((post) => String(post.id) === postId);
  const { data, loading, error } = useFetch(localPost ? null : `https://jsonplaceholder.typicode.com/posts/${encodeURIComponent(postId)}`);
  const post = localPost || (data && data.id ? data : null);
  return <article className={styles.detail}>
    <Link to="/posts" className={styles.backLink}>← Back to stories</Link>
    {loading && <p className={styles.status} role="status">Loading this story…</p>}
    {error && !post && <div className={styles.error} role="alert"><strong>We couldn’t load this story.</strong><p>{error}</p><Link to="/posts">Return to all stories</Link></div>}
    {!loading && !error && !post && <div className={styles.empty}><h1>Story not found</h1><p>This story may have moved or the link may be incorrect.</p><Link to="/posts">Browse all stories</Link></div>}
    {post && <><p className={styles.eyebrow}>COMMUNITY STORY · #{post.id}</p><h1>{post.title}</h1><p className={styles.detailBody}>{post.body}</p><button type="button" className={styles.likeButton} aria-pressed={likedIds.includes(post.id)} onClick={() => onToggleLike(post.id)}>{likedIds.includes(post.id) ? '♥ Liked' : '♡ Like this story'}</button><p className={styles.detailNote}>Shared with the CommunityHub community.</p></>}
  </article>;
}
