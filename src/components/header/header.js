import React from 'react';
import Hidden from './hidden/hidden';
import NavBar from './navBar/navBar';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { headerHover }  from '../../actions';

const header = (props) => {
    return (
        <div className="header">
            <div className="header__section">
                <div className="header__section-middle">
                    <ion-icon onClick={props.buttonOpenNav} id="nav-icon" name="menu"></ion-icon>
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
            <Hidden mouseLeave={props.mouseLeave} />
            <NavBar buttonCloseNav={props.buttonCloseNav}/>
        </div>
    )
}

// const mapStateToProps = state => {

// }

const mapDispatchToProps = dispatch => {
    return {
        mouseEnter: (e) => dispatch(headerHover(e)) 
    }
}
    

export default connect(null, mapDispatchToProps)(header);