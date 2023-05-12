import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import TitleCategory from './components/TitleCategory/TitleCategory';
import Err404 from './components/Err404/Err404';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/cartContext';
import CheckOut from './components/CheckOut/CheckOut';


function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/item/:id' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
            <Route path='/category/:category' element={<>
              <TitleCategory></TitleCategory>
              <ItemListContainer></ItemListContainer>
            </>}></Route>
            <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
            <Route path='*' element={<Err404></Err404>}></Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
