import React from 'react';
import moment from 'moment';
import 'moment-timezone';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { gettingMoreArticles }  from '../../actions';

const news = (props) => {
    return (
        <div className="news__section">
             {
                props.allArticles.map((article, index) => {
                    return (
                        <Link id='link' to={`/article/${article.title}`} key={index}>
                        <div className="news__section-container" key={index}>
                            <img className="news__section-container-left" src={`${article.urlToImage === null ? require('../../images/topNewsLogo.png') :article.urlToImage}`} alt='article'/>
                            <div className="news__section-container-right">
                                <p className="news__section-container-right-name"><span id="redName">{article.source.name}</span> / {moment.tz(article.publishedAt,"UTC").fromNow()}</p>
                                <p className="news__section-container-right-title">{article.title}</p>
                                <p className="news__section-container-right-description">{article.description.slice(0,200)}</p>
                            </div>
                        </div>
                        </Link>
                    )
                })
             }
             <p onClick={props.buttonClick} className="news__section-button">click for more</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      allArticles: state.allArticles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buttonClick: () => dispatch(gettingMoreArticles()) 
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(news);