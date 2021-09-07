import OninstagramCard from '../OnInstagramCard/OninstagramCard';

const OnInstagram = () => {
    return (
        <div className='on-instagram'>
        <div className='on-instagram-header'>
          <h2>Coronation On Instagram</h2>
        </div>
        <div className='on-instagram-container'>
          {[...Array(9).keys()].map((card, index) => (
            <OninstagramCard key={index} />
          ))}
        </div>
      </div>
    )
}

export default OnInstagram
