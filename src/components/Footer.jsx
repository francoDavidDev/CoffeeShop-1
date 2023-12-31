import React from 'react'
import { Box, Icon, Typography } from '@mui/material'
import { ICONS_MEDIA, SOCIAL_MEDIA } from '../constants'



function Footer() {
  return (

    

        <Box
        width={1}
        height={1}
        pt='22px'
        pb='22px'
        sx={{
            bgcolor:'#30261c',
            display:'flex',
            justifyContent:'space-between',
            alignItems:{sx:'center' ,sm:'start'},
            flexWrap:'nowrap',
            gap:2,
            flexDirection:{xs:'column',sm:'row'}
            
           
        }}>
               
                        <Box
                       
                        sx={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                        >

                        <Typography  variant='h6' fontSize='1.2rem' ml={1} color='#F1F0EE'>
                            COFFEE
                        </Typography>   

                        </Box>
                        <Box   width={1}  sx={{display:'flex', justifyContent:'space-evenly', }}>
            {SOCIAL_MEDIA.map((text,i)=>{
                return(
                    <>
                    <Typography 
                    color='#F1F0EE'
                    variant='h6'
                     fontSize='0.8rem'
                     key={i}  
                     sx={{display:'flex', flexDirection:'column',justifyContent:'space-around'}}>
                            {text.title}
                            <Typography variant='a' component='a' href='/' sx={{textDecoration:'none'}}
                    color='#999999'
                    fontSize='0.6rem'>
                        {text.link1}
                        <br />
                        {text.link2}
                        <br />
                        
                        {text.link3}
                    </Typography>
                            
                    </Typography>

                
                    
               </>
                   
                )
            })}
             </Box>
              <Box  sx={{
                           display:'flex',
                           justifyContent:'start',
                           alignItems:'center',
                           flexDirection:'column',
                           width:{sx:1,sm:'30%'},
                        
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
