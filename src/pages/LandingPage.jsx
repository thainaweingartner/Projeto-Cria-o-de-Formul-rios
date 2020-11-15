import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/landing.css';


export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <div>
          <h1>
            A plataforma que vai mudar sua forma de viajar
          </h1>
          <p>
            O Snap Packing é a plataforma que facilita encontrar viagens e grupos de forma prática.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
