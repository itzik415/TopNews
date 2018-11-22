import React from 'react';
import { Link } from 'react-router-dom';

const hidden = (props) => {
    return (
        <div onMouseLeave={props.mouseLeave} className="hidden__section">
            <div className="hidden__section-holder">
                {
                    props.trendingList.map((article, index) => {
                        return (
                            index < 6?
                            <Link id="link" to={`/article/${article.title}`}>
                                <div className="hidden__section-holder-container" key={index}>
                                    <img className="hidden__section-holder-container-img" src={`${article.urlToImage}`} alt='article'/>
                                    <p className="hidden__section-holder-container-title">{article.title}</p>
                                </div>
                            </Link>:
                            null
                        )
                    })
                }
            </div>
        </div>
    )
}

export default hidden;