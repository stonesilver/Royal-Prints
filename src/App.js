import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';
import Homepage from './pages/Homepage/Homepage.component';
import CateoryPage from './pages/CateoryPage/CateoryPage.component';
import PageNotFound from './pages/PageNotFound';
import './App.scss';


const App = () => {
  return (
    <div className='App'>
      <Header />
      <div className='main-content'>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/en/category' component={CateoryPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>

      <Footer />
    </div>
  );
};

export default App;
