import React from 'react';
import News from '../news/news';
import Trending from '../trending/trending';

const more = (props) => {
    return (
        <div className="more">
            <p className="more-line"></p>
            <p className="more-title"><span className="more-title-text">all articles</span></p>
            <div className="more-section" style={{position: 'relative'}}>
                <News allArticles={props.allArticles} buttonClick={props.buttonClick}/>
                <Trending topArticles={props.topArticles} categoryChange={props.categoryChange}/>
            </div>
        </div>
    )
}

export default more;