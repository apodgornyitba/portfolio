import * as React from "react";
import {Button} from "@mui/material";

export function Link_with_image(props) {
    return (
        <Button href={props.href} target="_blank" className="button">
            <img src={props.src} alt={props.alt} className="image"/>
        </Button>

    )
}