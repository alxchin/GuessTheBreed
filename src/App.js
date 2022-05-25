import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './homepage/HomePage';
import DogPage from './dogpage/DogPage';

function App() {
  return (
    <Router>
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/dog" element={<DogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
