import React from 'react';
import moment from 'moment';
import 'moment-timezone';
import { connect } from 'react-redux';

const articlePage = (props) => {
    console.log(props.chosenArticle)
    return (
        <div className="article">
            <div className="article-containerLeft">
                {/* <p className="article-containerLeft-title">{props.chosenArticle.title}</p>
                <p className="article-containerLeft-name"><span id="redName">{props.chosenArticle.source.name}</span> / {moment.tz(props.chosenArticle.publishedAt,"UTC").fromNow()}</p>
                <img className="article-containerLeft-image" src={`${props.chosenArticle.urlToImage}`} alt='article'/>
                <p className="article-containerLeft-description">{props.chosenArticle.description}</p>
                <p className="article-containerLeft-content">{props.chosenArticle.content}</p> */}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        chosenArticle: state.chosenArticle
    }
}

export default connect(mapStateToProps)(articlePage);