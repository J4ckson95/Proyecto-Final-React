import React from 'react';
import { BrowserRouter } from "react-router-dom"
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
      </BrowserRouter>
    </>
  )
}

export default App
