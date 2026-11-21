import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Pages.module.css';

export default function CreatePostPage({ onCreatePost }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [formError, setFormError] = useState('');
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    const cleanTitle = title.trim(); const cleanBody = body.trim();
    if (!cleanTitle || !cleanBody) { setFormError('Add a title and story before publishing.'); return; }
    const post = onCreatePost({ title: cleanTitle, body: cleanBody });
    navigate(`/posts/${post.id}`);
  }
  return <section className={styles.formPage}>
    <p className={styles.eyebrow}>YOUR VOICE BELONGS HERE</p><h1>Share a story</h1><p className={styles.formIntro}>A small moment, a big idea, a useful lesson. Start wherever you like.</p>
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {formError && <p className={styles.formError} role="alert">{formError}</p>}
      <div className={styles.field}><label htmlFor="post-title">Story title</label><input id="post-title" name="title" required maxLength={120} value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Give your story a title" aria-describedby="title-help" /><span id="title-help">Keep it clear and welcoming.</span></div>
      <div className={styles.field}><label htmlFor="post-body">Your story</label><textarea id="post-body" name="body" required rows={9} value={body} onChange={(event) => setBody(event.target.value)} placeholder="What would you like the community to know?" aria-describedby="body-help" /><span id="body-help">Your post is saved in this browser for this demo.</span></div>
      <div className={styles.formActions}><button className={styles.primaryButton} type="submit">Publish story <span aria-hidden="true">→</span></button><Link to="/posts" className={styles.textButton}>Cancel</Link></div>
    </form>
  </section>;
}
