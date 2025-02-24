import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
   </Router>
  );
}

export default App;
