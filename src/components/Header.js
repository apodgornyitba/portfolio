import * as React from "react";
import './Header.css';
import {AppBar, Toolbar} from "@mui/material";
import {Link} from "react-router-dom";
import {botoncito} from "./botoncito";


class HeaderBar extends React.Component<> {
    render() {
        return (<div>
            <AppBar
                className="app-header"
                position="static"
                color="transparent"
                sx={{boxShadow: 1, borderBottom: 1}}
            >
                <Toolbar>
                    <div
                        className="AP-Title"
                    >
                        <Link to={"/"} style={{textDecoration: 'none', color: "black"}}>
                            <h1>AP.</h1>
                        </Link>
                    </div>
                    <div
                        className="Header-Menu"
                    >

                        {botoncito('INICIO', '')}
                        {botoncito('SOBRE MI', 'About')}
                        {botoncito('PROYECTOS', 'Projects')}
                        {botoncito('CONTACTO', 'Contact')}
                    </div>

                </Toolbar>

            </AppBar>
        </div>)
    }
}

export default HeaderBar