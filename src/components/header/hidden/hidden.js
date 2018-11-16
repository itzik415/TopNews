import React from 'react';

const hidden = (props) => {
    return (
        <div className="hidden__section">
            <div className="hidden__section-holder">
                {
                    props.trendingList.map((article, index) => {
                        return (
                            index < 6?
                                <div className="hidden__section-holder-container" key={index}>
                                    <img className="hidden__section-holder-container-img" src={`${article.urlToImage}`} alt='article'/>
                                    <p className="hidden__section-holder-container-title">{article.title}</p>
                                </div>:
                            null
                        )
                    })
                }
            </div>
        </div>
    )
}

export default hidden;