import { useColorMode } from "@/core/context";
import { Button, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import darkImg  from '../../../images/404_dark.png';
import lightImg from '../../../images/404_light.png'


export function ErrorPage() {
  const [colorMode] = useColorMode();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
      <Grid
      container
      flexDirection='column'
      alignItems='center'
      width='100vw'
      marginTop={8}
    >
      <Grid
        item
        display='flex'
        flexDirection='column'
        alignItems='center'
        gap={2}
      >
        <Typography
        fontFamily= 'Bree Serif'
        fontSize= {isMobile ? '1.5rem' : '2rem'}
        >Parece que você se perdeu...</Typography>
        <Typography
          fontFamily='Alegreya'
          fontSize={isMobile ? '1rem' : '1.5rem'}
        >Não encontramos a página que você procura</Typography>
      </Grid>
      <Grid>
        {
        colorMode === 'dark' ?
          <img src={darkImg} alt='logo ada_store_challenge em dark mode' width={isMobile ? '250px' : '350px'}/> : 
          <img src={lightImg} alt='logo ada_store_challenge em dark light' width={isMobile ? '250px' : '350px'}/>
      }
      </Grid>
      <Grid>
        <Button variant='contained'>Voltar para a Home</Button>
      </Grid>
    </Grid>
    
  )
}
