import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch.js';
import PostCard from '../components/PostCard.jsx';
import styles from './Pages.module.css';

export default function HomePage({ posts, likedIds, onToggleLike }) {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
  const featured = [...(posts || []), ...(data || [])].slice(0, 3);
  return <>
    <section className={styles.hero}>
      <div className={styles.heroCopy}><p className={styles.eyebrow}>A PLACE FOR EVERY VOICE</p><h1>Good stories bring<br />us <em>closer.</em></h1><p>Meet the people, ideas and everyday moments that make our community what it is.</p><div className={styles.heroActions}><Link className={styles.primaryButton} to="/posts">Explore stories <span aria-hidden="true">→</span></Link><Link className={styles.textButton} to="/create">Share your story</Link></div></div>
      <div className={styles.heroArt} aria-hidden="true"><div className={styles.artSun}></div><div className={styles.artCircle}>Stories<br />live here</div><div className={styles.artLeaf}>✳</div></div>
    </section>
    <section className={styles.section} aria-labelledby="featured-heading"><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>FROM AROUND THE HUB</p><h2 id="featured-heading">Stories to start with</h2></div><Link to="/posts" className={styles.textButton}>All stories →</Link></div>
      {loading && <p className={styles.status} role="status">Loading stories…</p>}
      {error && <div className={styles.error} role="alert"><strong>We couldn’t load the latest stories.</strong><p>{error} You can still browse stories saved in this session.</p><Link to="/posts">Browse stories</Link></div>}
      {!loading && featured.length === 0 && <p className={styles.status}>No stories yet. Be the first to <Link to="/create">write one</Link>.</p>}
      {featured.length > 0 && <div className={styles.grid}>{featured.map((post) => <PostCard key={`${post.id}-${post.title}`} post={post} liked={likedIds.includes(post.id)} onToggleLike={onToggleLike} />)}</div>}
    </section>
  </>;
}
