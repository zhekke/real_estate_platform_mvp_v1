import { useState } from 'react';

export function useAccordion() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (key) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isOpen = (key) => Boolean(openItems[key]);

  return { isOpen, toggleItem };
}
