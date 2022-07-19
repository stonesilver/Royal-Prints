import { useEffect } from 'react';
import CategoryButton from './ButtonLink.component';
import SortAndFilter from './SortAndFilter/SortAndFilter.component';
import CategoryDisplay from './CategoryDisplay/CategoryDisplay.component';
import { useScrollToTop } from '../../Hooks/useScrollToTop';
import './categoryPage.styles.scss';

const CateoryPage = () => {
  const scrollToTop = useScrollToTop();

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  return (
    <div className='category'>
      <CategoryButton />
      <SortAndFilter />
      <CategoryDisplay />
    </div>
  );
};

export default CateoryPage;
