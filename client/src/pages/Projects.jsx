import { useState, useEffect } from 'react';
import axios from 'axios';
import { useTheme } from '../context/ThemeContext';

export default function Projects() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=4')
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch live API data.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={{ padding: '80px', textAlign: 'center', fontSize: '1.1rem' }}>Loading live projects...</div>;
  }

  if (error) {
    return <div style={{ padding: '80px', textAlign: 'center', color: '#f87171', fontSize: '1.1rem' }}>{error}</div>;
  }

  return (
    <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Week 2: Live API Projects</h1>
      <div style={{ display: 'grid', gap: '20px' }}>
        {posts.map((post) => (
          <div key={post.id} style={{
            backgroundColor: isDarkMode ? '#1e293b' : '#ffffff',
            padding: '24px',
            borderRadius: '8px',
            border: `1px solid ${isDarkMode ? '#334155' : '#e2e8f0'}`,
            boxShadow: isDarkMode ? 'none' : '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
          }}>
            <h3 style={{ marginBottom: '10px', color: '#6366f1' }}>{post.title}</h3>
            <p style={{ fontSize: '0.95rem', opacity: 0.85, lineHeight: '1.5' }}>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}