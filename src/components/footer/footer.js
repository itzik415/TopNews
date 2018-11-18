import React from 'react';

const footer = (props) => {
    return (
        <div className="footer__section">
            <div className="footer__section-up">
                <a href="home" className="footer__section-up-logo">TopNews</a>
            </div>
            <div className="footer__section-down">
                <p className="footer__section-down-copyright">Copyright © 2018 Isaac Shaoulian</p>
                <p className="footer__section-down-thanks">Thanks NewsAPI.org for their awsome API!</p>
            </div>
        </div>
    )
}

export default footer;