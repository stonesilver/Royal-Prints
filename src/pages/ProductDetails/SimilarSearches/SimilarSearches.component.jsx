import './SimilarSearches.styles.scss';

const SimilarSearches = ({ data }) => {
  return (
    <div className='Similar-searches'>
      <div className='Similar-searches-header'>Similar searches</div>
      <div className='Similar-searches-content'>
        {data.map((item) => (
          <p key={item} className='Similar-searches-content-row'>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SimilarSearches;
