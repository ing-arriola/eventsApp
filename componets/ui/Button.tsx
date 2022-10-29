import Link from 'next/link';
import styles from './Button.module.css';

interface buttonProps {
  children: JSX.Element[] | JSX.Element | string;
  link: string;
}

export const Button = ({ children, link }: buttonProps) => {
  return (
    <Link href={link} className={styles.btn}>
      {children}
    </Link>
  );
};
