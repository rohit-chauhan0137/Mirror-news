import { Route,Routes } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {HomeComp} from '../src/components/Home/Home'
import {Technology} from '../src/components/Technology/Technology'
import Navbar from './Navbar';
import './App.css';

function App() {

  return (
    <>
    <Navbar/>
      <div>
    <Routes>        
      <Route path="/"  element={<HomeComp/>} />
      <Route path="/technology"  element={<Technology />}/>
      {/* <Route path="/cart"  element={<Cart/>}/> */}
    </Routes>
    </div>
    </>
  );
}

export default App;
