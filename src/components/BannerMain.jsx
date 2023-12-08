import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import bannerCoffe from '../assets/img/banners/banner.jpg'


const BannerMain = () => {
  return (
    <Box sx={{
        backgroundImage:`url(${bannerCoffe})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        position:'relative'
        }}
        height='500px'
        zIndex={0}
        >
        <Box sx={{ p: '10rem 0 1rem 5rem',gap :6,
      }} >
                <Typography  variant='h5' color='white'
                  sx={{fontSize:{sm:'2rem', md:'2.5rem'}}}
                >
                    Welcome!
                </Typography>

                <Typography  variant='h3' color='white'
                sx={{fontSize:{sm:'2.5rem', md:'3.5rem'}}}
                >
                We serve the riches coffee
                </Typography>

                <Typography  variant='h4' color='white'
                sx={{fontSize:{sm:'1.5rem', md:'2rem'}}}
                >
                    in the city!
                </Typography>

                <Button variant='contained'
                 color='primary'
                 sx={{borderRadius:5,height:30,marginTop:2,bgcolor:'#4F200D',
                width:{sm:'200px', md:'250px'}}}
             
              
                 >

                    <Typography variant='p' fontSize={13}
                    
                    sx={{fontSize:{sm:15, md:15}}}>
                        Ver mas...
                    </Typography>
                 </Button>
        </Box>
    </Box>
  )
}

export default BannerMain
