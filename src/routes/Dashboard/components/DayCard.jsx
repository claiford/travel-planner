import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { List, ListItem, ListItemText } from '@mui/material';

const DayCard = ({ day, num }) => {
    const locArr = day.locations.map((location) => {
        return (
            <ListItem disablePadding key={location} sx={{ textAlign: 'center' }}>
                <ListItemText primary={location} />
            </ListItem>
        )
    });

    return (
        <Box sx={{ minWidth: 275}}>
            <Card variant="outlined" sx={{ my: '20px', height: '300px', borderRadius: '10%', borderColor: 'black'}}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Day {num}
                    </Typography>
                    <Typography variant="h6" component="div">
                        {day.title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {day.desc}
                    </Typography>
                    <List>
                        {locArr}
                    </List>
                </CardContent>
                {/* <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions> */}
            </Card>
        </Box>
    )
};

export default DayCard;
