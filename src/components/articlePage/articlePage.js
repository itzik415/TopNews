import React from 'react';
import { connect } from 'react-redux';
import Trending from '../trending/trending';
import {getTheRightArticle} from '../../actions';

const articlePage = (props) => {
    getTheRightArticle();

    return (
        <div className="article">
            <div className="article-containerLeft">
                <p className="article-containerLeft-title">{props.chosenArticle.title}</p>
                <p className="article-containerLeft-name"><span id="redName">Published by:{props.chosenArticle.secondaryDescription}</span></p>
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