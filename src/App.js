import React, { Component } from 'react';
import Slider from './components/slider/slider';
import Latest from './components/latest/latest';
import More from './components/more/more';
import { connect } from 'react-redux';
import {getTopHeadlines, 
        getTopSources,
        getBusinessArticles,
        getEntertainmentArticles,
        getHealthArticles,
        getScienceArticles,
        getSportsArticles,
        getTechnologyArticles
       } from './actions';


String.prototype.indexOfEnd = function(string) {
  var index = this.indexOf(string);
  return index === -1 ? -1 : index + string.length;
}

class App extends Component {
  componentDidMount() {
  
    //Top Headlines from top sources
    this.props.dispatch(getTopHeadlines())
    
    //Top sources
    this.props.dispatch(getTopSources())
    
    //All Business
    this.props.dispatch(getBusinessArticles())

    //All Entertainment    
    this.props.dispatch(getEntertainmentArticles())

    //All Health
    this.props.dispatch(getHealthArticles())

    //All science
    this.props.dispatch(getScienceArticles())

    //All Sports
    this.props.dispatch(getSportsArticles())

    //All Technology
    this.props.dispatch(getTechnologyArticles())
  }

  //Button for opening navigation bar
  buttonCloseNav = () => {
    document.querySelector('.navBar__section').style.transform = 'translate(-350px)';
    document.querySelector('.navBar__section').style.transition = '.4s';
    document.querySelector('.blackBackground').style.display = 'none';
  }

  render() {
    return (
      <div className="App" id="home">
        <Slider/>
        <Latest/>
        <More/>
      </div>
    );
  }
}


// const mapStateToProps = (state) => {
//   return {
//     topArticles: state.topArticles,
//     allArticles: state.allArticles
//   }
// }

export default connect(null)(App);