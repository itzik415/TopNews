import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//Closing header navigation options when hover
const mouseLeave = () => {
    document.querySelector('.hidden__section').style.display = 'none';
}

const hidden = (props) => {
    if(props.trendingList !== undefined) {
        console.log(props.trendingList)
    }
    // let category;
    return (
        <div onMouseLeave={mouseLeave} className="hidden__section">
            <div className="hidden__section-holder">
                {/* {
                    props.trendingList.category.map((article, index) => {
                        return (
                            index < 6?
                            <Link id="link" to={`/article/${article.title}`} key={index}>
                                <div className="hidden__section-holder-container" key={index}>
                                    <img className="hidden__section-holder-container-img" src={`${article.urlToImage}`} alt='article'/>
                                    <p className="hidden__section-holder-container-title">{article.title}</p>
                                </div>
                            </Link>:
                            null
                        )
                    })
                } */}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        trendingList: state.trendingList,
    }
}
  
export default connect(mapStateToProps)(hidden);