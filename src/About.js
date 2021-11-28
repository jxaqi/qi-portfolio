import React from "react";
import me from './img/profile.jpg';
import { ReactComponent as Html } from './img/html.svg';
import { ReactComponent as Js } from './img/js.svg';
import { ReactComponent as ReactIcon } from './img/react.svg';
import { ReactComponent as Figma } from './img/figma.svg';
import { ReactComponent as Css } from './img/css.svg';
import { ReactComponent as Bootstrap } from './img/bootstrap.svg';
import { ReactComponent as Angular } from './img/angular.svg';
import { ReactComponent as AdobeXd } from './img/adobe_xd.svg';

import './About.css';

function About() {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-5 text-center align-self-center">
                    <img src={me} className="img-fluid profile" alt=""></img>
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h3 className="card-title">About Me.</h3>
                        <p className="card-text">Hola<br />My name is Jia Qi.<br />
                            A front end developer who enjoys building websites and designing UI mockups.<br />
                            I've done them using
                        </p>
                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <td><Html width="20" height="20" />&nbsp;HTML</td>
                                    <td><Angular width="20" height="20" />&nbsp;Angular</td>
                                </tr>
                                <tr>
                                    <td><Css width="20" height="20" />&nbsp;CSS</td>
                                    <td><ReactIcon width="20" height="20" />&nbsp;React</td>
                                </tr>
                                <tr>
                                    <td><Js width="20" height="20" />&nbsp;JavaScript</td>
                                    <td><AdobeXd width="20" height="20" />&nbsp;Adobe XD</td>
                                </tr>
                                <tr>
                                    <td><Bootstrap width="20" height="20" />&nbsp;Bootstrap</td>
                                    <td><Figma width="20" height="20" />&nbsp;Figma</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;