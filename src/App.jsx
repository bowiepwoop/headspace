import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlackSpace from './pages/BlackSpace';
import HeadSpace from './pages/HeadSpace';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/venting" element={<BlackSpace />} />
        <Route path="/motivation" element={<HeadSpace />} />
      </Routes>
    </Router>
  );
}

export default App;
