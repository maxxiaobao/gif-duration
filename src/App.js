import React, { useContext } from 'react';
import { Header, Upload, Preview, Footer } from './components';
import { Store } from './store';
import './App.css';

function App() {
  const {
    state: { list }
  } = useContext(Store);
  return (
    <div className="App">
      <Header />
      {list.length > 0 && <Preview list={list} />}
      {list.length === 0 && <Upload />}
      <Footer />
    </div>
  );
}

export default App;
