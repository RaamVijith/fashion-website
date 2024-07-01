import { useState } from 'react'
import { Route, RouterProvider, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home_Slider from './components/Home_Slider/Home_Slider'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import ProductListing from './components/product_listing/Product_listing'

function App() {
  return (
    <>
     <Header/>
     <Home_Slider/>
     <ProductListing/>
     <Banner/>
     <Footer />
    </>
  )
}

export default App
