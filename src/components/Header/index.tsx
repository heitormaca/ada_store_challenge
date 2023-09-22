import { useState } from 'react';
import styled from 'styled-components';

import { 
    AppBar,
    Box, 
    Container,
    InputBase,
    Toolbar,
    Typography, 
} from '@mui/material';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import LogoLightMode from '../../../public/logo-lightmode.png';
import LogoDarkMode from '../../../public/logo-darkmode.png';

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

  function toggleThemeMode() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <AppBar 
      sx={{ 
        backgroundColor: isDarkMode 
          ? '#2C2828' 
          : '#F2A7BB' 
      }} 
      position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box sx={{ flexGrow: 0.5 }}>
          <img  src={isDarkMode ? LogoDarkMode :  LogoLightMode} />
        </Box>

        <Box sx={{ flexGrow: 1 }}>
            <SearchContainer>
              <SearchIcon fontSize='small' sx={{ color: '#F2A7BB', marginRight: '5px' }} />
                <InputBase
                    placeholder="Buscar produto…"
                    inputProps={{ 'aria-label': 'buscar produto' }}
                />
            </SearchContainer>
        </Box>

        <Box 
          sx={{ 
            flexGrow:  0.5, 
            marginLeft: '20px', 
            cursor: 'pointer', 
            display: 'flex'  
          }} 
          onClick={toggleThemeMode}  >
          {isDarkMode 
            ? <DarkModeIcon sx={{ color: '#F29F05'}} /> 
            : <LightModeIcon sx={{ color: '#262223'}} /> }
          {isDarkMode 
            ? <Typography
                color={'#F29F05'} 
                marginLeft={1}
              >
                Dark Mode
              </Typography> 
            : <Typography 
                color={'#262223'} 
                marginLeft={1}
              >
                Light Mode
              </Typography> }
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
