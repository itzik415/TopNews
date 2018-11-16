import React from 'react';
import moment from 'moment';
import momentTimezone from 'moment-timezone';

const trending = (props) => {
    return (
        <div className="trending__section">
            <p className="trending__section-line"></p>
            <p className="trending__section-title"><span className="trending__section-title-text">Trendings</span></p>
            <div className="trending__section-up">
                <p onClick={props.categoryChange} className="trending__section-up-button" id="red-background" value={"business"}>Business</p>
                <p onClick={props.categoryChange} className="trending__section-up-button">Technology</p>
                <p onClick={props.categoryChange} className="trending__section-up-button">Health</p>
            </div>
            <div className="trending__section-up">
                <p onClick={props.categoryChange} className="trending__section-up-button">Science</p>
                <p onClick={props.categoryChange} className="trending__section-up-button">Entertainment</p>
                <p onClick={props.categoryChange} className="trending__section-up-button">Sports</p>
            </div>

            {
                props.trendingList.map((article, index) => {
                    return (
                        index < 6?
                            <div className="trending__section-container" key={index}>
                                <img className="trending__section-container-left" src={`${article.urlToImage}`} alt='article'/>
                                <div className="trending__section-container-right">
                                    <p className="trending__section-container-right-name"><span id="redName">{article.source.name}</span> / {moment.tz(article.publishedAt,"UTC").fromNow()}</p>
                                    <p className="trending__section-container-right-title">{article.title}</p>
                                </div>
                            </div>:
                        null
                    )
                })
            }
        </div>
    )
}

export default trending;