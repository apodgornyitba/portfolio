import * as React from "react";
import {Link_with_image} from "../components/Link_with_image";
import twitter from "../assets/designed_by_Pixel_perfect_from_Flaticon-Twitter.png"
import instagram from "../assets/designed_by_Freepik_from_Flaticon-Instagram.png"
import linkedin from "../assets/designed_by_Freepik_from_Flaticon-Linkedin.png"
import github from "../assets/designed_by_Freepik_from_Flaticon-Github.png"
import "./Contact.css"

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
                        <Link_with_image href="https://twitter.com/PodgornyAndres" src={twitter}
                                         alt="designed by Pixel perfect from Flaticon"/>
                        <Link_with_image href="https://www.instagram.com/andrespodgorny/" src={instagram}
                                         alt="designed by Freepik from Flaticon"/>
                        <Link_with_image href="https://www.linkedin.com/in/andres-podgorny-269463237/" src={linkedin}
                                         alt="designed by Freepik from Flaticon"/>
                        <Link_with_image href="https://github.com/apodgornyitba" src={github}
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
                    <div className="message_box">

                    </div>
                </div>

            </div>
        );
    }
}

export default Contact