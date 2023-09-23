import { Checkbox, FormControlLabel, FormGroup, Grid, Typography } from "@mui/material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';


export function Filter() {
  return(
    <Grid 
      container
      direction='column'
      spacing={2}
    >
      <Grid
        item
        display='flex'
        flexDirection='row'
        alignItems='center'
        gap={1}
      >
        <FilterAltIcon color='primary'/>
        <Typography variant='filter'>Filtrar</Typography>
      </Grid>
      <Grid 
        item
        marginLeft={4}
      >
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label='Categoria'/>
          <FormControlLabel control={<Checkbox />} label='Classificação'/>
          <FormControlLabel control={<Checkbox />} label='Preço'/>
        </FormGroup> 
      </Grid>
    </Grid>
  )
}

