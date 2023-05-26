import React from 'react';
import './App.css'
import Home from 'containers/Home';
import { Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Creator } from 'component/TopCreator';
import { TopCreator } from 'component/TopCreator';
import { CardTrending } from 'containers/Layout';
import img2 from 'Assets/Ellipse 6avt2.svg'
const StyleClass = styled.div`
align-items: center;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
  background-color: aqua;
  /* margin-right: 40px; */
  `
function App() {
  return (
    // <div className='App'>
    //   <div className='App-header'>
    <BrowserRouter>
      <StyleClass className='center'>
        {/* <Button percent={12.3} >12.3%</Button>
          <Button percent={8.1}>8.1%</Button>
          <Button percent={-5.1}>5.1%</Button>
          <Button percent={3.2}>3.2%</Button>
          <Button width={77} height={32} textColor="white" bgColor="#5429FF">Following</Button>
        <Button width={77} height={32} textColor="#5429FF" bgColor="rgba(84, 41, 255, 0.1)">Follow</Button> */}
        {/* <Card title="Revenue" amount="5.00" percent={12.3}></Card>
          <Card title="Roi" content="+14.02" percent={-5.1}></Card>
          <Card title="Roi" content="+14.02" percent={-5.1}></Card>
        <Card title="Roi" content="+14.02" percent={-5.1}></Card> */}
{/* <Creator id={1} name="john" top={1}></Creator> */}
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
        {/* <TopCreator></TopCreator> */}

        {/* <CardTrending like="21,5K Likes" nameTren="Ape In Love" idAuthor="@johnti60" amount="9.10" time="12 : 03 : 45" imgAvt={img2}></CardTrending> */}
      </StyleClass>
    </BrowserRouter>

  );
}

export default App;
