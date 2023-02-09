import React from 'react'
import { Stack, ThemeProvider,DialogContent, CssBaseline, Typography, createTheme, Grid,Box,Button} from '@mui/material'
import { Container } from '@mui/system';
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
        body1: {
            fontSize: '18px',
            fontWeight: '600'
        },
        body2: {
            fontSize: '14px',
            fontWeight: '300'
        },
    }
});
function Benefits() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Stack direction='row' my={5}>
        <Container >
            <Typography
             variant='body1' 
             sx={{
                color: '#28DBD1',
                textAlign: 'center'
            }}
            >Benefits
            </Typography>
            <Typography variant='h2' align='center' >What We Offer</Typography>
            <DialogContent  sx={{
                backgroundImage:`url(${'headerbg.svg'})`,
                backgroundColor:'#0A1F2F',
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center'
            }}>

            </DialogContent>
            <Grid container columnSpacing={10} my={5} justifyContent='center' alignItems='center'>
                <Grid item sx={3} p={0}>
                <img src='Benefits (1).png' alt=''/>
                <Typography variant='h6' align='center' >Cross Chain</Typography>
                <Box width='200px'>
                <Typography variant='body2'  align='center'>Lorem ipsum dolor, sit amet consec tetur adipisicing elit. Provident eius eaque aspernatur amet
                </Typography></Box>
                </Grid>
                <Grid item sx={3} p={0}>
                    <img src='Benefits (2).png' alt=''/>
                    <Typography variant='h6' align='center' >Stack Pad</Typography>
                    <Box width='200px'>
                <Typography variant='body2'  align='center'>Lorem ipsum dolor, sit amet consec tetur adipisicing elit. Provident eius eaque aspernatur amet
                </Typography></Box>
                </Grid>
                <Grid item sx={3} p={0}>
                    <img src="Benefits (3).png" alt="" />
                    <Typography variant='h6' align='center' >Multi Layer</Typography>
                    <Box width='200px'>
                <Typography variant='body2'  align='center'>Lorem ipsum dolor, sit amet consec tetur adipisicing elit. Provident eius eaque aspernatur amet
                </Typography></Box>
                </Grid>
                <Grid item sx={3} p={0}>
                    <img src="Benefits (4).png" alt="" />
                    <Typography variant='h6' align='center' >Elite Projects </Typography>
                    <Box width='200px'>
                <Typography variant='body2'  align='center'>Lorem ipsum dolor, sit amet consec tetur adipisicing elit. Provident eius eaque aspernatur amet
                </Typography></Box>
                </Grid>
            </Grid>
            <div mx={5} style={{ display: "flex", justifyContent: "center" }}>
                    <Box mx={5} my={5}>
                        <Button 
                            variant="contained"
                            sx={{
                                backgroundColor:'#28DBD1',
                                color:'#02121D',
                               border:'2px solid #28DBD1',
                                padding:'15px',
                                fontWeight:'600',
                                transform:'skew(-5deg)'
                                ,'&:hover':{
                                    border:'2px solid #28DBD1'
                                    ,backgroundColor:'transparent'
                                    ,color:'#28DBD1'
                                    ,transform:'skew(0deg)'
                                }
                            }}>
                            VerifyKYC
                        </Button>
                    </Box>
                </div>
        </Container> 
    </Stack>
</ThemeProvider>
  )
}

export default Benefits
