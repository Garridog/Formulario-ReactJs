import React, {Fragment, useState} from 'react';
import { Contacto } from './components/contacto';
import Footer from './components/footer';
import Header from './components/header';

function App() {
  return (
    <div>
      <Header></Header>
      <Contacto></Contacto>
      <Footer></Footer>
    </div>
  );
}

export default App;
