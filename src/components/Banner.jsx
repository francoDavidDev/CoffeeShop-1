import React from 'react'
import { Box, Button, FilledInput, Typography } from '@mui/material'
import Title from './Title'


const Banner = ({image,title,subtitle,text,input}) => {
  return (
    <Box sx={{ 
        backgroundImage:`url(${image})`,
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
        <Box sx={{ gap :6 }} >
                <Typography  variant='h4' color='white'>
                    {title}
                    <br></br>
                    <Typography component='span'variant='h4'  fontWeight='bold'
                    
                   >

                       {subtitle}
                      </Typography>
                </Typography>
 
              
               { text ? 
               <Button variant='contained'
                 color='primary'
               
                 sx={{borderRadius:10,height:30,marginTop:2, bgcolor:'#4F200D'}}
              
                 >

                    <Typography variant='p' fontSize={13} >
                       {text}
                    </Typography>
                 </Button>:
                 null
                 }

                 {/* INPUT TRUE FALSE */}
                {input ?   <FilledInput 
                 hiddenLabel:true
                 placeholder='Email andress'
                 disableUnderline={true}
                  sx={{width:'85%', borderRadius:'20px',
                    background:'white',
                    color:'black',
                    height:'3rem',
                    paddingBottom:2
                }}
                  
                  > 
                    
                    
                 </FilledInput> : null}
               
                {input ? <Button sx={{bgcolor:'red',ml:1, bgcolor:'brown',
                  borderRadius:'20px',height:'2.8rem', mb:0.5
                  }}>
                    <Typography sx={{pl:2, pr:2}}>
                        Suscribe
                    </Typography>
                    </Button>
                      :null  } 
              
        </Box>
    </Box>
  )
}

export default Banner
