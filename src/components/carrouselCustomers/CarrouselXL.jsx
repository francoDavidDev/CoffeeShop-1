import React from 'react'
import { Avatar, Box, Card, CardMedia, Typography } from '@mui/material'



import { CUSTOMERS } from '../../constants'
import Slider from 'react-slick'
import { CardContent } from '@mui/joy'

const CarrouselXl = () => {
    
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 2,
    arrows:true
  };

  return (
    <Slider  {...settings}>
              {CUSTOMERS.map((customer,i)=>{
                return(

                  <Card  key={i} component='div' sx={{ height: 200,mb:2,
                  width: 50, p:1, 
                  flexWrap:'wrap',
                  boxShadow:'5px 5px 10px '
                  }}>


                        <CardContent sx={{display:'flex',
                         alignItems:'center',
                          justifyContent:'start',
                          flexDirection:'row',
                          mb:2
                          }}>

                            
                        <Avatar src={customer.photo} sx={{ mt:1}} />
                        <Typography gutterBottom variant="h6" component="div" fontWeight={'bold'}
                        sx={{ mt:2,ml:1,lineHeight:1.2}} 
                        >
                          {customer.name}
                           <br />
                           <Typography  component='p' fontSize={15} color={'grey'}>
                            {customer.tag}
                          </Typography>

                          </Typography>
                 
                      
                        
                        </CardContent>

                      
                         
                 


                     
                          <Typography variant="body2" color="text.secondary">
                              {customer.descripcion}
                          </Typography>
                     
                  
              
                       
                 
              </Card>                
                )
              })}

              </Slider>
  )
}

export default CarrouselXl
