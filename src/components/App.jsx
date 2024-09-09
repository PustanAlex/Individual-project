import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Mainpage } from './Mainpage/Mainpage';
import { Navigation } from './Navigation/Navigation';

export const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path='*' element={<Mainpage/>}/>
        </Routes>
      </div>
    </Router>
  );
};
