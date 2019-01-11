import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//Closing header navigation options when hover
const mouseLeave = () => {
    document.querySelector('.hidden__section').style.display = 'none';
}

// trendingList: [
//     {business: [1,2,3]},
//     {science: [1,2,3]},
//     {technology: [1,2,3]},
//     {health: [1,2,3]},
// ]

const hidden = (props) => {
    if(props.trendingList[0] !== undefined) {
        console.log(props.trendingList[0].business)
    }
    return (
        <div onMouseLeave={mouseLeave} className="hidden__section">
            <div className="hidden__section-holder">
                {
                    props.trendingList.map((article, index) => {
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
                }
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