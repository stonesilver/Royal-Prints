import { useState, useEffect } from 'react';

export const useStickyNavBar = () => {
  const [position, setPosition] = useState('relative');

  useEffect(() => {
    var lastScrollTop = 0;

    const callback = () => {
      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setPosition('sticky');
      } else {
        setPosition('relative');
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener('scroll', callback, false);

    return window.removeEventListener('scroll', () => console.warn('error'));
  }, []);

  return position;
};
