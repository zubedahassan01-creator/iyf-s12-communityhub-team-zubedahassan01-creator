import { useState } from 'react';

export default function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  return [value, { toggle: () => setValue((current) => !current), setTrue: () => setValue(true), setFalse: () => setValue(false) }];
}
