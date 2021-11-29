import React from "react";

import sigmarket from './img/sig-market.png';
import weather from './img/react-weather.png';

import './Project.css';

function Project() {
    return (
        <div>
            <div className="heading text-center">
                <h2 className="heading1">Projects.</h2>
                <p>websites</p>
            </div>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <div className="card h-100 text-center">
                        <img src={sigmarket} className="card-img-top" alt=""></img>
                        <div className="card-body">
                            <p className="card-caption text-uppercase">Website Redesign</p>
                            <a href="https://github.com/jxaqi/sig-market-redesign" className="card-summary text-decoration-none" target="_blank">Signature Market</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="card h-100 text-center">
                        <img src={weather} className="card-img-top" alt=""></img>
                        <div className="card-body">
                            <p className="card-caption text-uppercase">React App</p>
                            <a href="https://github.com/jxaqi/react-weather-app" className="card-summary text-decoration-none" target="_blank">Weather</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;