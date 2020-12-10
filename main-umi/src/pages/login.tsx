import React from 'react';
import { Link } from 'umi';
import styles from './login.less';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page login</h1>
      <Link to="/">go home</Link>
    </div>
  );
};
