import * as React from "react";
import './Footer.css';
import {botoncito} from "./botoncito";
import {AppBar, Toolbar} from "@mui/material";

class FooterBar extends React.Component<> {
    render() {
        return (
            <div className="footer">
                <div>
                    <h5>© 2022 ANDRES PODGORNY</h5>
                </div>
            </div>
        );
    }
}

export default FooterBar