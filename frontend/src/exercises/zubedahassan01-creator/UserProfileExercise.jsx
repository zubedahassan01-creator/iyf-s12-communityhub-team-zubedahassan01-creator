import { Link, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch.js';

export default function UserProfileExercise() {
  const { userId } = useParams();
  const user = useFetch(`https://jsonplaceholder.typicode.com/users/${encodeURIComponent(userId)}`);
  const posts = useFetch(`https://jsonplaceholder.typicode.com/posts?userId=${encodeURIComponent(userId)}`);
  const todos = useFetch(`https://jsonplaceholder.typicode.com/todos?userId=${encodeURIComponent(userId)}`);
  if (user.loading || posts.loading || todos.loading) return <p role="status">Loading member profile…</p>;
  if (user.error || posts.error || todos.error || !user.data?.id) return <div role="alert"><p>We couldn’t load this profile.</p><Link to="/posts">Back to stories</Link></div>;
  return <article><h1>{user.data.name}</h1><p>{user.data.email} · {user.data.company.name}</p><section><h2>Stories</h2><ul>{(posts.data || []).map((post) => <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>)}</ul></section><section><h2>Tasks</h2><ul>{(todos.data || []).slice(0, 8).map((todo) => <li key={todo.id}>{todo.completed ? '✓' : '○'} {todo.title}</li>)}</ul></section></article>;
}
