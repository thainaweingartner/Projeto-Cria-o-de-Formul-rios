import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/error.css';


export default function Error() {
  return (
    <>
      <Header />
      <div className='error'>
        <div>
          <h1>
            Rota não reconhecida
          </h1>
          <p>
            A rota digitada não foi reconhecida, favor retorne ao site inicial e tente novamente.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
