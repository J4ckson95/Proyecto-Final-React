import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import TitleCategory from './components/TitleCategory/TitleCategory';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/item/:id' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
          <Route path='/category/:category' element={<>
            <TitleCategory></TitleCategory>
            <ItemListContainer></ItemListContainer>
          </>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
