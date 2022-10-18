import * as React from "react";
import './Header.css';
import {AppBar, Button, Toolbar} from "@mui/material";
import {Link} from "react-router-dom";

class HeaderBar extends React.Component<> {
    botoncito(str: String, link: String) {
        return (
            <Link to={"/" + link} style={{textDecoration: 'none'}} >
                <Button className="Headerbutton">
                    <h3>{str}</h3>
                </Button>
            </Link>

        )
    }

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
                        {this.botoncito('INICIO', '')}
                        {this.botoncito('SOBRE MI', 'About')}
                        {this.botoncito('PROYECTOS', 'Projects')}
                        {this.botoncito('CONTACTO', 'Contact')}
                    </div>

                </Toolbar>

            </AppBar>
        </div>)
    }
}

export default HeaderBar