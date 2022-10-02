import { Link } from 'react-router-dom';

const QuickNavCard = ({ name, icon, link }) => {
  return (
    <div className='quick-nav-card' id={link.slice(1)}>
      {icon}
      <Link to={link} className='quick-nav-card-text'>
        {name}
      </Link>
    </div>
  );
};

export default QuickNavCard;
