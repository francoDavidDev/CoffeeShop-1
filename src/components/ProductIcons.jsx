import React from 'react'
import { Box } from '@mui/material'



import { ICONS } from '../constants'





const ProductIcons = () => {
  return (
    <Box bgcolor={'#FAEED1'}
    width='100%'
     height='200px' 
      cols={4} 

      sx={{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    gap:{xs:'2rem',sm:'5rem'},
    height:{xs:'150px'}
    }}
      >
      
        {ICONS.map((icon)=>{
            return(
                
                    <img  key={icon.name} src={icon.name} alt=""  loading="lazy" width='70px'/>
                
            )
        })}
      
    </Box>
  )
}

export default ProductIcons
