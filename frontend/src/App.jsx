import { Link, Route, Routes } from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage.js';
import SiteLayout from './components/SiteLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import PostsPage from './pages/PostsPage.jsx';
import PostDetailPage from './pages/PostDetailPage.jsx';
import CreatePostPage from './pages/CreatePostPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import styles from './pages/Pages.module.css';

function NotFoundPage() {
  return <div className={styles.empty}><h1>Page not found</h1><p>That page isn’t here. Let’s get you back to the stories.</p><Link to="/posts">Browse stories</Link></div>;
}

export default function App() {
  const [posts, setPosts] = useLocalStorage('communityhub.posts', []);
  const [likedIds, setLikedIds] = useLocalStorage('communityhub.likes', []);
  function createPost(details) {
    const post = { ...details, id: -(Date.now() * 1000 + Math.floor(Math.random() * 1000)), userId: 0 };
    setPosts((current) => [post, ...current]);
    return post;
  }
  function toggleLike(id) {
    setLikedIds((current) => current.includes(id) ? current.filter((likedId) => likedId !== id) : [...current, id]);
  }

  return <Routes><Route element={<SiteLayout />}>
    <Route index element={<HomePage posts={posts} likedIds={likedIds} onToggleLike={toggleLike} />} />
    <Route path="posts" element={<PostsPage posts={posts} onSetPosts={setPosts} likedIds={likedIds} onToggleLike={toggleLike} />} />
    <Route path="posts/:postId" element={<PostDetailPage posts={posts} likedIds={likedIds} onToggleLike={toggleLike} />} />
    <Route path="create" element={<CreatePostPage onCreatePost={createPost} />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Route></Routes>;
}
