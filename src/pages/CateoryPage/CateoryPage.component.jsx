import CategoryButton from './ButtonLink.component';
import SortAndFilter from './SortAndFilter/SortAndFilter.component';
import CategoryDisplay from './CategoryDisplay/CategoryDisplay.component';
import './categoryPage.styles.scss';

const CateoryPage = () => {
  return (
    <div className='category'>
      <CategoryButton />
      <SortAndFilter />
      <CategoryDisplay />
    </div>
  );
};

export default CateoryPage;
