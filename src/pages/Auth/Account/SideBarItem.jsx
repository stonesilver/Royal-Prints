import { Link } from 'react-router-dom';

const SideBarItem = ({ name, icon, link }) => {
  return (
    <Link to={link} className='sidebar-item'>
      {icon}
      <p className='sidebar-item-text'>{name}</p>
    </Link>
  );
};

export default SideBarItem;
