import React from 'react';

import { useToggle } from '../hooks/useToggle';
import { useMount, useUnMount } from '../hooks/useMount';

const Mount = () => {
  const { isToggled, toggle } = useToggle();

  return (
    <div>
      <button onClick={toggle}>Toggle mE</button>
      {isToggled && <Unmount />}
    </div>
  );
};

const Unmount = () => {
  useMount(() => {
    console.log('I am mounted');
  });

  useUnMount(() => {
    console.log('I am un mounted');
  });

  return (
    <div>
      Unmount Me
    </div>
  );
};

export default Mount;
