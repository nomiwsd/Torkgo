import './App.css';
import { useState } from 'react';
import Header from './Components/Header/Header';
import IDOproject from './Components/IDOproject/IDOproject';
import Landing from './Components/Landing/Landing';
import Verifysect from './Components/Verifysect/Verifysect';
import { Grid,Container } from '@mui/material';
import Previousproject from './Components/PreviousProject/Previousproject';
import Benefits from './Components/Benefits/Benefits';
import Tiersystem from './Components/Tiersystem/Tiersystem';
import TierHeader from './Components/Tiersystem/TierHeader';
import { Stack } from '@mui/system';
function App() {
  const [cardcategories,setcardcategories]=useState([
    {
      cardimg:'Cardimg(1).jpg'
     , avatarimg:'Cardimg(1)logo.png',
     avatarimg2:'aval.png'
  },
  {
    cardimg:'Cardimg(2).jpg'
    , avatarimg:'Cardimg(2)logo.png',
    avatarimg2:'solana.png'
  },
    {
      cardimg:'Cardimg(3).jpg'
      , avatarimg:'Cardimg(3)logo.png',
      avatarimg2:'solana.png'
  },
  {
    cardimg:'Cardimg(4).jpg'
    , avatarimg:'Cardimg(4)logo.png',
    avatarimg2:'solana.png'
},
{
  cardimg:'Cardimg(5).jpg'
  , avatarimg:'Cardimg(5)logo.png',
  avatarimg2:'solana.png'
}
 ,
  ])
  
  const [Cardsect,setCardsect]=useState([
    {
      Mainhead:'Tier #01'
     ,avatarimg:'Tier (1).png',
     Sechead:'Basic',
    cardtext1:'300 BUSD'
     ,cardtext2:'Lottery (100 Among all)',
    cardtext3:'0 Days',
    cardtext4:'05',
  },
  {
    
    Mainhead:'Tier #02'
    ,avatarimg:'Tier (2).png',
    Sechead:'Bronze',
   cardtext1:'500 BUSD'
    ,cardtext2:'Lottery (50% Among all)',
   cardtext3:'7 Days',
   cardtext4:'10',
  },
    {
      
    Mainhead:'Tier #03'
    ,avatarimg:'Tier (3).png',
    Sechead:'Gold',
   cardtext1:'10,000 BUSD'
    ,cardtext2:'Guranteed',
   cardtext3:'30 Days',
   cardtext4:'15',
  },
  {
    Mainhead:'Tier #04'
    ,avatarimg:'Tier (4).png',
    Sechead:'Platinum',
   cardtext1:'20,000 BUSD'
    ,cardtext2:'Guranteed',
   cardtext3:'60 Days',
   cardtext4:'25',
},
  ])
  
  return (
    <div className="App">
  <Header/>
  <Landing/>
  <Verifysect/>
  <Previousproject/>
  <Benefits/>
  
  <Stack sx={{
        backgroundColor:'#02121D',
    }}>
      <TierHeader/>
  <Container >
  <Grid container my={5} columnSpacing={4} >
    <Grid item xs={3} mx={0}><Tiersystem Tiers={Cardsect[0]}/></Grid>
    <Grid item xs={3} mx={0}><Tiersystem Tiers={Cardsect[1]}/></Grid>
    <Grid item xs={3} mx={0}><Tiersystem Tiers={Cardsect[2]}/></Grid>
    <Grid item xs={3}><Tiersystem Tiers={Cardsect[3]}/></Grid>
    {/* <Grid item xs={4}><IDOproject Cards={cardcategories[4]}/></Grid> */}
  </Grid>
  </Container>
  </Stack>
  <Grid container>
    {/* <Grid item xs={3} mx={0}><IDOproject Cards={cardcategories[0]}/></Grid> */}
    {/* <Grid item xs={3} mx={0}><IDOproject Cards={cardcategories[1]}/></Grid> */}
    {/* <Grid item xs={3} mx={0}><IDOproject Cards={cardcategories[2]}/></Grid> */}
    {/* <Grid item xs={3}><IDOproject Cards={cardcategories[3]}/></Grid> */}
    {/* <Grid item xs={4}><IDOproject Cards={cardcategories[4]}/></Grid> */}
  </Grid>
    </div>
    );
}

export default App;




