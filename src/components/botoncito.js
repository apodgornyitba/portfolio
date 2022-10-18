import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import * as React from "react";

export function botoncito(str: String, link: String) {
    return (
        <Link to={"/" + link} style={{textDecoration: 'none'}} >
            <Button className="Headerbutton">
                <h3>{str}</h3>
            </Button>
        </Link>

    )
}

