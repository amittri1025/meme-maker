import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import memeimg from './memetempinfo';
import EditIcon from '@mui/icons-material/Edit';
import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';
function Images() {

  return ( 
  <>
      <Container maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={2}>
            {memeimg.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
              <Link to='memes'>
                <Card sx={{ maxWidth: 345, ':hover': {
                            boxShadow: 20, // theme.shadows[20]
                          }, }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image={card.src}
                        alt="green iguana"

                      />
                    </CardActionArea>
                </Card>
              </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
  </> );
}

export default Images;