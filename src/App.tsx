import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import TruView from './Components/TruView/TruView';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <>
        <Header />

        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/post' element={<TruView />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Router>

        <Footer />
    </>
  );
}

export default App;
