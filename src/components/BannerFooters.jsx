import React from 'react'
import { Box, Button, Typography,FilledInput } from '@mui/material'

import Banner from './Banner'
import bannerFondoClaro from '../assets/img/banners/bannerFondoClaro.jpg'




const BannerFooter = ({}) => {
  return (
    <Box sx={{ 
        backgroundImage:`url(${bannerFondoClaro})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        position:'relative',

        display:'flex',
        alignItems:'center',
        justifyContent:'center'
        }}
        height='300px'
        zIndex={0}
        >
        <Box >
                 <Box sx={{
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        flexDirection:'column'}}>

                
                              <Typography  variant='h4' color='white'>
                                  'Join in and get 15% off!'
                                  
                                  </Typography>
                                  
                                  <Typography component='span'variant='h4'  fontWeight='bold'fontSize={20} textAlign='center'
                         
                                >

                                    susbribe to our newsletter and get 15% 
                                    off discount code.
                                    
                              </Typography>
                  </Box>   
                    
                      <Box sx={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    width:'100%',
                    mt:2
                    }}>

                 
        
                <FilledInput 
                 hiddenLabel:true
                 placeholder='Email andress'
                 disableUnderline={true}
                  sx={{ borderRadius:'20px',
                    background:'white',
                    color:'black',
                    height:'3rem',
                    paddingBottom:2,
                    
                    width:{md:'45rem',sm:'30em', xs:'20rem'}
                }}
                  
                  > 
                    
                    
                 </FilledInput> 
               
              <Button sx={{bgcolor:'red',ml:1, bgcolor:'#4F200D',
                  borderRadius:'20px',height:'3rem', 
                  width:{md:'7rem',sm:'7em', xs:'5rem'},
              
                  }}>
                    <Typography sx={{pl:2, pr:2,
                    fontSize:{xs:'0.74rem'}}}>
                        Suscribe
                    </Typography>
                    </Button>
                      
                    </Box>
        </Box>
    </Box>
  )
}

export default BannerFooter
