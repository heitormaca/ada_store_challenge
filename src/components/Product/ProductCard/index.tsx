import { useState } from 'react';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Rating,
  Stack,
  Typography,
} from '@mui/material';
import StartIcon from '@mui/icons-material/Star';
import { ProductCardProps } from './types';
import ProductModal from '../ProductModal';
import currencyFormat from '@/core/utils/functions/currencyFormat';

function ProductCard(props: ProductCardProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid item>
        <Card
          onClick={() => handleOpen()}
          sx={{ padding: '1rem', borderRadius: 2 }}
        >
          <CardContent>
            <Stack alignItems="center" spacing={3}>
              <img
                src={props.product.avatar}
                width={280}
                alt="Imagem do produto"
                style={{ pointerEvents: 'none' }}
              />
              <Typography align="center" variant="body1">
                {props.product.name}
              </Typography>
              <Typography variant="h5">
                {currencyFormat(Number(props.product.price))}
              </Typography>
            </Stack>
          </CardContent>
          <CardActions>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <Rating
                name="read-only"
                value={props.product.rating}
                readOnly
                icon={<StartIcon color="secondary" />}
                precision={0.1}
              />
              <span>{props.product.category}</span>
            </Box>
          </CardActions>
        </Card>
      </Grid>
      <ProductModal
        open={open}
        onClose={handleClose}
        product={props.product}
        products={props.productList}
      />
    </>
  );
}

export default ProductCard;
