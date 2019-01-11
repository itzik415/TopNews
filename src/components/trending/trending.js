import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const trending = (props) => {
    return (
        <div className="trending__section">
            <p className="trending__section-line"></p>
            <p className="trending__section-title"><span className="trending__section-title-text">Trendings</span></p>
            {
                props.trendingArticles.map((item, index) => {
                    return (
                        <Link id='link' to={item.url} key={index}>
                            <div className="trending__section-container">
                                <img className="trending__section-container-left" src={item.image} alt={item.title}/>
                                <div className="trending__section-container-right">
                                    <p className="trending__section-container-right-name"><span id="redName">{item.secondaryDescription}</span></p>
                                    <p className="trending__section-container-right-title">{item.title}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        trendingArticles: state.trendingArticles
    }
  }
  
export default connect(mapStateToProps)(trending);