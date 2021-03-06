import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.component';
import Footer from './components/Footer/Footer.component';
import Homepage from './pages/Homepage/Homepage.component';
import CateoryPage from './pages/CateoryPage/CateoryPage.component';
import ProductDetails from './pages/ProductDetails';
import PageNotFound from './pages/PageNotFound';
import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <div className='main-content'>
        <Routes>
          <Route path='/' element={<Homepage />} />
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
