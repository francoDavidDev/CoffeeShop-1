import { Box } from '@mui/material';

import useMediaQuery from '@mui/material/useMediaQuery';

//React responsive module
import MediaQuery from 'react-responsive';


import React from 'react';
 //reaact slider module

 // Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import CardFLex from './muiComponents/CardFLex';
import CarrouselLarge from './carrouselCook/CarrouselLarge';
import CarrouselSmall from './carrouselCook/CarrouselSmall';
import CarrouselExtraSmall from './carrouselCook/CarrouselExtraSmall';




const GalleryCook = () => {




  return (
    
        <Box  width='90%' sx={{mt:4}} height='400px' >

            <MediaQuery minWidth={0} maxWidth={600}>
            <CarrouselExtraSmall/>
            </MediaQuery>

            <MediaQuery minWidth={600} maxWidth={900}>
            <CarrouselSmall/>
            </MediaQuery>

            <MediaQuery minWidth={900}>
            <CarrouselLarge/>
            </MediaQuery>

         </Box>

  )
}

export default GalleryCook




