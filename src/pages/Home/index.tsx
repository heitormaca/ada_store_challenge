import { useColorMode } from '@/core/context';
import { Box, CircularProgress, Grid, IconButton, Container} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useProducts } from '@/core/domains/products/product.hooks';
import { CardItems } from '@/components/CardItems';


export function Home() {
  const [colorMode, toggleColorMode] = useColorMode();
  const { data, isLoading } = useProducts({ pageNumber: '1', pageSize: '9' });
  return (
    <>
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
      <IconButton sx={{ ml: 1}} onClick={toggleColorMode} color="inherit">
        {colorMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>    
<Container >
<Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',   
      }}
    >
      {isLoading && <CircularProgress color="inherit" />}
    </Box>  

  <Grid container spacing={3} >
  {data?.map(repo => (
    <Grid    
    item xs={12} md={6} lg={4} key={repo.id} > 
    <CardItems
    id={repo.id}
    avatar={repo.avatar} 
    name={repo.name} 
    price={repo.price} 
    rating={repo.rating} 
    category={repo.category}/>     
    </Grid>
  ))}
</Grid>
</Container>
    </>
  );
}
