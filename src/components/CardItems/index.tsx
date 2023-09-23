import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Rating } from '@mui/material';


type Items={
  id: string;
  avatar:string;
  name: string;
  price: string;
  rating: number;
  category: string;
}

export function CardItems({id, avatar, name, price, rating, category}: Items) {  

   return (    
    
    <Card sx={{ 
      maxWidth: 400, 
      borderRadius: 8,
      p:1,
    }} 
    onClick={()=>console.log(id)}>    
      <img style={{maxWidth: 350, padding: 20, borderRadius:8}} src={avatar} />     
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" textAlign='center'>
          {name}
        </Typography>
        <Typography gutterBottom variant="h4" component="div" textAlign='center'>        
        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits:2, maximumFractionDigits: 3 }).format(Number(price))}
        </Typography>        
      </CardContent>
      <CardActions  sx={{ display: 'flex', width: '100%', justifyContent: 'space-between'}}>
      <Rating name="read-only" value={rating} readOnly />  
        <Button size="small">{category}</Button>   
      </CardActions>
    </Card>
  );
}