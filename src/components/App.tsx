import React from 'react';
import './App.css';
import Banner from './Banner/Banner'
import Container from './Rfp/Container/Container'
import RfpService from './Rfp/Rfp.service';




const App: React.FC = () => {

  const rfps = new RfpService().getRfps();

  return (
    <div className="App">
      <header className="App-header">
        <Banner></Banner>
        <Container rfps={rfps}></Container>
      </header>
    </div>
  );
}

export default App;
