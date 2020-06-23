import React from 'react';
import './App.css';
import { Header, UploadGIF, Footer } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <UploadGIF />
      <Footer />
    </div>
  );
}

export default App;
