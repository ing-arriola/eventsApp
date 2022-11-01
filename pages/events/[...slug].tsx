import { NextPage } from 'next';
import { getFilteredEvents } from '../../dummy-data';
import { useRouter } from 'next/router';
import { EventList } from '../../componets/events';
import { ResultsTitle } from '../../componets/events/ResultsTitle';
import { Button, ErrorAlert } from '../../componets/ui';

const FilteredEventsPage: NextPage = () => {
  const router = useRouter();
  let events;
  let date;
  const filteredData = router.query.slug;
  if (!filteredData) {
    return <p className="center">Loading...</p>;
  } else {
    const year = Number(filteredData[0]);
    const month = Number(filteredData[1]);
    if (
      isNaN(year) ||
      isNaN(month) ||
      year > 2030 ||
      year < 2021 ||
      month < 1 ||
      month > 12
    ) {
      return (
        <>
          <ErrorAlert>
            <p>
              Invalid values! Please provide valid values for year and month!
            </p>
          </ErrorAlert>
          <div className="center">
            <Button link="/events">Show all events</Button>
          </div>
        </>
      );
    }
    events = getFilteredEvents({
      year: year,
      month: month,
    });
    date = new Date(year, month - 1);
  }

  return (
    <>
      {events.length > 0 && events ? (
        <>
          <ResultsTitle date={date} />
          <EventList eventList={events} />
        </>
      ) : (
        <>
          <ErrorAlert>
            <p>No events were found!!</p>
          </ErrorAlert>
          <div className="center">
            <Button link="/events">Show all events</Button>
          </div>
        </>
      )}
    </>
  );
};

export default FilteredEventsPage;
