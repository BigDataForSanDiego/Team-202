import React from 'react';
import '../stylesheets/Panel.css';

function Panel() {
    return (
        <section className="panel-page">
            <div className="panel-container">
                <div className="panel">
                    <div className="panel-header">
                        <p className="title">UPLOAD A FILE</p>
                    </div>
                    <div className="file-name">
                        <p className="name-text">Click 'Choose File' Button or Drag File Into Field</p>
                    </div>
                    <div className="file-upload">
                        <input type="file" id="myFile" name="filename"/>
                    </div>
                    <div className="submit-button-container">
                        <input type="submit" value="Submit" className="submit-button"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Panel;