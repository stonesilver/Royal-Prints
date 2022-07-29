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

  const handleNextPrevClick = (direction) => {
    if (direction === 'left') {
      if (current === 1) return;

      setCurrent((prevS) => prevS - 1);
    }

    if (direction === 'right') {
      if (current === dataArray.length) return;

      setCurrent((prevS) => prevS + 1);
    }
  };

  return (
    <div className='pagination'>
      <ChevronLeft
        className={`pagination-btn pagination-next-prev ${
          current === 1 && 'out-of-reach'
        }`}
        onClick={() => handleNextPrevClick('left')}
      />
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
      <Chevronright
        className={`pagination-btn pagination-next-prev ${
          current === dataArray.length && 'out-of-reach'
        }`}
        onClick={() => handleNextPrevClick('right')}
      />
    </div>
  );
};

export default Pagination;
