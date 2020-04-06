import React from 'react';
import { useInc } from '../hooks/useInc';

const Inc = () => {
  const [value, { inc, dec }] = useInc(0);

  return (
    <div>
      <button onClick={dec}>-</button>
      <strong>{value}</strong>
      <button onClick={inc}>+</button>
    </div>
  );
};

export default Inc;
