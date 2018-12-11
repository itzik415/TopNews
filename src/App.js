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
  constructor() {
    super();
    this.state = {
      pageNumber: 2,
      articleNumber: 0,
      translate: 0
    }
  }

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

  // //For opening the right category on button click in Trendings
  // //Don't use it anymore after got rid of the categories
  // categoryChange = (e) => {
  //   const a = e.currentTarget.textContent;
  //   fetch(`https://newsapi.org/v2/everything?q=${a}&language=en&apiKey=62abe08b0bac4d048638127c17e09e69`)
  //     .then(response => response.json())
  //     .then(myJson => this.setState({trendingList: myJson.articles.map(value => value)}))
  //     .catch(err => console.log('ERROR: ' + err));
  // }

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

  
  // Slider button right
  movingArticlesRight = () => {
    if(this.state.articleNumber < 4) {
      for(let i = 0; i < 5; i++) {
        document.querySelector(`.slider__section-middle-${i}`).style.transform = `translateX(${this.state.translate-1200}px)`; 
      }
      this.setState({translate: this.state.translate - 1200});
      this.setState({articleNumber: this.state.articleNumber + 1});
      
    }else {
      for(let i = 0; i < 5; i++) {
        document.querySelector(`.slider__section-middle-${i}`).style.transform = `translateX(0)`;
      }
      this.setState({articleNumber: 0});
      this.setState({translate: 0});
    }
  }

  // Slider button left
  movingArticlesLeft = () => {
    if(this.state.articleNumber > 0) {
      for(let i = 0; i < 5; i++) {
        document.querySelector(`.slider__section-middle-${i}`).style.transform = `translateX(${this.state.translate + 1200}px)`;   
      }
      this.setState({translate: this.state.translate + 1200});
      this.setState({articleNumber: this.state.articleNumber - 1});
      
    }else {
      for(let i = 0; i < 5; i++) {
        document.querySelector(`.slider__section-middle-${i}`).style.transform = `translateX(-4800px)`;  
      }
      this.setState({articleNumber: 4});
      this.setState({translate: -4800});
    }
  }

  //Getting the right article with click - Slider and Latest
  articleHandle = (article) => {
    var name = article.currentTarget.textContent;
    const chosenArticle = this.state.topArticles.filter((item) => {
      return name.slice(name.search(item.title), name.indexOfEnd(item.title)) === item.title;
    })
    console.log(chosenArticle)
  }

  render() {
    // console.log('APP', this.props.allArticles)
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
          movingArticlesLeft={() => this.movingArticlesLeft()}
          movingArticlesRight={() => this.movingArticlesRight()}
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     users: () => dispatch({type: 'RECIVE_R', payload: bla()})
//   }
// }

// store.dispatch((dispatch) => {
//   dispatch({type: 'FETCH_TOP_HEADLINES'})
//   fetch('https://newsapi.org/v2/top-headlines?sources=the-washington-post,the-new-york-times,fox-news,nbc-news,cnn-es&apiKey=62abe08b0bac4d048638127c17e09e69')
//       .then(response => response.json())
//       .then(myJson => dispatch({type: 'RECIVE_TOP_HEADLINES', payload: myJson.articles.map(value => value)}))
//       .catch(err => dispatch({type: 'ERROR_TOP_HEADLINES', payload: err}));
// })

export default connect(mapStateToProps)(App);