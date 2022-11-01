import styles from './ErrorAlert.module.css';

interface ErrorAlertProps {
  children: JSX.Element | JSX.Element[] | string;
}

export const ErrorAlert = ({ children }: ErrorAlertProps) => {
  return <div className={styles.alert}>{children}</div>;
};
