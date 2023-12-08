import React from 'react'
import { Box, Icon, Typography } from '@mui/material'
import { ICONS_MEDIA, SOCIAL_MEDIA } from '../constants'



function Footer() {
  return (
    <Box 

    sx={{bgcolor:'#30261c',
        display:'flex',
        height:{xs:'250px', sm:'200px'},
        flexDirection:{xs:'column', sm:'row'},
        justifyContent:{xs:'center' ,sm:''},
        alignItems:{xs:'center' ,sm:'start'},
        paddingTop:{xs:0,sm:7}
        
        }}
    >
       
        <Box
        width='14%'
          sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'sce'
        }}
        >

         <Typography  variant='h6' fontSize='1.2rem' ml={1} color='#F1F0EE'>
            COFFEE
        </Typography>   

        </Box>

        <Box
        width={1}
        sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'start',
            flexWrap:'nowrap',
            gap:{xs:6,sm:5,md:12}
        }}>
            {SOCIAL_MEDIA.map((text,i)=>{
                return(
                <Box   key={i} >
                    <Typography 
                    color='#F1F0EE'
                    variant='h6'
                     fontSize='0.8rem'
                     key={i}  
                     sx={{display:'flex', flexDirection:'column'}}>
                            {text.title}
                            
                    </Typography>

                    <Typography variant='a' component='a' href='/' sx={{textDecoration:'none'}}
                    color='#999999'
                    fontSize='0.6rem'>
                        {text.link1}
                        <br />
                        {text.link2}
                        <br />
                        
                        {text.link3}
                    </Typography>
                    
                 
                    </Box>
                )
            })}
        </Box>

        <Box   width='17%' sx={{
                           display:'flex',
                           justifyContent:'start',
                           alignItems:'center',
                           flexDirection:'column',
                           width:{sx:1,sm:'17%'},
                        
                    }}>
                        {ICONS_MEDIA.map((text,i)=>{
                            return( <Box component='div' key={i}>
                                <Typography key={i}   color='#F1F0EE'variant='h6' fontSize='0.8rem'
                             
                                 sx={{display:'flex',
                                  flexDirection:'column',
                              
                                  }}>
                                {text.title}
                                </Typography>
                           
                                <Box   sx={{mt:2,
                                 display:'flex',
                                  alignItems:'center',
                                   justifyContent:'center',
                                   gap:1}}width={1}>
                                {text.links.map((icon,i)=>{
                                    return(
                                        
                                       <img  key={i} src={icon.name} alt=""  width='20px'/>
                                       
                                    )
                                })}
                                </Box>
                                </Box>
                            )
                        })}
                    </Box>
                   

    </Box>
  )
}

export default Footer
