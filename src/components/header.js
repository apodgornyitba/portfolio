import * as React from "react";
import {Link} from "react-router-dom";
import logo from '../assets/LOGO.jpg'


import {
    AppBar, MenuList, MenuItem, Toolbar, Typography, Box,
} from "@mui/material";

class HeaderBar extends React.Component<> {
    render() {

        return (
            <AppBar position="static"
                    color="transparent"
                    sx={{boxShadow: 0, borderBottom: 1}}
            >
                <Toolbar>
                    <Box sx={{ display: {xs: 'flex'}}}>
                        <img src={logo} style={{maxHeight: 95, marginLeft: -20}}  alt={logo}/>
                        <Typography
                            type="title"
                            color="inherit"
                            alignSelf={"center"}
                        >
                            Integral IT Solutions
                        </Typography>
                    </Box>
                    <Box sx={{flexGrow: 1, display: {xs: 'flex'}}} justifyContent="right">
                        <Link to={"/"} style={{textDecoration: 'none', color: "inherit"}}>
                            <MenuItem
                                sx={{mr: 8}}
                            >
                                <Typography> Home </Typography>
                            </MenuItem>
                        </Link>
                        <Link to={"/about"} style={{textDecoration: 'none', color: "inherit"}}>
                            <MenuItem
                                sx={{mr: 8}}
                            >
                                <Typography> About </Typography>
                            </MenuItem>
                        </Link>
                        <MenuList>
                            <Typography textAlign="center"> Projects </Typography>
                        </MenuList>
                    </Box>
                </Toolbar>
            </AppBar>);
    }
}

export default HeaderBar