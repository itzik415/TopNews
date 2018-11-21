import React from 'react';

const navBar = (props) => {
    return (
        <div className="navBar__section">
            <div className="navBar__section-head">
                <a href="home" className="navBar__section-head-logo">TopNews</a>
                <ion-icon onClick={props.buttonCloseNav} id="closing-icon" name="close"></ion-icon>
            </div>
            <div className="navBar__section-content">
                <ul className="navBar__section-content-list">
                    <p className="navBar__section-content-list-object"> Business</p>
                    <p className="navBar__section-content-list-object"> Entertainment</p>
                    <p className="navBar__section-content-list-object"> Health</p>
                    <p className="navBar__section-content-list-object"> Science</p>
                    <p className="navBar__section-content-list-object"> Sports</p>
                    <p className="navBar__section-content-list-object"> Technology</p>
                </ul>
            </div>
        </div>
    )
}

export default navBar;