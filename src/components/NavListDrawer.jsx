import React from 'react'
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import AddReactionIcon from '@mui/icons-material/AddReaction';

const NavListDrawer = ({navLinks}) => {
  return (
   <Box sx={{width:250}} >
        <nav>
         {/*   <List>
                <ListItem>
                    <ListItemIcon>
                        <AddReactionIcon ></AddReactionIcon>
                    </ListItemIcon>
                    <ListItemText primary='Inbox' />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AddReactionIcon ></AddReactionIcon>
                    </ListItemIcon>
                    <ListItemText primary='Inbox2' />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AddReactionIcon ></AddReactionIcon>
                    </ListItemIcon>
                    <ListItemText primary='Inbox3' />
                </ListItem>
  </List>*/}
        </nav>
        <Divider/>
        <List>
            {navLinks.map((link,i)=>{
                return(
                    <ListItem disablePadding key={i}>
                        <ListItemButton 
                        component='a' 
                        href={link.path}
                        >
                             <ListItemIcon>
                                {link.icon}
                            </ListItemIcon>
                            <ListItemText >{link.title}</ListItemText>
                        </ListItemButton>
                </ListItem>
                )
            })}
           

        
        </List>
   </Box>
  )
}

export default NavListDrawer
