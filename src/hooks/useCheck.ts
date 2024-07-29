import { useState } from 'react';
import { IuseCheck } from '@/types';

export default function useCheck(initialvalues: IuseCheck[]) {
  const [checkbox, setCheckbox] = useState(
    initialvalues.map((item) => ({ ...item, isChecked: false }))
  );
  const singlecheck = (id: number) => {
    setCheckbox(
      checkbox.map((item) =>
        item.server_id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  return [checkbox, singlecheck] as const;
}
