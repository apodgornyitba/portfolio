import * as React from "react";
import {Typography} from "@mui/material";
import "./about.css"

class About extends React.Component<> {
    render() {

        return (
            <div className="about-page">
                <div className="about">
                    <Typography variant="h4" fontFamily='N27'> About me</Typography>
                    <Typography variant="p">
                        Andres Podgorny, Ingenieria Informatica Student at ITBA
                    </Typography>
                    <Typography variant="p">
                        Languages: Español (Native speaker) - English (TOEIC L&R 955 Score) -
                        Italian (Uba Idiomas - Curso: Nivel 1 Bimestral - 20B4-MC06010602)
                    </Typography>
                </div>
                <div className="about-II">
                    <Typography variant="h4" fontFamily='N27'> About Ingenieria en Informatica</Typography>
                    <Typography variant="p">
                        El Ingeniero Informático transforma y administra la información a través del diseño,
                        desarrollo y
                        aplicación de la tecnología. Es quien lidera la innovación tecnológica de las
                        organizaciones.

                        Su formación le permite intervenir en el análisis de los datos y en distintas etapas de un
                        proyecto
                        informático. Además, está capacitado para utilizar imágenes, videos y textos como fuente de
                        datos en
                        el desarrollo de algoritmos para aplicaciones diversas, enfocados en la confidencialidad,
                        la integridad y la disponibilidad de la información.
                    </Typography>
                </div>
                <div className="P-Lang">
                    <Typography variant="h4" fontFamily='N27'> Programming Languages</Typography>
                    <Typography variant="p">
                        C (More than 1000 lines),
                        Assembly (More than 1000 lines),
                        Java (More than 1000 lines),
                        Ruby (500 - 1000 lines),
                        XML (500 - 1000 lines),
                        HTML-CSS-JS (More than 1000 lines),
                        Vue and Vuetify (More than 1000 lines),
                        React and Material-UI (More than 1000 lines)
                    </Typography>
                </div>
            </div>
        );
    }
}

export default About