import React from 'react';
import { MainHeader } from './MainHeader';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
};
