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
import { Login } from 'containers/Login';
import { Page404 } from 'containers/Page404';
const StyleClass = styled.div`
align-items: center;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
  /* background-color: aqua; */
  `
function App() {
  return (
    <BrowserRouter>
      <StyleClass className='center'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='*' element={<Page404 />}></Route>
        </Routes>
      </StyleClass>
    </BrowserRouter>

  );
}

export default App;
