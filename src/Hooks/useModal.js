import { useState, useEffect, useRef } from 'react';

export const useModal = () => {
  const [visible, setVisible] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setVisible(false);
        document.querySelector('body').style.overflow = 'auto';
      } else {
        document.querySelector('body').style.overflow = 'hidden';
      }
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ref]);

  return { ref, visible, setVisible };
};
