import React from 'react';
import { useToggle } from '../hooks/useToggle';
import { useLocalStorage } from '../hooks/useLocalStorage';

const Toggle = () => {
  const { isToggled, toggle } = useToggle(false);
  const [value, setValue] = useLocalStorage('test',  'I am initial');

  return (
    <div>
      <h1>{value}</h1>
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={toggle}>Toggle</button>
      {isToggled && <p>To be Toggled</p>}
    </div>
  );
};

export default Toggle;
