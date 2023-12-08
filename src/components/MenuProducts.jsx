import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import MenuGallery from './MenuGallery'
import GalleryCook from './GalleryCook'
import Title from './Title'

const MenuProducts = () => {
  return (
    <Box  sx={{justifyContent:'center',alignItems:'center',display:'flex', flexDirection:'column',bgcolor:'#30261c'}}>
     <Title  title={'Coffe´s'} color={'#F1F0EE'} />
      <MenuGallery/>
      <Title  title={'Cake Shop'} color={'#F1F0EE'} />

      <GalleryCook/>

    </Box>
  )
}

export default MenuProducts
