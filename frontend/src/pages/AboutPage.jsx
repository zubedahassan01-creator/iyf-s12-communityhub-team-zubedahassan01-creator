import { Link } from 'react-router-dom';
import styles from './Pages.module.css';

export default function AboutPage() {
  return <article className={styles.about}>
    <p className={styles.eyebrow}>A LITTLE ABOUT US</p><h1>Community makes<br /><em>the story.</em></h1>
    <p className={styles.aboutLead}>CommunityHub is a welcoming space to share what you know, discover what others care about, and feel a little more connected.</p>
    <div className={styles.aboutCards}><section><span aria-hidden="true">✳</span><h2>Share openly</h2><p>Everyday experiences can help someone else see a new possibility.</p></section><section><span aria-hidden="true">◌</span><h2>Read curiously</h2><p>Find ideas and perspectives from across the community.</p></section><section><span aria-hidden="true">♡</span><h2>Connect kindly</h2><p>Show appreciation for the stories that stay with you.</p></section></div>
    <Link className={styles.primaryButton} to="/create">Add your voice <span aria-hidden="true">→</span></Link>
  </article>;
}
