import styles from './event-content.module.css';

interface EventContentProps {
  children: JSX.Element | JSX.Element[] | string;
}

export const EventContent = ({ children }: EventContentProps) => {
  return <section className={styles.content}>{children}</section>;
};
