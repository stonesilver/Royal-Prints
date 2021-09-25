import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { categoryButtonData } from '../../utils/catetoryButonData';
import { Link } from 'react-router-dom';

const CategoryButton = () => {
  return (
    <div className='flex flex-col px-4 md:px-6 lg:px-20 py-1 mt-4 mb-2 md:mt-2'>
      <div className='flex gap-x-1'>
        <Link className='text-xs'>Accueil</Link>
        <Link className='text-xs text-gray-600'>
          <FontAwesomeIcon className='ml-1' icon={faAngleRight} /> All
          Categories
        </Link>
      </div>
      <div className='no-scroll-bar flex gap-x-2 mt-1 overflow-x-scroll'>
        {categoryButtonData.map(({ name }, index) => (
          <Link
            key={index}
            className=' min-w-max p-2 text-xs border-2 border-black hover:bg-black hover:text-gray-200'
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryButton;
