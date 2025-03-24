import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ListSubheader from '@mui/material/ListSubheader';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';
import AddIcon from '@mui/icons-material/Add';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import avatar from '../../assets/Captura de pantalla 2025-03-24 003518.png'
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;



function Sidebar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const drawer = (
    <div>
      <Toolbar sx={{ bgcolor: '#000000' , color: '#DF5B17', height:'350px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
        <Box sx={{}}>
          <img src={avatar} width={200}/>
        </Box>
        <Box sx={{ 
          display:'flex',
          justifyContent:'space-evenly',
          width:'230px'
        }}>
          <AddCircleOutlineIcon />
          <AddCircleOutlineIcon />
          <AddCircleOutlineIcon />
          <AddCircleOutlineIcon />
          <AddCircleOutlineIcon />
          <AddCircleOutlineIcon />
        </Box>
        <Box sx={{ 
          display:'block',
          width:'230px',
          color:'#FFFFFF',
          marginTop:'10px'
        }}
        >
        Check here the badges that you can win on your journey through the categories. 
        </Box>
      </Toolbar>
      <Divider />
      <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: '#000000' , color: '#DF5B17'}}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick} sx={{ bgcolor: '#000000' , color: '#DF5B17' }}>
        <ListItemText primary="Culture specifics" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit sx={{ bgcolor: '#000000' , color: '#DF5B17' }}>
        <List component="div" disablePadding>
          <ListItemButton onClick={() => navigate('/geography')} sx={{ pl: 4 , bgcolor: '#333333' , color: '#FFFFFF'}}>
            <ListItemIcon >
              <AddIcon color="action" sx={{ color: '#FFFFFF' }}/>            
            </ListItemIcon>
            <ListItemText primary="Geografhy" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton onClick={() => navigate('/holidays')} sx={{ pl: 4 , bgcolor: '#333333' , color: '#FFFFFF'}}>
            <ListItemIcon >
              <WbSunnyIcon sx={{ color: '#FFFFFF' }}/>
            </ListItemIcon>
            <ListItemText primary="Holidays" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton onClick={() => navigate('/sports')} sx={{ pl: 4 , bgcolor: '#333333' , color: '#FFFFFF'}}>
            <ListItemIcon>
              <SportsScoreIcon sx={{ color: '#FFFFFF' }}/>
            </ListItemIcon>
            <ListItemText primary="Sports" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton onClick={() => navigate('/cuisine')} sx={{ pl: 4 ,bgcolor: '#333333' , color: '#FFFFFF' }}>
            <ListItemIcon>
              <LunchDiningIcon sx={{ color: '#FFFFFF' }} />
            </ListItemIcon>
            <ListItemText primary="Cuisine" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton onClick={() => navigate('/languages')} sx={{ pl: 4 ,bgcolor: '#333333' , color: '#FFFFFF' }}>
            <ListItemIcon>
              <LunchDiningIcon sx={{ color: '#FFFFFF' }} />
            </ListItemIcon>
            <ListItemText primary="Language" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton>
        <ListItemText primary="Client Specifics" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Industry Specifics" />
      </ListItemButton>
      
    </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          slotProps={{
            root: {
              keepMounted: true, // Better open performance on mobile.
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
     
    </Box>
  );
}

Sidebar.propTypes = {
  
  window: PropTypes.func,
};

export default Sidebar;