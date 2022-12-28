import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';


function Page() {
  return (
      <div className='main'>
        <div className='card'>
          <Header />
          <MainContent />
          <Footer />
        </div>
      </div>
  )
}

ReactDOM.render(<Page />, document.getElementById("root"))