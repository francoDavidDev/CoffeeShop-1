import { Box } from '@mui/material';





import React from 'react';
 //reaact slider module

 // Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import CarrouselCoffees from './carrouselGallery/CarrouselCoffees';





const MenuGallery = () => {




  return (
    
        <Box  width='90%' sx={{mt:4}} height='400px' >
            <CarrouselCoffees/>
         </Box>

  )
}

export default MenuGallery




  