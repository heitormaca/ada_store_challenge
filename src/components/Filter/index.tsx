import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';

export function Filter() {
  return (
    <Box>
      <FilterAltIcon color='primary'/>
      <Typography variant='filter'>Filtrar</Typography>
      <FormGroup>
      <FormControlLabel control={<Checkbox />} label='Categoria'/>
      <FormControlLabel control={<Checkbox />} label='Classificação'/>
      <FormControlLabel control={<Checkbox />} label='Preço'/>
      <Checkbox/>
    </FormGroup>
    </Box>
    
  )
}
