import * as React from "react";
import {Typography} from "@mui/material";
import "./home.css"


class Home extends React.Component<> {
    render() {
        return (
            <div className="Home-page">
                <div className="solutions">
                    <Typography variant="h3" className="TypoFont"> Software solutions</Typography>
                    <Typography variant="p">
                        Software development and specific services to get the most out of your business.
                    </Typography>
                </div>
                <div className="Wi-Apps">
                    <Typography variant="h4" fontFamily='N27'> Windows Apps</Typography>
                    <Typography variant="p">
                        A local desktop application is one that is installed on the computer and we can run it
                        without
                        internet,
                        unlike desktop applications in the cloud that are on another computer (Rest API server) that
                        we
                        access
                        through the network or internet to your software.
                    </Typography>
                </div>
                <div className="W-Apps">
                    <Typography variant="h4" fontFamily='N27'>Web Apps</Typography>
                    <Typography variant="p">
                        They are programs that are encoded in an interpretable
                        language for web browsers in which the browser is trusted to execute.
                    </Typography>
                </div>
                <div className="M-Apps">
                    <Typography variant="h4" fontFamily='N27'>Mobile Apps</Typography>
                    <Typography variant="p">
                        Mobile application development as well as
                        custom mobile application development service.
                    </Typography>
                </div>
                <div className="consulting">
                    <Typography variant="h4" fontFamily='N27'>Computer Consulting</Typography>
                    <Typography variant="p">
                        Professional service aimed at companies, institutions or other types of organizations,
                        and whose purpose is to examine their processes and identify problems, irregularities
                        or breaches of any regulatory or legal framework, or technical aspects that can be improved
                    </Typography>
                </div>
            </div>
        );
    }
}

export default Home