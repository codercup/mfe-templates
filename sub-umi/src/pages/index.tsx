import React from 'react';
import { Link, useRequest } from 'umi';
import { Button } from 'antd';
import { login } from '@/api/login';
import Img from './yay.jpg';
import styles from './index.less';

const Data = () => {
  const { data, error, loading } = useRequest(() => login({ name: 'sub-umi' }));
  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return <div>{JSON.stringify(data)}</div>;
};
export default () => {
  return (
    <div>
      <h1 className={styles.title}>SUB-APP Page index</h1>
      <Link to="/login">go Login</Link>
      <img src={Img} alt="" width="200" />
      <Button type="primary">Button</Button>
      <Data></Data>
    </div>
  );
};
