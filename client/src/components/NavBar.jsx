import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import  { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
const NavBar = (props) => {
    const navigate = useNavigate()
    // const [loggedInUser, setLoggedInUser] = useState(null);
    // useEffect(() => {
    //     axios
    //       .get("http://localhost:8000/api/users/loggedin", {
    //         withCredentials: true,
    //       })
    //       .then((res) => {
    //         localStorage.setItem('user', JSON.stringify(res.data.user));
    //         setLoggedInUser(res.data.user);
    //         console.log(res);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   },[]);

      const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));
      const logout = (e) => {
        axios
          .get("http://localhost:8000/api/users/logout", { withCredentials: true })
          .then((res) => {
            console.log(res);
            localStorage.clear()
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      };
      
    
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"white"}}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="black"
            fontSize="1.5rem"
            fontFamily="Franklin Gothic Medium"
            style={{marginTop:"15px" }}
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link to = {'/'} style= {{textDecoration:"none",fontWeight:"bold",color:"black" , border:"2px #c9ad98 solid",padding:"2px"}} >ARCANE</Link>
            
            {(localStorage.getItem('user'))!= null?
            <span style={{color:"black", marginLeft:"40px",fontFamily:"Arial",fontSize:"1.1rem"}}>Welcome, {(JSON.parse(localStorage.getItem('user')).firstName)} </span>:<p></p>}
          </Typography>
          <div style={{backgroundColor:"white",width:"300px"}}>
          <Link to="/valid" style={{color:"black", marginRight:"50px"}}>
            + Create Poll
            </Link>
            <Link to="/dashboard" style={{color:"black"}}>
            My Profile
            </Link>
            </div>
            <Search style={{backgroundColor:"#e1e2e4",marginRight:"20px"}}>
            <SearchIconWrapper>
              <SearchIcon style={{color:"black"}} />
            </SearchIconWrapper>
            <StyledInputBase style={{color:"black"}}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          
            { (localStorage.getItem('user'))!= null?
                    
                    
                    <Button  variant="outlined" href="#outlined-buttons" onClick={logout}>Log Out</Button>

                         
                            :                     
                            <Typography>
                                <Link to="/login"><Button variant="outlined" href="#outlined-buttons" style={{marginLeft:"20px"}}>Login</Button></Link>
                                <Link eventKey={2} to="/registration"><Button variant="outlined" href="#outlined-buttons" style={{marginLeft:"20px"}}>Sign Up</Button></Link>
                            </Typography>
                    }
         
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default NavBar
