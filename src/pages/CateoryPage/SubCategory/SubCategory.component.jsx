import { categoryButtonData } from '../../../utils/catetoryButonData';
import { ReactComponent as ChevronRight } from '../../../assets/chevron-right.svg';
import { Link } from 'react-router-dom';
import './SubCategory.styles.scss';

const SubCategory = () => {
  return (
    <div className='sub-category'>
      <div className='sub-category-container'>
        <Link className='sub-category-container-seller-name'>Accueil</Link>
        <ChevronRight className='sub-category-container-next-icon' />
        <Link className='sub-category-container-current-screen'>
          All Categories
        </Link>
      </div>
      <div className='sub-category-row'>
        {categoryButtonData.map(({ name }, index) => (
          <Link
            to='/en/category'
            key={index}
            className='sub-category-row-link'
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubCategory;
