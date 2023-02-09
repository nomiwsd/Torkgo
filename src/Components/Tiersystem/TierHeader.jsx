import React from 'react'
import { Stack, ThemeProvider,DialogContent, CssBaseline, Typography, createTheme} from '@mui/material'
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
        h3: {
            fontSize: '22px',
            fontFamily: " 'Rajdhani',san-serif",
            fontWeight: '600'
        },
        h6: {
            fontSize: '22px',
            fontFamily: " 'Rajdhani',san-serif",
            fontWeight: '600'
            ,color:'#28DBD1'
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
function TierHeader() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Stack direction='row' my={5} sx={{
        backgroundColor:'#02121D',
    }}>
        <Container>
            <Typography
             variant='body1' 
             sx={{
                color: '#28DBD1',
                textAlign: 'center'
            }}
            >Choose
            </Typography>
            <Typography variant='h2' align='center' >Tier System</Typography>
            <DialogContent  sx={{
                backgroundImage:`url(${'headerbg.svg'})`,
                backgroundColor:'#02121D',
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center'
            }}>

            </DialogContent>   
            </Container> 
    </Stack> 
    </ThemeProvider>
  )
}

export default TierHeader
