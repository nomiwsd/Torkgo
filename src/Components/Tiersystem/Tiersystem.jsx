import React from 'react'
import { Stack, ThemeProvider,DialogContent, CssBaseline, Typography, createTheme, Grid,Box,Button, Divider} from '@mui/material'
import { Container } from '@mui/system';
import {Card,CardContent,LinearProgress,linearProgressClasses, Avatar} from '@mui/material'
import { styled } from '@mui/material/styles';
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
            fontSize: '13px',
            fontWeight: '600'
        },
        body2: {
            fontSize: '14px',
            fontWeight: '300'
        },
    }
});
function Tiersystem({Tiers}) {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />         
       <Card  sx={{
      position:'relative'}}>
     <CardContent sx={{paddingLeft:'40px',paddingRight:'40px'}}>
     <Typography variant="h3" align='center'>
          {Tiers.Mainhead}
        </Typography> 
        <Stack justifyContent='center' alignItems='center'>
            
        <Avatar variant='square' src= {Tiers.avatarimg} sx={{
      width:'80px'
     , height:'80px',
     }}/>
<Typography variant="h6" align='center'>
{Tiers.Sechead}
        </Typography> 
        </Stack>
             </CardContent>
    <Divider/>
      <CardContent sx={{paddingLeft:'40px',paddingRight:'40px'}}>
        <Typography variant="body1" my={2} align='center'>
          Staking Requirements
        </Typography>
         <Typography variant="body2" mb={2} align='center'>
         {Tiers.cardtext1}
        </Typography> 
        <Divider/>
        <Typography variant="body1" my={2} align='center'>
          Allocation Type
        </Typography>
         <Typography variant="body2" mb={2} align='center'>
         {Tiers.cardtext2}
        </Typography>
        <Divider/>
        <Typography variant="body1" my={2} align='center'>
        Minimum Staking
        </Typography>
         <Typography variant="body2"  mb={2} align='center'>          
         {Tiers.cardtext3}
        </Typography>
        <Divider/>
        <Typography variant="body1" my={2} align='center'>
          Pool Weight
        </Typography>
         <Typography variant="body2"  align='center'>
         {Tiers.cardtext4}
        </Typography>
      </CardContent>
      <Stack mx={5} px={3} mb={3}>
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
                                  Select Plan
                                </Button>
                                    
      </Stack>
    </Card>
              
            
</ThemeProvider>

  )
}

export default Tiersystem
