import { ReactComponent as RatingIcon } from '../assets/star.svg';

export const getRating = (stars, width, height) => {
  const starWidth = width || '1rem';
  const starHeight = height || '1rem';

  const rating = (filled, index) => {
    return (
      <RatingIcon
        key={index}
        style={{
          width: starWidth,
          height: starHeight,
          fill: filled ? '#ffbf00' : 'transparent',
        }}
      />
    );
  };

  const ratingsArray = [
    rating(true, 0),
    rating(true, 1),
    rating(true, 2),
    rating(true, 3),
    rating(true, 4),
    rating(false, 5),
    rating(false, 6),
    rating(false, 7),
    rating(false, 8),
    rating(false, 9),
  ];
  return ratingsArray.slice(5 - stars, 10 - stars);
};
