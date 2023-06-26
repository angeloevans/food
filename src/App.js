import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards';
import Food from './components/Food';

function App() {
  return (
    <div>
        <NavBar /> 
        <Hero />
        <HeadlineCards />
        <Food /> 
    </div>
  );
}

export default App;
