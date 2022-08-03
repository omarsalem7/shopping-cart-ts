import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/nav';
import Home from './components/home';
import About from './components/about';
import NoPage from './components/noPage';
import Store from './components/store';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
