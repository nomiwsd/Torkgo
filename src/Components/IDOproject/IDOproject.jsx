import React from 'react'
import {Stack,Card,ThemeProvider,CssBaseline,createTheme,linearProgressClasses,CardActions,CardContent,CardMedia,Button,Typography,LinearProgress,Box, Avatar} from '@mui/material'
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
          fontSize: "60px",
          fontFamily: " 'Rajdhani',san-serif",
          fontWeight: '700'
      },
      body1: {
          fontSize: '14px',
          fontWeight: '500'
      },
      body2: {
          fontSize: '13px',
          fontWeight: '300',
          color:'#28DBD1'
      },
  }
});
function IDOproject({Cards}) {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
       <Card sx={{ maxWidth: 345 ,
      position:'relative'}}>
      <CardMedia  sx={{
        borderBottom:'1px solid #28DBD1',
        position:'relative'
      }}
        component="img"
        height="140"
        image={Cards.cardimg}
     > 
     </CardMedia>
    <Box width='70px' height='70px' sx={{
        position:'absolute',
        top:'105px',
        left:'30px',
       
    }}>
    <Avatar variant='square' sx={{
      width:'70px'
     , height:'70px',
     border:'1px solid #28DBD1',  }}
  alt="Remy Sharp"
  src={Cards.avatarimg}
/>
    </Box>
    <Box  width='70px' height='70px' sx={{
        position:'absolute',
        top:'10px',
        right:'-25px'
    }}>
    <Avatar sx={{
      width:'35px'
     , height:'35px',
     border:'1px solid #28DBD1',  }}
  alt="Remy Sharp"
  src={Cards.avatarimg2}
/>
    </Box>
      <CardContent my={5}>
        <Stack direction='row' mt={5} spacing={23} compon>
        <Typography variant="body1" align='start'>
          Round Name:
        </Typography>
         <Typography variant="body2"  align='end'>
          Public
        </Typography>
        </Stack>
        <Stack direction='row' spacing={27}>
        <Typography variant="body1" align='start'>
          Partcipent:
        </Typography>
         <Typography variant="body2"  align='end'>
          42
        </Typography>
        </Stack>
        <Stack direction='row' spacing={25}>
        <Typography variant="body1" align='start'>
          Project Start
        </Typography>
         <Typography variant="body2"  align='end'>
          TBA
        </Typography>
        </Stack>
       
    
        <Typography variant="body1" align='start'>
          Raised Amount
        </Typography>
         <Typography variant="h6"  align='start'>
          <span style={{color:'#28DBD1'}}>5000</span> / 15000 BUSD
        </Typography>
        <BorderLinearProgress variant="determinate" value={30} />
      </CardContent>
      <CardActions>
      <div mx={5} style={{ display: "flex", justifyContent: "center" }}>
                            <Box  my={1}>
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
                                  View Details
                                </Button>
                            </Box>
                        </div>
      </CardActions>
    </Card>
    </ThemeProvider>
  )
}

export default IDOproject
