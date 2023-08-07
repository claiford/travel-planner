import { Box, Divider, FormControl, Button, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useOutletContext } from 'react-router-dom'

const NewTrip = () => {
    const newTrip = useOutletContext()[1];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("test");
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormControl sx={{ width: "50%", my: 5, gap: 3 }}>
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: 3,
                    borderRadius: 3,
                    backgroundColor: grey[300]
                }}>
                    <TextField
                        focused
                        required
                        sx={{ width: "40%" }}
                        type="date"
                        label="Start date"
                    />
                    <TextField
                        focused
                        required
                        sx={{ width: "40%" }}
                        type="date"
                        label="End date"
                    />
                </Box>
                <Divider sx={{ borderColor: grey[800] }} />
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    justifyContent: "space-around",
                    p: 3,
                    borderRadius: 3,
                    backgroundColor: grey[300]
                }}>
                    <TextField
                        focused
                        required
                        sx={{ width: "50%", borderColor: "white" }}
                        label="Destination"
                        variant="outlined"
                    />
                    <TextField
                        focused
                        required
                        sx={{ width: "100%" }}
                        label="Trip Title"
                        variant="outlined"
                    />
                </Box>
                <Button type="submit" color="primary">Submit</Button>
            </FormControl>
        </form>
    )
};

export default NewTrip;