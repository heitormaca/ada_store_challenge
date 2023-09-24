import { Box, Container, Grid, IconButton, Skeleton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useProducts } from '@/core/domains/products/product.hooks';
import { useColorMode } from '@/core/context';
import { ProductCard } from '@/components/Product';

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
        <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
          {colorMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
      <Container maxWidth="lg">
        {isLoading ? (
          <Skeleton height={400} />
        ) : (
          <Grid container spacing={4} paddingY={10}>
            {data?.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <ProductCard product={product} productList={data} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
}
