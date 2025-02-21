import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards';
import Food from './components/Food';

function App() {
  const [searchTerm, setSearchTerm] = useState(""); // State for search input

  return (
    <div>
      <NavBar setSearchTerm={setSearchTerm} />
      <Hero />
      <HeadlineCards />
      <Food searchTerm={searchTerm} />
    </div>
  );
}

export default App;
