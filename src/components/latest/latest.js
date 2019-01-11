import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const latest = (props) => {
    return (
        <div className="gallery">
            <p className="gallery-line"></p>
            <p className="gallery-title"><span className="gallery-title-text">latest news</span></p>
            {   
                props.topArticles.map((item,index) => {
                    return (
                        <figure className={`gallery__item gallery__item--${index}`} onClick={props.articleHandle} key={index}>    
                            <Link id="link" to={item.url}>
                                <img className="gallery__img" alt={item.title} src={item.image} />    
                                <figure className={`gallery__item--${index}-container`}>                      
                                    <p className={`gallery__item--${index}-container-title`}>{item.title}</p>
                                    <p className={`gallery__item--${index}-container-date`}><span id="redName">{item.secondaryDescription}</span></p>
                                </figure>                        
                            </Link>
                        </figure>
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