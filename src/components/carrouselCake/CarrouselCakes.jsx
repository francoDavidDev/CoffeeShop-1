import React,{useEffect,useState} from 'react';
import { Settings } from '@mui/icons-material';


import Slider from 'react-slick';

import { Card, Button, Typography,CardActions, CardMedia, CardContent } from '@mui/material';


import { COOKS } from '../../constants';




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

const CarrouselCakes = () => {


    const [w,setW] = useState(window.innerWidth)

    useEffect(()=>{
      const handleResize =()=>{
        setW(window.innerWidth)
      }
  
      window.addEventListener('resize', handleResize);
      return()=>{
        window.removeEventListener('resize', handleResize);
      }
  
     
    },[])
  
  
   
  
  if( w <= 500 ){
    settings.slidesToShow = 1,
    settings.arrows=false
   }else if( w <= 700){
    settings.slidesToShow = 1.5,
    settings.arrows=false
   }else if( w <= 950){
    settings.slidesToShow = 2
  
   }else{
    settings.slidesToShow = 3
   }
   return (
    <> 
    <Slider {...settings}   >
                {COOKS.map((cook)=>{
                return(
                
           
                             
                            <Card  key={cook.name} component='div' sx={{ height: 360,minWidth:185 , bgcolor:'#E2D9C8', border:'solid .5rem #F1F0EE'}}>


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
         
         </Slider></>
  )
}

export default CarrouselCakes
