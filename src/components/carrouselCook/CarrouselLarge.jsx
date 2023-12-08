import React from 'react'


import Carousel from 'react-material-ui-carousel';
import Slider from 'react-slick';

import { COOKS } from '../../constants';


import { Card, Button, Typography,CardActions, CardMedia, CardContent } from '@mui/material';




const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 2,
    arrows:true,
    centerMode:true,
    centerPadding:'20x'
  };

const CarrouselLarge = () => {
  return (
    <Slider {...settings}   >
                {COOKS.map((cook)=>{
                return(
                
           
                              
                            <Card component='div' sx={{ height: 360,minWidth:185 , bgcolor:'#E2D9C8', border:'solid .5rem #F1F0EE'}}>


                                <CardMedia sx={{ height: 220}}
                                image={cook.image}
                                />

                                <CardContent component='div' sx={{paddingTop:'10px'}}>

                                <Typography gutterBottom variant="h5" component="div" fontWeight={'bold'}>
                                    {cook.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {cook.description}
                                    </Typography>
                                   
                                
                                </CardContent>
                                <CardContent component='div' sx={{alignContent:'center',justifyContent:'space-between',
                                display:'flex',
                                paddingTop:'0',
                                }}>
                                        <Typography gutterBottom variant="h6" fontSize={'1.2em'} component="div" fontWeight={'bold'}>
                                            {cook.price}
                                            </Typography>
                                            <CardActions   
                                        >
                                            
                                        <Button size="small" sx={{ position:'relative',
                                                bottom:'10px',
                                                 background:'#191717',
                                                 borderRadius:'5px'
                                                 }} >
                                                    <Typography fontSize={'0.8em'}
                                                    sx={{padding:'0.3em'}}
                                                    >
                                                    Learn More
                                                    </Typography>
                                          
                                        </Button>
                                        </CardActions>
                                </CardContent>
                                     
                               
                               
                            </Card>                                             
                            
                )
            })}
         
         </Slider>
  )
}

export default CarrouselLarge