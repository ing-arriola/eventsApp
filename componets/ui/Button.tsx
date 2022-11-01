import Link from 'next/link';
import { MouseEventHandler } from 'react';
import styles from './Button.module.css';

interface buttonProps {
  children: JSX.Element[] | JSX.Element | string;
  link?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, link, onClick }: buttonProps) => {
  if (link) {
    return (
      <Link href={link} className={styles.btn}>
        {children}
      </Link>
    );
  }
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};
