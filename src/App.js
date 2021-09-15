import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';
import Homepage from './pages/Homepage/Homepage.component';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
