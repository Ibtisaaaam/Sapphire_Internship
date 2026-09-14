import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      backgroundColor: isDarkMode ? '#1e293b' : '#ffffff',
      borderBottom: `1px solid ${isDarkMode ? '#334155' : '#e2e8f0'}`,
      transition: 'background-color 0.3s ease'
    }}>
      <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#6366f1' }}>Sapphire SPA</div>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', alignItems: 'center', margin: 0 }}>
          <li><Link to="/" style={{ textDecoration: 'none', color: isDarkMode ? '#cbd5e1' : '#475569', fontWeight: '500' }}>Home</Link></li>
          <li><Link to="/projects" style={{ textDecoration: 'none', color: isDarkMode ? '#cbd5e1' : '#475569', fontWeight: '500' }}>Projects</Link></li>
          <li>
            <button onClick={toggleTheme} style={{
              padding: '8px 16px',
              backgroundColor: '#6366f1',
              color: '#ffffff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '500'
            }}>
              {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}