import * as React from "react";
import {Link} from "react-router-dom";
import logo from '../assets/LOGO.png'


import {
    AppBar, MenuList, MenuItem, Toolbar, Typography, Box, Button, Popper, Grow, Paper, ClickAwayListener,
} from "@mui/material";

function MyMenuList() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div >
            <Button
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                style={{alignSelf: "center", color: "inherit"}}
                onClick={handleToggle}
            >
                <Typography> Projects </Typography>
            </Button>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
            >
                {({TransitionProps, placement}) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                >
                                    <MenuItem onClick={handleClose}>ARV Web</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );

}


class HeaderBar extends React.Component<> {

    render() {

        return (
            <AppBar position="static"
                    color="transparent"
                    sx={{boxShadow: 0, borderBottom: 1}}
            >
                <Toolbar>
                    <Box sx={{display: {xs: 'flex'}}}>
                        <Link to={"/"} style={{textDecoration: 'none', color: "inherit"}}>
                            <img src={logo} style={{maxHeight: 95, marginLeft: -20}} alt={logo}/>
                        </Link>
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
                                sx={{mr: 5}}
                            >
                                <Typography> HOME </Typography>
                            </MenuItem>
                        </Link>
                        <Link to={"/about"} style={{textDecoration: 'none', color: "inherit"}}>
                            <MenuItem
                                sx={{mr: 5}}
                            >
                                <Typography> ABOUT</Typography>
                            </MenuItem>
                        </Link>
                        <Link to={"/about"} style={{textDecoration: 'none', color: "inherit"}}>
                            <MenuItem
                                sx={{mr: 5}}
                            >
                                <Typography> CONTACT</Typography>
                            </MenuItem>
                        </Link>
                        <MyMenuList />
                    </Box>
                </Toolbar>
            </AppBar>);
    }
}

export default HeaderBar