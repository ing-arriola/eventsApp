import { FormEvent, useRef } from 'react';
import { Button } from '../ui/Button';
import styles from './EventSearch.module.css';

interface EventsSearchProps {
  onSearch: (year: string | undefined, month: string | undefined) => void;
}

export const EventsSearch = ({ onSearch }: EventsSearchProps) => {
  const yearInputRef = useRef<HTMLSelectElement>(null);
  const monthInputRef = useRef<HTMLSelectElement>(null);
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const selectedYear = yearInputRef.current?.value;
    const selectedMonth = monthInputRef.current?.value;
    onSearch(selectedYear, selectedMonth);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
          </select>
        </div>
      </div>
      <Button> Find events</Button>
    </form>
  );
};
