import { Box } from '@mui/material';

import React from 'react';
 //reaact slider module

 // Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import CardFLex from './muiComponents/CardFLex';

import CarrouselCakes from './carrouselCake/CarrouselCakes';




const GalleryCakes = () => {




  return (
    
        <Box  width='90%' sx={{mt:4}} height='400px' >
 
            <CarrouselCakes/>
         </Box>

  )
}

export default GalleryCakes




