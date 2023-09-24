/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Dialog,
  Grid,
  Stack,
  Typography,
  Rating,
  Button,
  TextField,
  IconButton,
} from '@mui/material';
import { useState, useEffect } from 'react';
import StartIcon from '@mui/icons-material/Star';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ProductModalProps } from './types';
import currencyFormat from '@/core/utils/functions/currencyFormat';
import { Product } from '@/core/domains/products/product.types';

function ProductModal(props: ProductModalProps) {
  const [currentProduct, setCurrentProduct] = useState<Product>(props.product);

  console.log(currentProduct.name);

  const [quantity, setQuantity] = useState(0);

  const currentPosition = props.products.indexOf(currentProduct);

  const nextProduct = () => {
    setCurrentProduct(props.products[currentPosition + 1]);
  };

  const previousProduct = () => {
    setCurrentProduct(props.products[currentPosition - 1]);
  };

  const handleAddQuantity = () => {
    setQuantity((qtd) => qtd + 1);
  };

  const handleRemoveQuantity = () => {
    setQuantity((qtd) => (qtd < 1 ? 0 : qtd - 1));
  };

  function recordKey(e: any) {
    if (e.key === 'ArrowLeft' && currentPosition !== 0) {
      previousProduct();
    } else if (
      e.key === 'ArrowRight' &&
      currentPosition !== props.products.length - 1
    ) {
      nextProduct();
    } else return;
  }

  useEffect(() => {
    if (props.open) {
      document.addEventListener('keydown', recordKey);
    }

    return () => {
      document.removeEventListener('keydown', recordKey);
      setCurrentProduct(props.product);
    };
  }, [props.open]);

  return (
    <Dialog open={props.open} onClose={props.onClose} maxWidth="md" fullWidth>
      <IconButton
        aria-label="Ir para o produto anterior"
        style={{
          position: 'absolute',
          top: '50%',
          left: 5,
        }}
        onClick={previousProduct}
        disabled={currentPosition === 0}
      >
        <KeyboardArrowLeftIcon />
      </IconButton>

      <IconButton
        aria-label="Ir para o próximo produto"
        style={{
          position: 'absolute',
          top: '50%',
          right: 5,
        }}
        onClick={nextProduct}
        disabled={currentPosition === props.products.length - 1}
      >
        <KeyboardArrowRightIcon />
      </IconButton>
      <Grid container spacing={0} bgcolor="#E9AB41">
        <Grid item xs={5}>
          <Box
            py={4}
            px={6}
            bgcolor="#ECB4C3"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img
              src={currentProduct.avatar}
              style={{
                width: '-webkit-fill-available',
                objectFit: 'cover',
                borderRadius: '8px',
                pointerEvents: 'none',
              }}
              alt="Imagem do produto"
            />
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box
            bgcolor="#E9AB41"
            borderLeft="2px solid black"
            height="100%"
            py={4}
            px={6}
          >
            <Stack spacing={2}>
              <Typography variant="h5">{currentProduct.name}</Typography>
              <Stack pl={2} spacing={4}>
                <Typography variant="body1">
                  {currentProduct.description}
                </Typography>
                <Typography variant="h4">
                  {currencyFormat(Number(currentProduct.price))}
                </Typography>
                <Box display="flex" justifyContent="space-between">
                  <Rating
                    name="read-only"
                    value={currentProduct.rating}
                    readOnly
                    icon={<StartIcon color="secondary" />}
                    precision={0.1}
                  />
                  <Typography>{currentProduct.category}</Typography>
                </Box>
                <Box display="flex" justifyContent="flex-end">
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    width="6rem"
                    marginRight={2}
                  >
                    <RemoveIcon onClick={handleRemoveQuantity} />
                    <Box>
                      <TextField type="number" size="small" value={quantity} />
                    </Box>
                    <AddIcon onClick={handleAddQuantity} />
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="10rem"
                  >
                    <Button variant="contained" color="secondary">
                      Adicionar ao carrinho
                    </Button>
                  </Box>
                </Box>
              </Stack>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Dialog>
  );
}

export default ProductModal;
