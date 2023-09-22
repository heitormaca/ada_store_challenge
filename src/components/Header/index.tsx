import { useState } from 'react';
import styled from 'styled-components';

import { 
    AppBar,
    Box, 
    Container,
    IconButton,
    InputBase,
    List,
    ListItem,
    ListItemButton,
    Paper,
    SwipeableDrawer,
    Toolbar,
    Typography,
    useMediaQuery, 
} from '@mui/material';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import StarIcon from '@mui/icons-material/Star';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import LogoLightMode from '../../../public/logo-lightmode.png';
import LogoDarkMode from '../../../public/logo-darkmode.png';
import { ReactJSXElement } from 'node_modules/@emotion/react/types/jsx-namespace';

const SearchContainer = styled.div`
    background-color: #F7F7F7;
    max-width: 600px;
    height: 34px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    border-radius: 4px;
`;
    
export function Header() {
  const [isDarkMode, setIsDarkMode ] = useState(false);

  const isMobileMode = useMediaQuery('(max-width: 500px)');
  const [openDrawer, setOpenDrawer] = useState(false);
            
  function toggleThemeMode(): void {
    setIsDarkMode(!isDarkMode);
  }

  function renderResponsiveNavBarComponent(): ReactJSXElement {
    return(
      <>
        <SwipeableDrawer
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
          onOpen={() => setOpenDrawer(true)}
        >
          <Box />
          <Paper 
            sx={{ 
              backgroundColor: 
                isDarkMode 
                  ? '#2C2828' 
                  : '#F2A7BB',
              color:  
                isDarkMode 
                  ? '#F29F05' 
                  : '#2C2828'
            }}>
            <List  >
              <ListItem
                onClick={() => setOpenDrawer(false)}
              >
                <ListItemButton>
                  {isDarkMode
                    ? <DarkModeIcon sx={{ color: '#F29F05'}} /> 
                    : <LightModeIcon sx={{ color: '#262223'}} />}
                  {isDarkMode 
                    ? <Typography
                        color={'#F29F05'} 
                        marginLeft={1}>
                        Dark Mode
                      </Typography> 
                    : <Typography 
                        color={'#262223'} 
                        marginLeft={1}>
                        Light Mode
                    </Typography>} 
                </ListItemButton>
              </ListItem>
              <ListItem
                onClick={() => setOpenDrawer(false)}
              >
                <ListItemButton>
                  <LocalOfferIcon 
                    sx={{
                      color: isDarkMode 
                        ? '#F29F05' 
                        : '#2C2828',
                      marginRight: 1 
                    }}  
                  /> 
                  Categoria
                </ListItemButton>
              </ListItem>
              <ListItem
                onClick={() => setOpenDrawer(false)}
              >
                <ListItemButton>
                  <StarIcon  
                    sx={{
                      color: isDarkMode 
                        ? '#F29F05' 
                        : '#2C2828',
                      marginRight: 1 
                    }}    
                  /> 
                  Classificação
                </ListItemButton>
              </ListItem>
              <ListItem
                onClick={() => setOpenDrawer(false)}
              >
                <ListItemButton>
                  <AttachMoneyIcon 
                    sx={{
                      color: isDarkMode 
                        ? '#F29F05' 
                        : '#2C2828',
                      marginRight: 1 
                    }}  
                  />
                  Preço
                </ListItemButton>
              </ListItem>
            </List>
          </Paper>
        </SwipeableDrawer>
      </>
    )
  }

  return (
    <AppBar 
      sx={{ 
        backgroundColor: 
        isDarkMode 
          ? '#2C2828' 
          : '#F2A7BB' 
      }} 
      position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box sx={{ flexGrow: 0.5 }}>
          {isMobileMode 
            ? <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                onClick={() => setOpenDrawer(!openDrawer)}
                disableRipple
              >
                <MenuIcon sx={{ color:  isDarkMode ?  '#F29F05' : '#2C2828' }} />
              </IconButton> 
            : <img  src={isDarkMode ? LogoDarkMode :  LogoLightMode} />}
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          {isMobileMode 
            ? <SearchIcon fontSize='medium' sx={{ color:  isDarkMode ?  '#F29F05' : '#2C2828' }} />
            : (
              <SearchContainer>
                <SearchIcon fontSize='small' sx={{ color: '#F2A7BB', marginRight: '5px' }} />
                  <InputBase
                    placeholder="Buscar produto…"
                    inputProps={{ 'aria-label': 'buscar produto' }} />
              </SearchContainer>
            )}
        </Box>

        <Box 
          sx={{ 
            flexGrow:  0.5, 
            marginLeft: '20px', 
            cursor: 'pointer', 
            display: 'flex'  
          }} 
          onClick={toggleThemeMode}>
        
          {isMobileMode 
            ? null 
            : isDarkMode
              ? <DarkModeIcon sx={{ color: '#F29F05'}} /> 
              : <LightModeIcon sx={{ color: '#262223'}} />
          }

          {isMobileMode 
            ? null 
            : isDarkMode 
              ? <Typography
                  color={'#F29F05'} 
                  marginLeft={1}>
                  Dark Mode
                </Typography> 
              : <Typography 
                  color={'#262223'} 
                  marginLeft={1}>
                  Light Mode
                </Typography>
          } 

          {isMobileMode ? (renderResponsiveNavBarComponent()) : null}
        
          <ShoppingCartIcon  
            sx={{ 
              color: isDarkMode 
                ? '#F29F05' 
                : '#262223',
              ml: 2,
            }} 
          />
        </Box>
        </Toolbar>
      </Container>
  </AppBar>
  );
}
