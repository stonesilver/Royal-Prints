import { useState } from 'react';
import { ReactComponent as ChevronLeft } from '../../../assets/chevron-left.svg';
import { ReactComponent as Chevronright } from '../../../assets/chevron-right.svg';
import './Pagination.styles.scss';

const Pagination = () => {
  const [current, setCurrent] = useState(1);
  const dataArray = [...Array(12).keys()];

  const start = current >= 7 ? current + 1 - 7 : 0;

  const paginationInDisplayArray = dataArray
    .slice(start)
    .filter(
      (item, index) => index < 7 && parseInt(item) !== dataArray.length - 1
    );

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
      {paginationInDisplayArray.map((paginationBtn) => (
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
      <span
        className={`pagination-btn ${
          current === dataArray.length && 'activeBtn'
        }`}
        onClick={() => handlePaginationBtnClick(dataArray.length)}
      >
        {dataArray.length}
      </span>
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
