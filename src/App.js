import Home from './components/home/Home';
import Contacts from './components/contacts/Contacts';
import Movies from './components/movies/Movies';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  return (
  <div>
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    
    </BrowserRouter>
    <Footer />

  </div>
  );
}

export default App;

