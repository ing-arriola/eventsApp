import { NextPage } from 'next';
import { EventList } from '../../componets/events';
import { EventsSearch } from '../../componets/events/EventsSearch';
import { getAllEvents } from '../../dummy-data';
import { useRouter } from 'next/router';

const AllEventsPage: NextPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  const findEventsHandler = (
    year: string | undefined,
    month: string | undefined
  ) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList eventList={events} />
    </div>
  );
};

export default AllEventsPage;
