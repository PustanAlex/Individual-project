import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Mainpage } from './Mainpage/Mainpage';
import { Navigation } from './Navigation/Navigation';
import { Footer } from './Footer/Footer';


export const App = () => {
  return (
    <Router>
      <div className='appWrapper'>
      <div className='routesWrapper'>
        <Navigation />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path='*' element={<Mainpage/>}/>
        </Routes>
      </div>
      <Footer/>
      </div>
   
    </Router>
  );
};
