import React from 'react';

const navBar = (props) => {
    return (
        <div className="navBar__section">
            <div className="navBar__section-head">
                <a href="#" className="navBar__section-head-logo">TopNews</a>
                <ion-icon onClick={props.buttonCloseNav} id="closing-icon" name="close"></ion-icon>
            </div>
            <div className="navBar__section-content">
                <ul className="navBar__section-content-list">
                    <a href='#' className="navBar__section-content-list-object"> Business</a>
                    <a href='#' className="navBar__section-content-list-object"> Entertainment</a>
                    <a href='#' className="navBar__section-content-list-object"> General</a>
                    <a href='#' className="navBar__section-content-list-object"> Health</a>
                    <a href='#' className="navBar__section-content-list-object"> Science</a>
                    <a href='#' className="navBar__section-content-list-object"> Sports</a>
                    <a href='#' className="navBar__section-content-list-object"> Technology</a>
                </ul>
            </div>
        </div>
    )
}

export default navBar;