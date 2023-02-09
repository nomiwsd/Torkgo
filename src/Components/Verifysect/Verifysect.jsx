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
function Verifysect() {
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
                    >Getting Start
                    </Typography>
                    <Typography variant='h2' align='center' >Simple as 1,2,3</Typography>
                    <DialogContent  sx={{
                        backgroundImage:`url(${'headerbg.svg'})`,
                        backgroundColor:'#0A1F2F',
                        backgroundRepeat:'no-repeat',
                        backgroundPosition:'center'
                    }}>

                    </DialogContent>
                    <Grid container columnSpacing={15} sx={{
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <Grid item sx={4}>
                        <img src='Submitkyc.png' alt=''/>
                        <Typography variant='h6' align='center' >1.Submit KYC</Typography>
                        <Box width='300px'>
                        <Typography variant='body2'  align='center'>Lorem ipsum dolor sit amet consectetur adipiscing elit odio massa ege
                        </Typography></Box>
                        </Grid>
                        <Grid item sx={4}>
                            <img src='verifywallet.png' alt=''/>
                            <Typography variant='h6' align='center' >2. Verify Wallet</Typography>
                            <Box width='300px'>
                        <Typography variant='body2'  align='center'>Lorem ipsum dolor sit amet consectetur adipiscing elit odio massa ege
                        </Typography></Box>
                        </Grid>
                        <Grid item sx={4}>
                            <img src="staking.png" alt="" />
                            <Typography variant='h6' align='center' >3. Start Staking</Typography>
                            <Box width='300px'>
                        <Typography variant='body2'  align='center'>Lorem ipsum dolor sit amet consectetur adipiscing elit odio massa ege
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

export default Verifysect
