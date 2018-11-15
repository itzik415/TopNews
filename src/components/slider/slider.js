import React from 'react';

const slider = () => {
    return (
        <div className="slider__section">
            <ion-icon id="arrowLeft" name="arrow-dropleft"></ion-icon>
            <img className="slider__section-image" src={require('../../images/618278.jpg')} alt="Italian Trulli" />
            <div className="slider__section-article">
                <p className="slider__section-article-companyName"><span id="redName">COMPANY NAME </span> / date it came out</p>
                <p className="slider__section-article-title">main title of the article</p>
                <p className="slider__section-article-description">100-150 first letter of the article + "..."100-150 first letter of the article + "..."100-150 first letter of the article + "..."100-150 first letter of the article + "..."</p>
            </div>
            <ion-icon id="arrowRight" name="arrow-dropright"></ion-icon>
        </div>
    )
}

export default slider;