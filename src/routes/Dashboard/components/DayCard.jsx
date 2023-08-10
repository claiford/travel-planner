import { useState } from 'react';

import { Box, Card, CardContent, Typography, Collapse, IconButton } from '@mui/material'
import { List, ListItem, ListItemText } from '@mui/material';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const DayCard = ({ day, num }) => {
    const [infoOpen, setInfoOpen] = useState(false)

    const handleInfo = () => {
        setInfoOpen(infoOpen ? false : true);
    }

    const locArr = day.day_locs.map((location) => {
        return (
            <ListItem disablePadding key={location.loc_name} sx={{ textAlign: 'center' }}>
                <ListItemText primary={location.loc_name} />
            </ListItem>
        )
    });

    return (
        <Box sx={{ minWidth: 275}}>
            <Card variant="outlined" sx={{ my: '20px', borderRadius: 5 }}>
                <CardContent>
                    <Typography variant="h6" component="div">
                        {day.day_title}
                    </Typography>
                    <IconButton onClick={handleInfo}>
                        <KeyboardArrowDownRoundedIcon />
                    </IconButton>
                    <Collapse in={infoOpen}>
                        <Typography sx={{ my: 1, mx: 'auto', width: '80%' }} color="text.secondary">
                            {day.day_desc}
                        </Typography>
                        <List>
                            {locArr}
                        </List>
                    </Collapse>
                </CardContent>
            </Card>
        </Box>
    )
};

export default DayCard;
