import { Link } from 'react-router-dom';

const QuickNavCard = ({ name, icon, link }) => {
  return (
    <div className='quick-nav-card'>
      {icon}
      <Link to={link} className='quick-nav-card-text'>
        {name}
      </Link>
    </div>
  );
};

export default QuickNavCard;
