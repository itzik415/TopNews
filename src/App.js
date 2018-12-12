import React, { Component } from 'react';
import Header from './components/header/header';
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

  //Closing header navigation options when hover
  mouseLeave = () => {
    document.querySelector('.hidden__section').style.display = 'none';
  }

  //Button for opening navigation bar
  buttonCloseNav = () => {
    document.querySelector('.navBar__section').style.transform = 'translate(-350px)';
    document.querySelector('.navBar__section').style.transition = '.4s';
    document.querySelector('.blackBackground').style.display = 'none';
  }

  //Button for closing navigation bar
  buttonOpenNav = () => {
    document.querySelector('.navBar__section').style.transform = 'translate(0px)';
    document.querySelector('.navBar__section').style.transition = '.4s';
    document.querySelector('.blackBackground').style.display = 'block';
  }

  //Getting the right article with click - Slider and Latest
  articleHandle = (article) => {
    var name = article.currentTarget.textContent;
    const chosenArticle = this.props.topArticles.filter((item) => {
      return name.slice(name.search(item.title), name.indexOfEnd(item.title)) === item.title;
    })
    console.log(chosenArticle)
  }

  render() {
    return (
      <div className="App" id="home">
        <div className="blackBackground" onClick={() =>this.buttonCloseNav()}></div>

        <Header 
          buttonCloseNav={() => this.buttonCloseNav()}
          buttonOpenNav={() => this.buttonOpenNav()}
          mouseLeave={() => this.mouseLeave()}
        />

        <Slider 
          articleHandle={(article) => {this.articleHandle(article)}}
        />

        <Latest 
          articleHandle={(article) => {this.articleHandle(article)}}
        />

        <More 
          categoryChange={(e)=>this.categoryChange(e)}
        />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    topArticles: state.topArticles,
    allArticles: state.allArticles
  }
}

export default connect(mapStateToProps)(App);