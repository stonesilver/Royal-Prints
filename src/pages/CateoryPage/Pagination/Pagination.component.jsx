import { useState } from 'react';
import { ReactComponent as ChevronLeft } from '../../../assets/chevron-left.svg';
import { ReactComponent as Chevronright } from '../../../assets/chevron-right.svg';
import './Pagination.styles.scss';

const Pagination = () => {
  const [current, setCurrent] = useState(1);
  const dataArray = [...Array(50).keys()];
  const maxBtn = current + 5;

  const handlePaginationBtnClick = (currentNumber) => {
    setCurrent(currentNumber);
  };

  return (
    <div className='pagination'>
      <ChevronLeft className='pagination-btn pagination-next-prev' />
      {dataArray
        .slice(current - 1)
        .filter((item) => item < maxBtn || item === dataArray.length - 1)
        .map((paginationBtn) => (
          <span
            key={paginationBtn}
            className={`pagination-btn ${
              current === paginationBtn + 1 && 'activeBtn'
            }`}
            onClick={() => handlePaginationBtnClick(paginationBtn + 1)}
          >
            {paginationBtn + 1}
          </span>
        ))}
      <Chevronright className='pagination-btn pagination-next-prev' />
    </div>
  );
};

export default Pagination;
