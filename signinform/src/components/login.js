import React from 'react';
import Grid from '@mui/material/Grid';
import { Avatar, Link, Paper, TextField, Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
const Login=()=> {

    const paperStyle = {
        padding: "20px",
        height: '70vh',
        width: 280,
        margin: "20px auto"
    };
    const avatarStyle = { backgroundColor: 'green' };
    const textfield ={
        margin: '10px'
    }
    const btnstyle={ 
        margin: '8px 0'
    } 

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><LockIcon></LockIcon></Avatar>
                    <h2>Sign In</h2>
                    <TextField label='UserName' placeholder='Enter Username' style={textfield}  fullWidth required> </TextField>
                    <TextField label='Password' placeholder='Enter Password' style={textfield}  fullWidth required></TextField>    
                </Grid>
                <FormControlLabel
                        control={
                            <Checkbox
                            name='Checked'
                            color="primary"
                        />}
                        label='Remember Me'
                    />
                    <Button type="submit" color="primary" variant="contained" style={btnstyle} fullWidth> Sign in</Button>
                    <Typography style={textfield}>
                        <Link href="#"> 
                            Forgot Password?
                        </Link>
                    </Typography>
                    <Typography style={textfield}>
                        <Link href="#"> 
                            Don't have an account? Sign up
                        </Link>
                    </Typography>
            </Paper>
        </Grid>
    );
}

export default Login;