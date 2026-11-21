import { Link } from 'react-router-dom';
import styles from './PostCard.module.css';

export default function PostCard({ post, liked, onToggleLike }) {
  const excerpt = post.body.length > 150 ? `${post.body.slice(0, 150).trim()}…` : post.body;
  return <article className={styles.card}>
    <div className={styles.meta}><span>COMMUNITY STORY</span><span>Story #{post.id}</span></div>
    <h2 className={styles.title}><Link to={`/posts/${post.id}`}>{post.title}</Link></h2>
    <p className={styles.excerpt}>{excerpt}</p>
    <div className={styles.actions}>
      <Link className={styles.readLink} to={`/posts/${post.id}`}>Read story <span aria-hidden="true">→</span></Link>
      <button type="button" className={`${styles.like} ${liked ? styles.liked : ''}`} aria-pressed={liked} aria-label={`${liked ? 'Unlike' : 'Like'} ${post.title}`} onClick={() => onToggleLike(post.id)}><span aria-hidden="true">{liked ? '♥' : '♡'}</span> {liked ? 'Liked' : 'Like'}</button>
    </div>
  </article>;
}
