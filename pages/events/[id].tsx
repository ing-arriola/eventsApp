import { NextPage } from 'next';
import { useRouter } from 'next/router';
import {
  EventContent,
  EventLogistics,
  EventSummary,
} from '../../componets/event-detail';
import { ErrorAlert } from '../../componets/ui';
import { getEventById } from '../../dummy-data';

const DetailsEventPage: NextPage = () => {
  const router = useRouter();
  const eventId = router.query.id;
  const event = getEventById(eventId);
  if (!event) {
    return (
      <ErrorAlert>
        <p>No events were found!!</p>
      </ErrorAlert>
    );
  }
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.description}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default DetailsEventPage;
