import React from 'react';
import Hidden from './hidden/hidden';
import NavBar from './navBar/navBar';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { headerHover }  from '../../actions';

//Button for closing navigation bar
const buttonOpenNav = () => {
    document.querySelector('.navBar__section').style.transform = 'translate(0px)';
    document.querySelector('.navBar__section').style.transition = '.4s';
    document.querySelector('.blackBackground').style.display = 'block';
}

const header = (props) => {
    return (
        <div className="header">
            <div className="header__section">
                <div className="header__section-middle">
                    <ion-icon onClick={buttonOpenNav} id="nav-icon" name="menu"></ion-icon>
                    <p className="header__section-middle-logo"><Link to="/" id="header-logo">TopNews</Link></p>
                    <ul className="header__section-middle-list">
                        <li onMouseEnter={props.mouseEnter} className="header__section-middle-list-object"><Link id="header-link" to='/category/business'>Business</Link></li>
                        <li onMouseEnter={props.mouseEnter} className="header__section-middle-list-object"><Link id="header-link" to='/category/entertainment'>Entertainment</Link></li>
                        <li onMouseEnter={props.mouseEnter} className="header__section-middle-list-object"><Link id="header-link" to='/category/health'>Health</Link></li>
                        <li onMouseEnter={props.mouseEnter} className="header__section-middle-list-object"><Link id="header-link" to='/category/science'>Science</Link></li>
                        <li onMouseEnter={props.mouseEnter} className="header__section-middle-list-object"><Link id="header-link" to='/category/sports'>Sports</Link></li>
                        <li onMouseEnter={props.mouseEnter} className="header__section-middle-list-object"><Link id="header-link" to='/category/technology'>Technology</Link></li> 
                    </ul>
                    <ion-icon id="search-icon" name="search"></ion-icon>
                </div>
            </div>
            <Hidden />
            <NavBar />
        </div>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        mouseEnter: (e) => dispatch(headerHover(e)) 
    }
}
    

export default connect(null, mapDispatchToProps)(header);