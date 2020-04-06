import { useState } from 'react';

export const useInc = (initial) => {
  const [value, setValue] = useState(initial = 0);

  const inc = () => {
    setValue(prevState => prevState + 1)
  };

  const dec = () => {
    setValue(prevState => prevState - 1)
  };

  return [value, { inc, dec }];
};
