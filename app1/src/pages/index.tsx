import React from 'react';
import styles from './index.less';
import Reditor from '@/components/Reditor';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>App1</h1>
      <Reditor />
    </div>
  );
}
