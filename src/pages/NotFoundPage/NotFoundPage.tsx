import React from 'react';
import imageNotFound from './page-not-found.png';
import styles from './NotFoundPage.module.scss';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <div className={styles.notFound}>
        <img
          src={imageNotFound}
          alt="image of not found page"
          className={styles.notFound__image}
        />
        <h2 className={styles.notFound__title}>Page not found</h2>
        <Link to={'/'} className={styles.notFound__button} replace>
          Back to home page
        </Link>
      </div>
    </>
  );
};
