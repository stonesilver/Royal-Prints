import { Route, Switch } from 'react-router-dom';
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
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/en/category' component={CateoryPage} />
          <Route exact path='/en/article/:productId' component={ProductDetails} />
          <Route component={PageNotFound} />
        </Switch>
      </div>

      <Footer />
    </div>
  );
};

export default App;
