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
import Profile from './pages/Auth/Profile/Profile.component';
import Addresses from './pages/Auth/Addresses/Addresses.component';
import Conversations from './pages/Auth/Conversations/Conversations.component';

const App = () => {
  return (
    <div className='App'>
      <MainNavBar />
      <div className='main-content'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='auth/sign-In' element={<SignIn />} />
          <Route path='auth/sign-up' element={<SignUp />} />
          <Route path='en/category' element={<CateoryPage />} />
          <Route path='en/article/:productId' element={<ProductDetails />} />

          {/* protected routes */}
          <Route path='account/en' element={<ProtectRoute />}>
            <Route index element={<Account />} />
            <Route path='profile' element={<Profile />} />
            <Route path='addresses/new' element={<Addresses />} />
            <Route path='message' element={<Conversations />} />
          </Route>

          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
