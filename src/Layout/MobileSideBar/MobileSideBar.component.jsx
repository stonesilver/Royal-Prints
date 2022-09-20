import { useEffect } from 'react';
import './MobileSideBar.styles.scss';

const MobileSideBar = ({ open }) => {
  useEffect(() => {
    if (open) {
      document.querySelector('body').style.overflow = 'hidden';
    } else {
      document.querySelector('body').style.overflow = 'auto';
    }
  }, [open]);

  return (
    <div className='mobile-sidebar'>
      <h3>CONTENT</h3>
    </div>
  );
};

export default MobileSideBar;
