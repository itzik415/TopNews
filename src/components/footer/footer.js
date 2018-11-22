import React from 'react';
import {Link} from 'react-router-dom';

const footer = () => {
    return (
        <div className="footer__section">
            <div className="footer__section-up">
                <p className="footer__section-up-logo"><Link to="/" id="header-footer">TopNews</Link></p>
            </div>
            <div className="footer__section-down">
                <p className="footer__section-down-copyright">Copyright © 2018 Isaac Shaoulian</p>
                <p className="footer__section-down-thanks">Thanks NewsAPI.org for their awsome API!</p>
            </div>
        </div>
    )
}

export default footer;