import React from 'react';
import moment from 'moment';
import 'moment-timezone';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const latest = (props) => {
    return (
        <div className="gallery">
            <p className="gallery-line"></p>
            <p className="gallery-title"><span className="gallery-title-text">latest news</span></p>
            {   
                props.topArticles.map((article,index) => {
                    return (
                        index > 4 && index < 10?
                        <figure className={`gallery__item gallery__item--${index-5}`} onClick={props.articleHandle} key={index-3}>    
                            <Link id="link" to={`/article/${article.title}`}>
                                <img className="gallery__img" alt='latest' src={`${article.urlToImage === null ? require('../../images/topNewsLogo.png') :article.urlToImage}`} />    
                                <figure className={`gallery__item--${index-5}-container`}>                      
                                    <p className={`gallery__item--${index-5}-container-title`}>{article.title}</p>
                                    <p className={`gallery__item--${index-5}-container-date`}><span id="redName">{article.source.name}</span> / {moment.tz(article.publishedAt,"UTC").fromNow()}</p>
                                </figure>                        
                            </Link>
                        </figure>:
                        null
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        topArticles: state.topArticles
    }
}
  
export default connect(mapStateToProps)(latest);