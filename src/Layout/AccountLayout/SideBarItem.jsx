import { Link } from 'react-router-dom';

const SideBarItem = ({ name, icon, link, border }) => {
  return (
    <Link to={link} className={`sidebar-item ${border && 'full-border'}`}>
      {icon}
      <p className='sidebar-item-text'>{name}</p>
    </Link>
  );
};

export default SideBarItem;
