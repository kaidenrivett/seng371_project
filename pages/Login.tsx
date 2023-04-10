import { Grid, Card, TextField, Button } from "@mui/material";
import { useState } from "react";

export default function Login() {

    const card_style = { height: "auto", minHeight: "30vh", width: "25vw", margin: "20px auto", padding: "20px" };
    const button_style = { margin: '1rem 0' };
    const text_field_style = { margin: "1rem 0" };

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLoginSubmit = async (event: any) => {


        event.preventDefault();

        console.log("Username is: " + username);
        console.log("Password is: " + password);

        setUsername("");
        setPassword("");

        //Send a request to backend to check whether username and password combination works
        let response = await fetch("/api/login",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ user: username, pass: password }),
                redirect: "manual"
            });
        
        // Login successful
        if (response.status == 200) {
            localStorage.setItem("username", username);
            window.location.href = "/";
        }
    }

    return (
        <Grid container alignItems="center" justifyContent="center">
            <Grid item xs={12}>
                <Card elevation={10} style={card_style}>
                    <TextField style={text_field_style}
                        label='Username'
                        placeholder='Enter username'
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        fullWidth
                        required />
                    <TextField style={text_field_style}
                        label='Password'
                        placeholder='Enter password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        fullWidth
                        required />
                    <Button type='submit'
                        color='primary'
                        variant="contained"
                        style={button_style}
                        onClick={handleLoginSubmit}
                        fullWidth>Sign in</Button>
                </Card>
            </Grid>
        </Grid>
    )
}