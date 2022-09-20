import { Route, Routes } from 'react-router-dom';
import MainNavBar from './Layout/MainNavBar/MainNavBar.component';
import Footer from './components/Footer/Footer.component';
import Homepage from './pages/Homepage/Homepage.component';
import CateoryPage from './pages/CateoryPage/CateoryPage.component';
import ProductDetails from './pages/ProductDetails';
import SignIn from './pages/Auth/SignIn/SignIn.component';
import SignUp from './pages/Auth/SignUp/SignUp.component';
import PageNotFound from './pages/PageNotFound';
import './App.scss';
import ProtectRoute from './Auth/ProtectRoute';
import Account from './pages/Auth/Account/Account.component';

const App = () => {
  return (
    <div className='App'>
      <div className='main-content'>
        <Routes>
          <Route element={<MainNavBar />}>
            <Route path='/' element={<Homepage />} />
            <Route path='auth/sign-In' element={<SignIn />} />
            <Route path='auth/sign-up' element={<SignUp />} />
            <Route path='en/category' element={<CateoryPage />} />
            <Route path='en/article/:productId' element={<ProductDetails />} />
          </Route>

          {/* protected routes */}
          <Route element={<ProtectRoute />}>
            <Route path='account' element={<Account />} />
          </Route>

          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
