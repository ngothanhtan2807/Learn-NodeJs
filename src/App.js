import React from 'react';
import logo from './logo.svg';
import './App.css'
import { Button } from './component/Button';
import { Card } from 'component/Card';
function App() {
  return (
    <div className='App'>
      <div className='App-header'>

        <div>
          {/* <Button percent={12.3} >12.3%</Button>
          <Button percent={8.1}>8.1%</Button>
          <Button percent={-5.1}>5.1%</Button>
          <Button percent={3.2}>3.2%</Button>
          <Button width={77} height={32} textColor="white" bgColor="#5429FF">Following</Button>
          <Button width={77} height={32} textColor="#5429FF" bgColor="rgba(84, 41, 255, 0.1)">Follow</Button> */}
          <Card title="Revenue" amount="5.00" percent={12.3}></Card>
          <Card title="Roi" content="+14.02" percent={-5.1}></Card>
        </div>
      </div>
    </div>
  );
}

export default App;
