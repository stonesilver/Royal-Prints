import React, {useEffect, useState} from 'react'
import WelcomeImg1 from '../../../assets/imgFiles/large_image.webp';
import WelcomeImg2 from '../../../assets/imgFiles/large_image_mobile.webp';

const Welcome = () => {
    // I can't get the img element srcSet attribute to work now
    // I will use this logic to render the homepage welcome image for different screen sizes.
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
      window.addEventListener('resize', () => {
        setScreenWidth(window.innerWidth);
      });
    }, []);
    const src = screenWidth > 768 ? WelcomeImg1 : WelcomeImg2;
    // This is the code I am using inside the img element but it's not working for now
    // srcSet={`${WelcomeImg2} 768w, ${WelcomeImg1} 1280w`}
    // sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
    return (
        <div className='welcome'>
        <figure className='figure'>
          <img src={src} alt='welcome' className='welcome-img' />
        </figure>
      </div>
    )
}

export default Welcome
