import { NavLink, Outlet } from 'react-router-dom';
import styles from './SiteLayout.module.css';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/posts', label: 'Stories' },
  { to: '/create', label: 'Write a story' },
  { to: '/about', label: 'About' },
];

export default function SiteLayout() {
  return <>
    <a className={styles.skipLink} href="#main-content">Skip to content</a>
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <NavLink className={styles.brand} to="/" aria-label="CommunityHub home"><span aria-hidden="true">◉</span> community<span>hub</span></NavLink>
        <nav className={styles.nav} aria-label="Main navigation">
          {links.map(({ to, label, end }) => <NavLink key={to} to={to} end={end} className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>{label}</NavLink>)}
        </nav>
      </div>
    </header>
    <main id="main-content" className={styles.main}><Outlet /></main>
    <footer className={styles.footer}><div><span>◉ communityhub</span><span>Stories are better when shared.</span></div></footer>
  </>;
}
