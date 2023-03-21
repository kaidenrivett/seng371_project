import { useState, useEffect } from "react";
import { AppBar, Container, Toolbar, Typography, Box, IconButton, Button, Stack, Item } from "@mui/material";
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function UniversalNavBar ({username}) {

    const [name, setName] = useState("temp");

    const handleHomeClick = () => {
        console.log("clicked home")
    }

    const handlePatientListClick = () => {
        console.log("clicked patient list")
    }

    const handlePatientRecordsClick = () => {
        console.log("clicked patient records")
    }

    const handleLogout = () => {
        console.log("clicked logout")
    }

    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <HealthAndSafetyIcon/>
                    <Typography
                        variant="h5"
                        href="/"
                    >
                        Electronic Health Records    
                    </Typography>
                    <Stack 
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                        <Button sx={{ml: "4rem", mr: "2rem"}} variant="inherit" onClick={handleHomeClick}>Home</Button>
                        <Button sx={{mx: "2rem"}} variant="inherit" onClick={handlePatientListClick}>Patient List</Button>
                        <Button sx={{mx: "2rem"}} variant="inherit" onClick={handlePatientRecordsClick}>Patient Records</Button>
                    </Stack>
                    <Stack
                        direction="row"
                        spacing={2}
                        justifyContent="flex-end"
                    >
                        <Typography variant="inherit"> {name} </Typography>
                        <AccountCircleIcon fontSize="medium" variant="inherit"/>
                        <Button color="inherit" onClick={handleLogout}>Logout</Button>
                    </Stack>   
                    
                </Toolbar>
            </AppBar>
    </Box>
    )
}