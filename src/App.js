import React from 'react';
import Header from './Header';
import Form from './Form';
import Clock from './Clock';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <Form />
        <Clock/>
        <Footer />
    </div>
  );
}

export default App;
