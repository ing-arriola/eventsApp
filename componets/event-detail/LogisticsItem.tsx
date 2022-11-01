import classes from './logistics-item.module.css';

interface LogisticsItem {
  Icon: () => JSX.Element;
  children: JSX.Element | JSX.Element[] | string;
}

export const LogisticsItem = ({ Icon, children }: LogisticsItem) => {
  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{children}</span>
    </li>
  );
};
