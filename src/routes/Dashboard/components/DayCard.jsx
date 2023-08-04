import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { List, ListItem, ListItemText } from '@mui/material';

const DayCard = ({ day, num }) => {
    const locArr = day.day_locs.map((location) => {
        return (
            <ListItem disablePadding key={location.loc_name} sx={{ textAlign: 'center' }}>
                <ListItemText primary={location.loc_name} />
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
                        {day.day_title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {day.day_desc}
                    </Typography>
                    <List>
                        {locArr}
                    </List>
                </CardContent>
            </Card>
        </Box>
    )
};

export default DayCard;
