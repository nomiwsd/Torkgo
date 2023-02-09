import React from 'react'
import { Grid, Stack, Typography, Box, Button } from '@mui/material'
import {
    createTheme,
    ThemeProvider,
    CssBaseline
} from "@mui/material";
import { red } from "@mui/material/colors";

const theme = createTheme({
    spacing: 10,
    palette: {
        mode: "dark",
    },
    typography: {
        h2: {
            fontSize: "60px"
            , fontFamily: " 'Rajdhani',san-serif",
            fontWeight: '700'
        }
    }
});

function Landing() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Stack direction='row' spacing={3} sx={{
                backgroundImage: `url(${'bg.png'})`
            }}>
                <Grid container my={5} mx={5} columnSpacing={4}>
                    <Grid item xs={6} p={0} m={0} my={5}>
                        <Typography variant='h2' align='start' mx={5}>
                            WEB 3.0
                        </Typography>
                        <Typography variant='h2' align='start' mx={5} >LAUNCHPAD</Typography>
                        <Typography variant='h2' align='start' mx={5}>FOR IDO & INO</Typography>
                        <Typography variant='h6' align='start' mx={5}>The next generation gaming ecosystem for IDO's and INO launchpad web 3.0 platform</Typography>
                        <div mx={5} style={{ display: "flex", justifyContent: "flex-start" }}>
                            <Box mx={5} my={2}>
                                <Button 
                                    variant="contained"
                                    sx={{
                                        backgroundColor:'#28DBD1',
                                        color:'#02121D',
                                       border:'2px solid #28DBD1',
                                        padding:'10px',
                                        fontWeight:'600',
                                        transform:'skew(-5deg)'
                                        ,'&:hover':{
                                            border:'2px solid #28DBD1'
                                            ,backgroundColor:'transparent'
                                            ,color:'#28DBD1'
                                            ,transform:'skew(0deg)'
                                        }
                                    }}>
                                    ExploreIDO
                                </Button>
                            </Box>
                        </div>
                    </Grid>
                    <Grid item xs={5}>
                        <img src='animateimg.png'  alt='wait for internet' className='animationimg'/>

                    </Grid>
                    <Grid item xs={2}>

                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>
            </Stack>
        </ThemeProvider>
    )
}

export default Landing
