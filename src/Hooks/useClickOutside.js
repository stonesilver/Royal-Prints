import { useState, useEffect, useRef } from 'react';

export const useClickOutside = () => {
  const [visible, setVisible] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) setVisible(false);
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ref]);

  return { ref, visible, setVisible };
};
