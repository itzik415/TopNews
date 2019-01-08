import React from 'react';
import {Link} from 'react-router-dom';

//Button for opening navigation bar
const buttonCloseNav = () => {
    document.querySelector('.navBar__section').style.transform = 'translate(-350px)';
    document.querySelector('.navBar__section').style.transition = '.4s';
    document.querySelector('.blackBackground').style.display = 'none';
}

const navBar = () => {
    return (
        <div className="navBar__section">
            <div className="navBar__section-head">
                <Link to='/' id='link'><p className="navBar__section-head-logo">TopNews</p></Link>
                <ion-icon onClick={buttonCloseNav} id="closing-icon" name="close"></ion-icon>
            </div>
            <div className="navBar__section-content">
                <ul className="navBar__section-content-list">
                    <p className="navBar__section-content-list-object"><Link id="header-navBar" to='/category/business'>Business</Link></p>
                    <p className="navBar__section-content-list-object"><Link id="header-navBar" to='/category/entertainment'>Entertainment</Link></p>
                    <p className="navBar__section-content-list-object"><Link id="header-navBar" to='/category/health'>Health</Link></p>
                    <p className="navBar__section-content-list-object"><Link id="header-navBar" to='/category/science'>Science</Link></p>
                    <p className="navBar__section-content-list-object"><Link id="header-navBar" to='/category/sports'>Sports</Link></p>
                    <p className="navBar__section-content-list-object"><Link id="header-navBar" to='/category/technology'>Technology</Link></p>
                </ul>
            </div>
        </div>
    )
}

export default navBar;