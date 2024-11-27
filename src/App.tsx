import React from 'react';
import './styles/main.scss';
import styles from './styles/App.module.scss';
import { Outlet } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <section className={styles.container}>
      <Outlet />
    </section>
  );
};
