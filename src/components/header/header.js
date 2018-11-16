import React from 'react';
import Hidden from './hidden/hidden';

const header = (props) => {
    return (
        <div className="header__section">
            <div className="header__section-middle">
                <ion-icon id="nav-icon" name="menu"></ion-icon>
                <a href="#" className="header__section-middle-logo">TopNews</a>
                <ul className="header__section-middle-list">
                    <li className="header__section-middle-list-object">Business</li>
                    <li className="header__section-middle-list-object">Entertainment</li>
                    <li className="header__section-middle-list-object">General</li>
                    <li className="header__section-middle-list-object">Health</li>
                    <li className="header__section-middle-list-object">Science</li>
                    <li className="header__section-middle-list-object">Sports</li>
                    <li className="header__section-middle-list-object">Technology</li>
                    <Hidden trendingList={props.trendingList}/>
                </ul>
                <ion-icon id="search-icon" name="search"></ion-icon>
            </div>
        </div>
    )
}

export default header;