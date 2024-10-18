import React from 'react';
import '../stylesheets/Homepage.css';
import {Link} from "react-router-dom";

function Homepage() {
    return (
        <section className="panel-page">
            <div className="homepage-container">
                <div className="panel">
                    <div className="panel-header">
                        <p className="title">ParseCRIPTION</p>
                    </div>
                    <div className="description-text">
                        <p className="name-text">What is ParseCRIPTION? ParseCRIPTION is a program that helps make
                            doctors'
                            handwritten prescriptions easier to read. It uses special handwriting machine learning
                            recognition technology
                            to turn messy or hard-to-read notes from doctors into clear, understandable text. This means
                            that anyone, like pharmacists or patients, can easily understand what the doctor wrote,
                            which helps avoid mistakes and ensures people get the right medication.</p>
                    </div>
                    <div className="upload-button-container">
                        <Link to="/upload" className="upload-button">Get Started</Link>
                        {/*<span className="button-span"> ─ it's free</span>*/}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Homepage;