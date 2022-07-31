import { ReactComponent as RatingIcon } from '../assets/star.svg';

const rating = (filled, width, height) => {
  return (
    <RatingIcon
      style={{ width, height, fill: filled ? '#ffbf00' : 'transparent' }}
    />
  );
};

const ratingsArray = [
  rating(true, '0.75rem', '0.75rem'),
  rating(true, '0.75rem', '0.75rem'),
  rating(true, '0.75rem', '0.75rem'),
  rating(true, '0.75rem', '0.75rem'),
  rating(true, '0.75rem', '0.75rem'),
  rating(false, '0.75rem', '0.75rem'),
  rating(false, '0.75rem', '0.75rem'),
  rating(false, '0.75rem', '0.75rem'),
  rating(false, '0.75rem', '0.75rem'),
  rating(false, '0.75rem', '0.75rem'),
];

export const getRating = (stars) => ratingsArray.slice(5 - stars, 10 - stars);
