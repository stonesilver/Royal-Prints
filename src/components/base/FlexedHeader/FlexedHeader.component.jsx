import './FlexHeader.styles.scss';

const FlexHeader = ({ header, value }) => {
  return (
    <div className='flexed-header'>
      <p className='flexed-header-header'>{header}</p>
      <p className='flexed-header-value'>{value}</p>
    </div>
  );
};

export default FlexHeader;
