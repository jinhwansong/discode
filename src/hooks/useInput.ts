import React, { useState } from 'react';

export default function useInput(initialValue: string) {
  const [name, setName] = useState(initialValue);
  const onName = (
    e:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setName(e.target.value);
  };
  return [name, onName, setName] as const;
}
