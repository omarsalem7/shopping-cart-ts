import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/nav';
import Home from './pages/home';
import About from './pages/about';
import NoPage from './pages/noPage';
import Store from './pages/store';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
