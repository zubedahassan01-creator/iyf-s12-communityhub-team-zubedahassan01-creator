import { useEffect, useState } from 'react';

export default function ApiSearchExercise() {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setDebouncedQuery(query.trim().toLowerCase()), 300);
    return () => window.clearTimeout(timeoutId);
  }, [query]);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true); setError('');
    fetch('https://jsonplaceholder.typicode.com/users', { signal: controller.signal })
      .then((response) => { if (!response.ok) throw new Error('Could not load users.'); return response.json(); })
      .then(setUsers)
      .catch((cause) => { if (cause.name !== 'AbortError') setError(cause.message); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, []);
  const matches = users.filter((user) => `${user.name} ${user.email}`.toLowerCase().includes(debouncedQuery));
  return <section><h2>Find a community member</h2><label htmlFor="user-search">Search users</label><input id="user-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} />{loading && <p role="status">Loading users…</p>}{error && <p role="alert">{error}</p>}{!loading && !error && <ul>{matches.map((user) => <li key={user.id}>{user.name} — {user.email}</li>)}</ul>}</section>;
}
