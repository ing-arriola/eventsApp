import Link from 'next/link';

import styles from './MainHeader.module.css';

export const MainHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Next Events</Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href="/events">Browse all events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
