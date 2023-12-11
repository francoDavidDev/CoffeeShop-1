import { Avatar, Box, Card, CardMedia, Typography } from '@mui/material'
import React from 'react'
import Title from './Title'
import CarrouselCustomers from './carrouselCustomers/CarrouselCustomers'

import MediaQuery from 'react-responsive';




const CustomersReviews = () => {

  



  return (
    <Box pt={7} pb={7} sx={{bgcolor:'#E2D9C8'}}>
            <Box sx={{display:'flex',
            alignItems:'center',
             justifyContent:'center',
              flexDirection:'column'
              }}>
                <Typography variant='h6' fontSize='1rem'>
                    Come your join
                </Typography>

                <Title  title={'OUR HAPPY CUSTOMERS'}/>
            </Box>

            <Box
            height={250} 
            width='90%'
            sx={{
            paddingTop:'20px', margin:'auto'}}>

                  <MediaQuery minWidth={0} maxWidth={720} >
                  <CarrouselCustomers/>
                  </MediaQuery>

            

            </Box>
          

         

    </Box>
  )
}

export default CustomersReviews
