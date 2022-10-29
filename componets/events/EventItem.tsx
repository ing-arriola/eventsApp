import Image from 'next/image';
import { SocialEvent } from '../../interfaces';
import { AddressIcon, ArrowRightIcon, DateIcon } from '../icons';
import { Button } from '../ui/Button';
import styles from './EventItem.module.css';

interface EventItemProps {
  event: SocialEvent;
}

export const EventItem = ({ event }: EventItemProps) => {
  const { image, title, date, location, id } = event;
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = location.replace(', ', '\n');
  return (
    <li className={styles.item}>
      <Image src={image} height={200} width={200} alt={title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={`/events/${id}`}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};
