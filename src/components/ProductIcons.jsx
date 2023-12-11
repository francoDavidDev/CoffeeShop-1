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
    justifyContent:'space-evenly',
    alignItems:'center',

    height:{xs:'150px'}
    }}
      >
      
        {ICONS.map((icon)=>{
            return(
                    <Box>
                    <img  key={icon.name} src={icon.name} alt=""  loading="lazy" width='50rem'/>
                    </Box>
            )
        })}
      
    </Box>
  )
}

export default ProductIcons
