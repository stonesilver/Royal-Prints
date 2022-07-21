import { useState, useEffect } from 'react';

export const useStickyNavBar = () => {
  const [position, setPosition] = useState('relative');

  useEffect(() => {
    var lastScrollTop = 0;

    const callback = () => {
      var st = document.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setPosition('sticky');
      } else {
        setPosition('relative');
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };

    document.addEventListener('scroll', callback, true);

    return document.removeEventListener('scroll', () => callback);
  }, []);

  return position;
};
