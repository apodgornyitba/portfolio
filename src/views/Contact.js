import * as React from "react";
import {LinkWithImage} from "../components/Link_with_image";
import twitter from "../assets/designed_by_Pixel_perfect_from_Flaticon-Twitter.png"
import instagram from "../assets/designed_by_Freepik_from_Flaticon-Instagram.png"
import linkedin from "../assets/designed_by_Freepik_from_Flaticon-Linkedin.png"
import github from "../assets/designed_by_Freepik_from_Flaticon-Github.png"
import "./Contact.css"
import {Button, TextField} from "@mui/material";

class Contact extends React.Component<> {
    render() {
        return (
            <div className="contact-app">
                <div className="firstHalf-contact">
                    <div className="title">
                        <h1>Contacto</h1>
                    </div>
                    <div className="links">
                        <div className="below_links"/>
                        <LinkWithImage href="https://twitter.com/PodgornyAndres" src={twitter}
                                       alt="designed by Pixel perfect from Flaticon"/>
                        <LinkWithImage href="https://www.instagram.com/andrespodgorny/" src={instagram}
                                       alt="designed by Freepik from Flaticon"/>
                        <LinkWithImage href="https://www.linkedin.com/in/andres-podgorny-269463237/" src={linkedin}
                                       alt="designed by Freepik from Flaticon"/>
                        <LinkWithImage href="https://github.com/apodgornyitba" src={github}
                                       alt="designed by Freepik from Flaticon"/>
                    </div>
                    <div className="text-area-contact">
                        <div className="text-area">
                            <p>
                                Ponte en contacto conmigo o manda un email directamente a apodgorny@itba.edu.ar.
                            </p>
                            <p>
                                Sin importar el método que elijas intentaré comunicarme contigo lo más pronto posible.
                            </p>
                        </div>
                        <div className="below_text"/>

                    </div>
                </div>
                <div className="secondHalf-contact">
                    <div>
                        <div className="name_email-box">
                            <TextField
                                variant="outlined"
                                label="Nombre"
                                margin="normal"
                                className="name_box"
                                id="box_id"
                            />
                            <TextField
                                variant="outlined"
                                label="Email"
                                margin="normal"
                                className="mail_box"
                                id="box_id"
                            />
                        </div>
                        <div>
                            <TextField
                                variant="outlined"
                                label="Mensaje"
                                multiline
                                rows={4}
                                className="message_box"
                                id="box_id"
                            />
                            <Button className="send_button">
                                <h1>Enviar</h1>
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Contact