import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { movingSliderRight, movingSliderLeft} from '../../actions';

const slider = (props) => {
    return (
        <div className="slider__section">
            <div className="slider__section-arrowDivLeft">
                <ion-icon onClick={props.moveSliderLeft} id="arrowLeft" name="ios-arrow-back"></ion-icon>
            </div>
            <div className="slider__section-middle">
                {
                    props.sliderItems.map((item, index) => {
                        return (
                            <Link id='link' to={item.url} key={index}>
                                <div className={`slider__section-middle-${index}`} onClick={props.onSliderItemClicked} key={index}>
                                    <img className={`slider__section-middle-${index}-image`} src={item.image} alt={item.title}/>
                                    <div className={`slider__section-middle-${index}-item`}>
                                        <p className={`slider__section-middle-${index}-item-companyName`}><span id="redName">{item.secondaryDescription}</span></p>
                                        <p className={`slider__section-middle-${index}-item-title`}>{item.title}</p>
                                        <p className={`slider__section-middle-${index}-item-description`}>{item.description}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
            <div className="slider__section-arrowDivRight">
                <ion-icon onClick={props.moveSliderRight} id="arrowRight" name="ios-arrow-forward"></ion-icon>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        sliderItems: state.slider.sliderItems,
        onSliderItemClicked: state.slider.onSliderItemClicked

    }
}

const mapDispatchToProps = dispatch => {
    return {
        moveSliderRight: () => dispatch(movingSliderRight()),
        moveSliderLeft: () => dispatch(movingSliderLeft()),
        // onSliderItemClicked: (clickEvent) => dispatch(props.onSliderItemClicked(clickEvent))
    }
}   
  
export default connect(mapStateToProps, mapDispatchToProps)(slider);