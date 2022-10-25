import * as React from "react";
import './Home.css'
import avatar from "../assets/Avatar.png"

class Home extends React.Component<> {
    render() {
        return (
            <div className="home-app">
                <div className="firstHalf">
                    <div className="name-title">
                        <h1>Andres Podgorny</h1>
                    </div>
                    <div className="img-avatar"/>
                    <img className="avatar" src={avatar} alt={"avatar"}/>
                </div>
                <div className="secondHalf">
                    <p>
                        Estudiante de Ing. Informática en Instituto Tecnológico de Buenos Aires (ITBA).
                    </p>
                    <p>
                        Enfocado principalmente en Web Development, Web Apps & Desktop Application Development.
                    </p>
                </div>
            </div>
        );
    }
}

export default Home