import React from 'react';
import logo from './logo.svg';
import './styles.css'
import Header from '../src/components/Header'
import ScrollComidas from './components/comidas/primeira/ScrollComidas'
import ScrollBebidas from './components/comidas/segunda/ScrollBebidas'
import ScrollSobremesas from './components/comidas/terceira/ScrollSobremesas'



function App() {
  return (
    <div className='w-full h-full'>
      <Header />
      <h2 className='text-2xl font-semibold font-mono paddin p-4'>Primeiro, seu prato</h2>
      <ScrollComidas/>
      <h2 className='text-2xl font-semibold font-mono paddin p-4'>Agora, sua bebida</h2>
      <ScrollBebidas />
      <h2 className='text-2xl font-semibold font-mono paddin p-4'>Agora, sua bebida</h2>
      <ScrollSobremesas />
    </div>
  );
}

export default App;
