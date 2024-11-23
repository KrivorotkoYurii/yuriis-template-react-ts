import React from 'react';
import './styles/main.scss';
import styles from './styles/App.module.scss';

export const App: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.firstDiv}>Centered div</div>
    </section>
  );
};
