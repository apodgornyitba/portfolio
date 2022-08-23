import * as React from "react";

class Home extends React.Component<> {
    render() {
        return (
            <>
                <main>
                    <h2>Software solutions</h2>
                    <p>
                        Software development and specific services to get the most out of your business.
                    </p>
                    <h3>Windows Apps</h3>
                    <p>
                        A local desktop application is one that is installed on the computer and we can run it without internet,
                        unlike desktop applications in the cloud that are on another computer (Rest API server) that we access
                        through the network or internet to your software.
                    </p>
                    <h3>Web Apps</h3>
                    <p>
                        They are programs that are encoded in an interpretable
                        language for web browsers in which the browser is trusted to execute.
                    </p>
                    <h3>Mobile Apps</h3>
                    <p>
                        Mobile application development as well as
                        custom mobile application development service.
                    </p>
                    <h3>Computer Consulting</h3>
                    <p>
                        Professional service aimed at companies, institutions or other types of organizations,
                        and whose purpose is to examine their processes and identify problems, irregularities
                        or breaches of any regulatory or legal framework, or technical aspects that can be improved.
                    </p>
                </main>
            </>
        );
    }
}

export default Home