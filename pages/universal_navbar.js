import { useState, useEffect } from "react";
import { AppBar, Container, Toolbar, Typography, Box, IconButton, Button, Stack, Item, Grid } from "@mui/material";
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from "next/link";
import Cookies from "js-cookie";


export default function UniversalNavBar () {

    const [name, setName] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [cookie, setCookie] = useState(Cookies.get("token"));

    useEffect(() => {
        console.log(cookie)
        if(cookie !== undefined) {
            setIsLoggedIn(true);
        }
    }, [cookie])

    const handleLogout = () => {
        Cookies.remove("token", {path: ""});
        setIsLoggedIn(false);
    }

    return (
        <AppBar position="static">
            <Toolbar>
            <Grid container direction="row" alignItems="center">
                
                    <HealthAndSafetyIcon/>
                    <Typography
                        variant="h5"
                        href="/"
                    >
                        Electronic Health Records    
                    </Typography>
                    
            </Grid>
            {isLoggedIn ? 
                <Grid container direction="row" justifyContent="flex-end" alignItems="center">
                    <Typography variant="inherit"> {name} </Typography>
                    <AccountCircleIcon fontSize="medium" variant="inherit"/>
                    <Link href="/Login">
                        <Button color="inherit" onClick={handleLogout}>Logout</Button>
                    </Link>
                    
                </Grid>
                : null
            }
            
            </Toolbar>
            
        </AppBar>
        
    )
}