import { SocialEvent } from '../../interfaces';
import { EventItem } from './EventItem';
import styles from './EventList.module.css';

interface EventListProps {
  eventList: SocialEvent[];
}

export const EventList = ({ eventList }: EventListProps) => {
  return (
    <ul className={styles.list}>
      {eventList.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
};
