import { NextPage } from 'next';
import { EventList } from '../componets/events';
import { getFeaturedEvents } from '../dummy-data';

const HomePage: NextPage = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <ul>
        <EventList eventList={featuredEvents} />
      </ul>
    </div>
  );
};

export default HomePage;
