import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Button, Stack, Dialog, DialogTitle, DialogContent, Typography, Avatar} from '@mui/material';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import './Header.css'
const theme = createTheme({});


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function Header() {
  // dialog js
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [open, setOpen] = useState(false);
  // menu js
  const [anchorEl, setAnchorEl] = useState(null);
  const [open1, setOpen1] = useState(false);
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen1(true);
  };
  const handleCloseevent = (e) => {
    if (e.currentTarget.localName !== "ul") {
      const menu = document.getElementById("simple-menu").children[2];
      const menuBoundary = {
        left: menu.offsetLeft,
        top: e.currentTarget.offsetTop + e.currentTarget.offsetHeight,
        right: menu.offsetLeft + menu.offsetHeight,
        bottom: menu.offsetTop + menu.offsetHeight
      };
      if (
        e.clientX >= menuBoundary.left &&
        e.clientX <= menuBoundary.right &&
        e.clientY <= menuBoundary.bottom &&
        e.clientY >= menuBoundary.top
      ) {
        return;
      }
    }
    setOpen1(false);
  };

  theme.props = {
    MuiMenuList: {
      backgroundColor: 'bluegrey',
      onMouseLeave: (e) => {
        handleCloseevent(e);
      }
      ,
    }
  };
  return (
    <Stack spacing={2} direction='row'>
      <ThemeProvider theme={theme}>
        <AppBar position='static' sx={{
          backgroundColor: '#0A1F2F',
        }}>
          <Toolbar sx={{
            display: 'flex',
          }}>
            <IconButton size='large' edge='medium' color='inherit' aria-label='logo'
              sx={{
                flexGrow: 0.5
              }}>
              <img src="Logo.png" alt="wait for internet" />
            </IconButton>
            <Stack spacing={3} direction='row' sx={
              {
                marginLeft: '70px',
              }
            }>
              
              <Button color='inherit'>HOME</Button>
              <Button color='inherit'>PROJECT</Button>
              <Button color='inherit'>STAKING</Button>
              <Button color='inherit' id='resource-button'>PAGES</Button>
              <Button color='inherit' id='resource-button'>BLOG</Button>
              <Button color='inherit' id='resource-button'>CONTACT</Button>
              <Button onClick={handleClickOpen} endIcon={<AccountBalanceWalletIcon />}
                sx={{
                  backgroundColor: '#28DBD1',
                  color: '#02121D',
                  '&:hover': {
                    backgroundColor: '#28DBD1',
                    color: '#02121D',
                  }
                }}>Connect</Button>
              <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}

              >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}
                  sx={{
                    backgroundColor: '#0A1F2F',
                    color: 'white',
                    textAlign: 'center'
                  }}>
                  Connect Your Wallet
                </BootstrapDialogTitle>
                <DialogContent sx={{
                  backgroundImage: `url(${'headerbg.svg'})`,
                  backgroundColor: '#0A1F2F',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}>

                </DialogContent>
                <DialogContent
                  sx={{

                    backgroundColor: '#0A1F2F',
                    color: 'white',
                    padding: '5px'
                  }}>
                  <Typography variant='body1' align='center' mb={5}>
                    Please select a wallet from below to connect for Launching yourIDO's
                  </Typography>
                  <Stack direction='row' spacing={6} my={5}>
                    <Avatar sx={{
                      border: '3px solid #0A1F2F'
                      , width: '70px', height: '70px', '&:hover': {
                        border: '3px solid aquamarine'
                      }
                    }} alt="metamask" src="metamask.svg" />
                    <Avatar sx={{
                      border: '3px solid #0A1F2F'
                      , width: '70px', height: '70px', '&:hover': {
                        border: '3px solid aquamarine'
                      }
                    }} alt="coin base" src="coinbase.svg" />
                    <Avatar sx={{
                      border: '3px solid #0A1F2F'
                      , width: '70px', height: '70px', '&:hover': {
                        border: '3px solid aquamarine'
                      }
                    }} alt="bitski" src="bitski.svg" />
                    <Avatar sx={{
                      border: '3px solid #0A1F2F'
                      , width: '70px', height: '70px', '&:hover': {
                        border: '3px solid aquamarine'
                      }
                    }} alt="venly" src="venly.svg" />
                    <Avatar sx={{
                      border: '3px solid #0A1F2F'
                      , width: '70px', height: '70px', '&:hover': {
                        border: '3px solid aquamarine'
                      }
                    }} alt="Wallet connect" src="wallet-connect.svg" />
                  </Stack>
                  <Typography variant='body1' align='center' my={5}>
                    By connecting your wallet, you agree to our Terms of Service and our Privacy Policy .
                  </Typography>
                </DialogContent>
              </BootstrapDialog>
            </Stack>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Stack>
  )
}

export default Header
