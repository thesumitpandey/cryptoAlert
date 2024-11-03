

import './App.css';
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import Newsb from './components/Newsb';
import About from './components/about';
import Newsa from './components/Newsent';
import Newsh from './components/Newsh';
import Newss from './components/Newss';
import Newssp from './components/Newssp';
import Newst from './components/newst';

const App = () => {
  const api = "c46f96e8e0944d1b830365e0474cf410";
  const [progress, set] = useState(0);

  return (
    <div className='a'>
      <HashRouter> 
        <NavBar />
        <LoadingBar color='blue' progress={progress} />
        <Routes>
          <Route exact path='/' element={<News set={set} key='general' api={api} pageSize={12} country='us' category='General' />} />
          <Route exact path='/Business' element={<Newsb set={set} key='business' api={api} pageSize={12} country='us' category='Bitcoin ' />} />
          <Route exact path='/Entertainment' element={<Newsa set={set} key='entertainment' api={api} pageSize={12} country='us' category='Ethereum' />} />
          <Route exact path='/Health' element={<Newsh set={set} key='health' api={api} pageSize={12} country='us' category='Tether' />} />
          <Route exact path='/Science' element={<Newss set={set} key='science' api={api} pageSize={12} country='us' category='Binance Coin ' />} />
          <Route exact path='/Sports' element={<Newssp set={set} key='sports' api={api} pageSize={12} country='us' category='Solana' />} />
          <Route exact path='/Technology' element={<Newst set={set} key='technology' api={api} pageSize={12} country='us' category='Dogecoin ' />} />
          <Route exact path='/About' element={<About />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

