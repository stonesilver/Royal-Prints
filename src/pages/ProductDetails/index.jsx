import { useEffect } from 'react';
import SellerInfo from './SellerInfo';
import ImagesAndDetails from './ImagesAndDetails/ImagesAndDetails.component';
import MoreProductComponent from './MoreProductComponent/MoreProductComponent.component';
import RecentlyViewed from '../../components/RecentlyViewed/RecentlyViewed.component';
import SimilarSearches from './SimilarSearches/SimilarSearches.component';
import { pepperDemStyles } from '../../utils/carouselData';
import { similarSearchData } from './data';
import Description from './Description';
import Shipping from './Shipping';
import Review from './Review';
import { useScrollToTop } from '../../Hooks/useScrollToTop';
import './index.styles.scss';

const ProductDetails = () => {
  const flattenarray = pepperDemStyles.flat();
  const SimilarData = flattenarray.filter((item, index) => index < 8);
  const sellerData = flattenarray.filter((item, index) => index < 4);

  const scrollToTop = useScrollToTop();

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  return (
    <div className='product-detail'>
      <SellerInfo />
      <ImagesAndDetails />
      <Description />
      <Review />
      <Shipping />
      <MoreProductComponent
        header='Similar products'
        data={SimilarData}
        btnText='See More'
      />
      <div className='product-detail-recently-viewed'>
        <RecentlyViewed />
      </div>
      <MoreProductComponent
        header="Other fashion-home's products"
        data={sellerData}
        btnText={`All fashion-home's products`}
      />
      <SimilarSearches data={similarSearchData} />
    </div>
  );
};

export default ProductDetails;
