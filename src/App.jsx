import { useState } from 'react'
import { Button,Container, Typography,Box } from '@mui/material'

import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import Navbar from './components/Navbar';
import BannerMain from './components/BannerMain';
import BannerFooter from './components/BannerFooters';
import ProductIcons from './components/ProductIcons';
import MenuProducts from './components/MenuProducts';

import bannerCoffe from './assets/img/banners/banner.jpg'
import CustomersReviews from './components/CustomersReviews';
import bannerFondoClaro from './assets/img/banners/bannerFondoClaro.jpg'
import BannerMid from './components/BannerMid';
import Footer from './components/Footer';


function App() {

  return (
    <>
    <Navbar/>
    <BannerMain image={ bannerCoffe} title={'Welcome'} subtitle={'We serve the riches coffe'} text={'in the city!'}/>
    <ProductIcons/>
    <MenuProducts />
    <BannerMid />
    <CustomersReviews/>
    <BannerFooter image={ bannerFondoClaro}/>
    
    <Footer/> 

    </>
  
  )
}

export default App
