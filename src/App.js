import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.component';
import Footer from './components/Footer/Footer.component';
import Homepage from './pages/Homepage/Homepage.component';
import CateoryPage from './pages/CateoryPage/CateoryPage.component';
import ProductDetails from './pages/ProductDetails';
import SignIn from './pages/Auth/SignIn/SignIn.component';
import SignUp from './pages/Auth/SignUp/SignUp.component';
import PageNotFound from './pages/PageNotFound';
import { useSelector } from 'react-redux';
import './App.scss';

const App = () => {
  const { cart } = useSelector((state) => state.state);

  useEffect(() => {
    if (cart) {
      document.querySelector('body').style.overflow = 'hidden';
    } else {
      document.querySelector('body').style.overflow = 'auto';
    }
  }, [cart]);

  return (
    <div className='App'>
      <NavBar />
      <div className='main-content'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='auth/sign-In' element={<SignIn />} />
          <Route path='auth/sign-up' element={<SignUp />} />
          <Route path='en/category' element={<CateoryPage />} />
          <Route path='en/article/:productId' element={<ProductDetails />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
