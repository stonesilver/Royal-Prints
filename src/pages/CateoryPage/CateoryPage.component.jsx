import { useEffect } from 'react';
import SubCategory from './SubCategory/SubCategory.component';
import SortAndFilter from './SortAndFilter/SortAndFilter.component';
import CategoryDisplay from './CategoryDisplay/CategoryDisplay.component';
import NoResultFound from './NoResultFound/NoResultFound.component';
import { useScrollToTop } from '../../Hooks/useScrollToTop';
import Pagination from './Pagination/Pagination.component';
import './categoryPage.styles.scss';

const CateoryPage = () => {
  const scrollToTop = useScrollToTop();

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  return false ? (
    <NoResultFound />
  ) : (
    <div className='category'>
      <SubCategory />
      <SortAndFilter />
      <CategoryDisplay />
      <Pagination />
    </div>
  );
};

export default CateoryPage;
