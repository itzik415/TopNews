import React from 'react';
import Hidden from './hidden/hidden';
import NavBar from './navBar/navBar';

const header = (props) => {
    return (
        <div className="header">
            <div className="header__section">
                <div className="header__section-middle">
                    <ion-icon onClick={props.buttonOpenNav} id="nav-icon" name="menu"></ion-icon>
                    <a href="home" className="header__section-middle-logo">TopNews</a>
                    <ul className="header__section-middle-list">
                        <li onMouseEnter={props.mouseEnter} className="header__section-middle-list-object">Business</li>
                        <li onMouseEnter={props.mouseEnter} className="header__section-middle-list-object">Entertainment</li>
                        <li onMouseEnter={props.mouseEnter} className="header__section-middle-list-object">Health</li>
                        <li onMouseEnter={props.mouseEnter} className="header__section-middle-list-object">Science</li>
                        <li onMouseEnter={props.mouseEnter} className="header__section-middle-list-object">Sports</li>
                        <li onMouseEnter={props.mouseEnter} className="header__section-middle-list-object">Technology</li> 
                    </ul>
                    <ion-icon id="search-icon" name="search"></ion-icon>
                </div>
            </div>
            <Hidden mouseLeave={props.mouseLeave} trendingList={props.trendingList}/>
            <NavBar buttonCloseNav={props.buttonCloseNav}/>
        </div>
    )
}

export default header;