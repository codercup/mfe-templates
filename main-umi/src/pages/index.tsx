import React, { useEffect, useState } from 'react';
import { Link } from 'umi';
import { login } from '@/api/login';
import { Button } from 'antd';
import styles from './index.less';

export default () => {
  const [data, setData] = useState('');
  useEffect(() => {
    const fetchData = async function() {
      const data = await login({ name: 'main-umi' });
      console.log(data);
      setData(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <div>{JSON.stringify(data, null, 2)}</div>
      <Link to="/login">go Login</Link>
      <br />
      <Button type="primary">Button</Button>
      <br />
      <Link to="/vue">go VUE</Link>
      <br />
      <Link to="/umi">go umi</Link>
      <br />
      <Link to="/react">go react</Link>
      <br />
    </div>
  );
};
