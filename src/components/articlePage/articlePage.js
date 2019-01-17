import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import 'moment-timezone';
import Trending from '../trending/trending';
import {getTheRightArticle, getTrendingArticles} from '../../actions';

const articlePage = (props) => {
    getTheRightArticle();
    getTrendingArticles();

    return (
        <div className="article">
            <div className="article-containerLeft">
                <p className="article-containerLeft-title">{props.chosenArticle.title}</p>
                <p className="article-containerLeft-name">Published by: <span id="redName">{moment.tz(props.chosenArticle.publishedAt,"UTC").fromNow()}</span></p>
                <img className="article-containerLeft-image" src={props.chosenArticle.urlToImage} alt={props.chosenArticle.title}/>
                <p className="article-containerLeft-description">{props.chosenArticle.description}</p>
                <p className="article-containerLeft-content">{props.chosenArticle.content}</p>
            </div>
            <Trending />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        chosenArticle: state.chosenArticle
    }
}

export default connect(mapStateToProps)(articlePage);