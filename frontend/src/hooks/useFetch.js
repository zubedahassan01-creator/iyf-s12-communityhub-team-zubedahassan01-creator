import { useEffect, useState } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(Boolean(url));
  const [error, setError] = useState('');

  useEffect(() => {
    if (!url) { setLoading(false); return undefined; }
    const controller = new AbortController();
    let active = true;
    setLoading(true);
    setError('');

    fetch(url, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`Request failed (${response.status})`);
        return response.json();
      })
      .then((result) => { if (active) setData(result); })
      .catch((cause) => {
        if (active && cause.name !== 'AbortError') setError(cause.message || 'Could not load content.');
      })
      .finally(() => { if (active) setLoading(false); });

    return () => { active = false; controller.abort(); };
  }, [url]);

  return { data, loading, error };
}
