import Image from 'next/image';
import { AddressIcon, DateIcon } from '../icons';
import { LogisticsItem } from './LogisticsItem';
import classes from './event-logistics.module.css';

interface EventLogisticsProps {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
}

export const EventLogistics = ({
  date,
  address,
  image,
  imageAlt,
}: EventLogisticsProps) => {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n');

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={image} alt={imageAlt} width={160} height={160} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem Icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem Icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
};
