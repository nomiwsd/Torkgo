import React from 'react'
import { Stack, ThemeProvider, CssBaseline, createTheme,linearProgressClasses, Typography, DialogContent, Grid, Avatar,LinearProgress, Button } from '@mui/material'
import { styled } from '@mui/material/styles';
import { Container } from '@mui/system';
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));
  
const theme = createTheme({

    palette: {
        mode: "dark",
        background: {
            default: '#0a1f2f'
        }
    },
    typography: {
        h2: {
            fontSize: "45px",
            fontFamily: " 'Rajdhani',san-serif",
            fontWeight: '700'
        },
        h4: {
            fontSize: '18px',
            fontWeight: '700'
        },
        body1: {
            fontSize: '15px',
            fontWeight: '600'
        },
        body2: {
            fontSize: '13px',
            fontWeight: '300'
        },
    }
});
function Previousproject() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Stack sx={{backgroundColor:'#02121D'}}>
            <Stack direction='row' my={5} >
                <Container>
                    <Typography
                        variant='body1'
                        sx={{
                            color: '#28DBD1',
                            textAlign: 'center'
                        }}
                    >Previous
                    </Typography>
                    <Typography variant='h2' align='center' >Completed Project</Typography>
                    <DialogContent sx={{
                        backgroundImage: `url(${'headerbg.svg'})`,
                        backgroundColor: '#02121D',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }}>

                    </DialogContent>
                </Container>
            </Stack>
            <Stack my={3}>
                <Container>
                 {/* Ist Card */}
                    <Grid px={3} container sx={{
                        backgroundColor:'#0A1F2F',
                        borderRadius:'5px',
                        '&:hover':{
                            border: '1px solid #28DBD1',
                        borderRadius:'5px',
                        }
                    }}>
                        <Grid item xs={5} ms={2} my={2}>
                            <Stack direction='row'>
                                <Avatar variant='square' sx={{
                                    width: '80px'
                                    , height: '80px',
                                    border: '1px solid #28DBD1',
                                }}
                                    alt="Remy Sharp"
                                    src='Cardimg(1)logo.png'
                                />
                                <Stack justifyContent='center' alignContent='center'>
                                    <Typography variant='h4' align='start' mx={2}>Cyber Battlefield</Typography>
                                    <Typography variant='body2' mx={2}>PRICE (GAC)=0.59 BUSD</Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={2} my={4}>
                                <Stack direction='row'  alignItems='start'
                                justifyContent='start'>
                            <Avatar sx={{
                                width: '50px'
                                , height: '50px',
                              
                            }}
                                alt="Remy Sharp"
                                src='binance.png'
                            />
                            </Stack>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant='body2' align='start' my={5}>2 Days Ago</Typography>
                        </Grid>
                        <Grid item xs={3} my={3}>
                        <Typography variant="body1" align='start'>
          Raised Amount
        </Typography>
         <Typography variant="h6"  align='start'>
          <span style={{color:'#28DBD1'}}>5000</span> / 15000 BUSD
        </Typography>
        <BorderLinearProgress variant="determinate" value={30} />
      
                        </Grid>
                    </Grid>
                    {/* 2nd Card */}
                    <Grid px={3} my={3} container sx={{
                        backgroundColor:'#0A1F2F',
                        borderRadius:'5px',
                        '&:hover':{
                            border: '1px solid #28DBD1',
                        borderRadius:'5px',
                        }
                    }}>
                        <Grid item xs={5} ms={2} my={2}>
                            <Stack direction='row'>
                                <Avatar variant='square' sx={{
                                    width: '80px'
                                    , height: '80px',
                                    border: '1px solid #28DBD1',
                                }}
                                    alt="Remy Sharp"
                                    src='Cardimg(6)logo.png'
                                />
                                <Stack justifyContent='center' alignContent='center'>
                                    <Typography variant='h4' align='start' mx={2}>Torgo IDO</Typography>
                                    <Typography variant='body2' mx={2}>PRICE (TCT)=0.59 BUSD</Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={2} my={4}>
                                <Stack direction='row'  alignItems='start'
                                justifyContent='start'>
                            <Avatar sx={{
                                width: '50px'
                                , height: '50px',
                              
                            }}
                                alt="Remy Sharp"
                                src='solana.png'
                            />
                            </Stack>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant='body2' align='start' my={5}>3 Days Ago</Typography>
                        </Grid>
                        <Grid item xs={3} my={3}>
                        <Typography variant="body1" align='start'>
          Raised Amount
        </Typography>
         <Typography variant="h6"  align='start'>
          <span style={{color:'#28DBD1'}}>13600</span> / 15000 BUSD
        </Typography>
        <BorderLinearProgress variant="determinate" value={90} />
      
                        </Grid>
                    </Grid>
                    {/* 3rd Card */}
                    <Grid px={3} my={3} container sx={{
                        backgroundColor:'#0A1F2F',
                        borderRadius:'5px',
                        '&:hover':{
                            border: '1px solid #28DBD1',
                        borderRadius:'5px',
                        }
                    }}>
                        <Grid item xs={5} ms={2} my={2}>
                            <Stack direction='row'>
                                <Avatar variant='square' sx={{
                                    width: '80px'
                                    , height: '80px',
                                    border: '1px solid #28DBD1',
                                }}
                                    alt="Remy Sharp"
                                    src='Cardimg(3)logo.png'
                                />
                                <Stack justifyContent='center' alignContent='center'>
                                    <Typography variant='h4' align='start' mx={2}>Red Monster</Typography>
                                    <Typography variant='body2' mx={2}>PRICE (MOT)=0.39 BUSD</Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={2} my={4}>
                                <Stack direction='row'  alignItems='start'
                                justifyContent='start'>
                            <Avatar sx={{
                                width: '50px'
                                , height: '50px',
                              
                            }}
                                alt="Remy Sharp"
                                src='eth.png'
                            />
                            </Stack>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant='body2' align='start' my={5}>4 Days Ago</Typography>
                        </Grid>
                        <Grid item xs={3} my={3}>
                        <Typography variant="body1" align='start'>
          Raised Amount
        </Typography>
         <Typography variant="h6"  align='start'>
          <span style={{color:'#28DBD1'}}>14000</span> / 15000 BUSD
        </Typography>
        <BorderLinearProgress variant="determinate" value={90} />
                        </Grid>
                    </Grid>
                    {/* 4th Card */}
                    <Grid px={3} my={3} container sx={{
                        backgroundColor:'#0A1F2F',
                        borderRadius:'5px',
                        '&:hover':{
                            border: '1px solid #28DBD1',
                        borderRadius:'5px',
                        }
                    }}>
                        <Grid item xs={5} ms={2} my={2}>
                            <Stack direction='row'>
                                <Avatar variant='square' sx={{
                                    width: '80px'
                                    , height: '80px',
                                    border: '1px solid #28DBD1',
                                }}
                                    alt="Remy Sharp"
                                    src='Cardimg(4)logo.png'
                                />
                                <Stack justifyContent='center' alignContent='center'>
                                    <Typography variant='h4' align='start' mx={2}>Hulk City</Typography>
                                    <Typography variant='body2' mx={2}>PRICE (HLK)=0.34 BUSD</Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={2} my={4}>
                                <Stack direction='row'  alignItems='start'
                                justifyContent='start'>
                            <Avatar sx={{
                                width: '50px'
                                , height: '50px',
                              
                            }}
                                alt="Remy Sharp"
                                src='aval.png'
                            />
                            </Stack>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant='body2' align='start' my={5}>5 Days Ago</Typography>
                        </Grid>
                        <Grid item xs={3} my={3}>
                        <Typography variant="body1" align='start'>
          Raised Amount
        </Typography>
         <Typography variant="h6"  align='start'>
          <span style={{color:'#28DBD1'}}>7500</span> / 15000 BUSD
        </Typography>
        <BorderLinearProgress variant="determinate" value={60} />
      
                        </Grid>
                    </Grid>
                    {/* 5th Card */}
                    <Grid px={3} my={3} container sx={{
                        backgroundColor:'#0A1F2F',
                        borderRadius:'5px',
                        '&:hover':{
                            border: '1px solid #28DBD1',
                        borderRadius:'5px',
                        }
                    }}>
                        <Grid item xs={5} ms={2} my={2}>
                            <Stack direction='row'>
                                <Avatar variant='square' sx={{
                                    width: '80px'
                                    , height: '80px',
                                    border: '1px solid #28DBD1',
                                }}
                                    alt="Remy Sharp"
                                    src='Cardimg(5)logo.png'
                                />
                                <Stack justifyContent='center' alignContent='center'>
                                    <Typography variant='h4' align='start' mx={2}>Servora Dex</Typography>
                                    <Typography variant='body2' mx={2}>PRICE (SPC)=0.81 BUSD</Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={2} my={4}>
                                <Stack direction='row'  alignItems='start'
                                justifyContent='start'>
                            <Avatar sx={{
                                width: '50px'
                                , height: '50px',
                              
                            }}
                                alt="Remy Sharp"
                                src='metic.png'
                            />
                            </Stack>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant='body2' align='start' my={5}>1 Week Ago</Typography>
                        </Grid>
                        <Grid item xs={3} my={3}>
                        <Typography variant="body1" align='start'>
          Raised Amount
        </Typography>
         <Typography variant="h6"  align='start'>
          <span style={{color:'#28DBD1'}}>15000</span> / 20000 BUSD
        </Typography>
        <BorderLinearProgress variant="determinate" value={70} />
      
                        </Grid>
                    </Grid>
                    <Button 
                                    variant="contained"
                                    sx={{
                                        backgroundColor:'#28DBD1',
                                        color:'#02121D',
                                       border:'2px solid #28DBD1',
                                        padding:'12px',
                                        fontWeight:'600',
                                        transform:'skew(-5deg)'
                                        ,'&:hover':{
                                            border:'2px solid #28DBD1'
                                            ,backgroundColor:'transparent'
                                            ,color:'#28DBD1'
                                            ,transform:'skew(0deg)'
                                        }
                                    }}>
                                  View More
                                </Button>
                </Container>
            </Stack>
            </Stack>
        </ThemeProvider>

    )
}

export default Previousproject
