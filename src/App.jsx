import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Pilares from './components/Pilares/Pilares';
import BlogPreview from './components/Blog/BlogPreview';


function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Pilares/>
      <BlogPreview/>
      <Footer/>
    </div>
  );
}

export default App;