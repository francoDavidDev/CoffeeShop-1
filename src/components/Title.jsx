import { Typography } from '@mui/material'
import React from 'react'

const Title = ({title,color}) => {
  return (
    <Typography variant='h4' fontWeight={'bold'} fontSize={'1.5rem'} sx={{mt:3}} color={color} > 
    {title}
 </Typography>
  )
}

export default Title
