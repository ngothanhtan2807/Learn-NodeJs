import React from "react";
import { Card } from "component/Card";
import { styled } from "styled-components";
import { Layout } from "containers/Layout";
import { Content } from "component/Content";

const StyleDiv = styled.div`
/* .center{ */
  width: 500px;
  height: 500px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  /* background-color: aqua; */
 
`
 const Home = () => {
return(
<Layout><Content></Content></Layout> 
)}





export default Home;