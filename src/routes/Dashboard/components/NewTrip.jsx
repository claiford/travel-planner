import { Box, Divider, FormControl, Button, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';

const NewTrip = () => {
    const [formValues, setFormValues] = useState({
        start_date: "",
        end_date: "",
        destination: "",
        title: ""
    })
    const addTrip = useOutletContext()[1];
    const navigate = useNavigate();

    const handleFormChange = (e, key) => {
        setFormValues((prevFormValues) => {
            const newFormValues = {...prevFormValues}
            newFormValues[key] = e.target.value;
            return newFormValues;
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTrip(formValues.start_date, formValues.end_date, formValues.destination, formValues.title);
        navigate("/dashboard")
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
                        onChange={((e) => handleFormChange(e, "start_date"))}
                    />
                    <TextField
                        focused
                        required
                        sx={{ width: "40%" }}
                        type="date"
                        label="End date"
                        onChange={((e) => handleFormChange(e, "end_date"))}
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
                        required
                        sx={{ width: "50%", borderColor: "white" }}
                        label="Destination"
                        variant="outlined"
                        onChange={((e) => handleFormChange(e, "destination"))}
                    />
                    <TextField
                        required
                        sx={{ width: "100%" }}
                        label="Trip Title"
                        variant="outlined"
                        onChange={((e) => handleFormChange(e, "title"))}
                    />
                </Box>
                <Button type="submit" color="primary">Submit</Button>
            </FormControl>
        </form>
    )
};

export default NewTrip;