import React from 'react';

const header = (props) => {
    return (
        <div className="header__section">
            <ion-icon id="nav-icon" name="menu"></ion-icon>
            <p className="header__section-logo">TopNews</p>
            <ul className="header__section-list">
                <li className="header__section-list-object">Business</li>
                <li className="header__section-list-object">Entertainment</li>
                <li className="header__section-list-object">General</li>
                <li className="header__section-list-object">Health</li>
                <li className="header__section-list-object">Science</li>
                <li className="header__section-list-object">Sports</li>
                <li className="header__section-list-object">Technology</li>
            </ul>
            <ion-icon id="search-icon" name="search"></ion-icon>
        </div>
    )
}

export default header;