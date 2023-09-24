import { useColorMode } from '@/core/context';
import { Box, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useProducts } from '@/core/domains/products/product.hooks';
import { Header } from '../../components/Header';

export function Home() {
  const [colorMode, toggleColorMode] = useColorMode();

  const { data, isLoading } = useProducts({ pageNumber: '1', pageSize: '5' });

  console.log('DATA: ', data);
  console.log('isLoading? : ', isLoading);

  return (
    <>
      <Header />
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,
          p: 3,
        }}
      >
      {colorMode} mode
      <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
        {colorMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      </Box>
    </>
  );
}
