import React, { useState } from 'react'
import NavListDrawer from './NavListDrawer'
import { AppBar, Button, Drawer, IconButton, Toolbar, Typography,Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';


const navLinks=[
    {
        title:'Home',
        path:'#',
        icon:<HomeIcon/>
    },
    {
        title:'Login',
        path:'#',
        icon:<LoginIcon/>
    },
]

function Navbar() {

    const [open, setOpen] = useState(false)

  return (
    <div>

        <AppBar position='absolute' 
        sx={{
            backgroundColor:'rgba(240, 248, 255, 0)',
             boxShadow:'none',
             zIndex:'999',
             left:'0px',
             top:'0px',
             }} >
            <Toolbar>
             <IconButton
                size='large'
                onClick={()=>setOpen(true)} 
                sx={{display:{sm:'none',xs:'flex' },color:'white'}}
                edge='start'
             >
                <MenuIcon/>
             </IconButton>
             <Typography variant='h6'flexGrow={1}  sx={{color:'white'}}>
                Coffe
                </Typography>

                    <Box sx={{display:{xs:'none',sm:'block'},color:'white'}}>
                    {navLinks.map((link,i)=>{
                        return(
                            <Button color='inherit' key={i} 
                            component='a'
                            href={link.path}
                            >{link.title} </Button>
                        )
                    })}
                    </Box>

            </Toolbar>
            
        </AppBar>

    

        <Drawer 
        open={open} 
        anchor='left'
         onClose={()=>setOpen(false)}
         sx={{display:{sm:'none',xs:'flex' }}}
         > 
            <NavListDrawer navLinks={navLinks} />
        </Drawer>

     
    </div>
  )
}

export default Navbar
