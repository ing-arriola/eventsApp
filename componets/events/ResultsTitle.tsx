import { Button } from '../ui/Button';
import styles from './ResultsTitle.module.css';

interface ResultsTitleProps {
  date: Date;
}

export const ResultsTitle = ({ date }: ResultsTitleProps) => {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={styles.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
};
