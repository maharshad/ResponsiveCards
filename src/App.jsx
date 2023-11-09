import React from 'react';
import './App.css';
import { cardData } from './data';
import Card from './components/Card';
import { design } from './images';


function App() {
  return (
    <div className="App">
      <div className='Social'>
        <div className='left-container'>
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
        <div className='right-container'>
          <p>COMMUNITY</p>
          <h2>Meet Our <span>Community</span></h2>
          <p>Our mission is to provide everyone with high and useful reward for his/her trading, purchase and investment. Our goal is to make the cryptocurrency market grow faster. Our goal is to educate global citizens on the industry so they are not left behind during the next financial and technological boom.</p>


          {/* design image */}
          <div className="img-box">

            <img src={design} alt="Second Image" />
          </div>
        </div>
      </div>
    </div>


  );
}

export default App;
