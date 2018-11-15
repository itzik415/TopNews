import React, { Component } from 'react';
import Header from './components/header/header';
import Slider from './components/slider/slider';
import Latest from './components/latest/latest';
import More from './components/more/more';
import News from './components/news/news';
// import Trending from './components/trending/trending';

class App extends Component {
  constructor() {
    super();
    this.state = {
      business: '',
      entertainment: '',
      general: '',
      health: '',
      science: '',
      sports: '',
      technology: '',
      topArticles: '',
      // allArticles: '',
      pageNumber: 1
    }
  }

  componentDidMount() {
    //API KEY 62abe08b0bac4d048638127c17e09e69

    //All sources for english news
    //https://newsapi.org/v2/sources?language=en&apiKey=62abe08b0bac4d048638127c17e09e69

    //All sources for english news with a category
    //https://newsapi.org/v2/sources?language=en&category=business&apiKey=62abe08b0bac4d048638127c17e09e69
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=62abe08b0bac4d048638127c17e09e69')
      .then(response => response.json())
      .then(myJson =>  {this.setState({topArticles: [myJson.articles.map(value => value)]})})
      .catch(err => console.log('ERROR: ' + err));
    this.setState({check: true})

    fetch('https://newsapi.org/v2/sources?language=en&category=business&apiKey=62abe08b0bac4d048638127c17e09e69')
      .then(response => response.json())
      .then(myJson =>  {this.setState({business: [myJson.sources.map(value => value)]})})
      .catch(err => console.log('ERROR: ' + err));

    fetch('https://newsapi.org/v2/sources?language=en&category=entertainment&apiKey=62abe08b0bac4d048638127c17e09e69')
      .then(response => response.json())
      .then(myJson =>  {this.setState({entertainment: [myJson.sources.map(value => value)]})})
      .catch(err => console.log('ERROR: ' + err));

    fetch('https://newsapi.org/v2/sources?language=en&category=general&apiKey=62abe08b0bac4d048638127c17e09e69')
      .then(response => response.json())
      .then(myJson =>  {this.setState({general: [myJson.sources.map(value => value)]})})
      .catch(err => console.log('ERROR: ' + err));

    fetch('https://newsapi.org/v2/sources?language=en&category=health&apiKey=62abe08b0bac4d048638127c17e09e69')
      .then(response => response.json())
      .then(myJson =>  {this.setState({health: [myJson.sources.map(value => value)]})})
      .catch(err => console.log('ERROR: ' + err));

    fetch('https://newsapi.org/v2/sources?language=en&category=science&apiKey=62abe08b0bac4d048638127c17e09e69')
      .then(response => response.json())
      .then(myJson =>  {this.setState({science: [myJson.sources.map(value => value)]})})
      .catch(err => console.log('ERROR: ' + err));

    fetch('https://newsapi.org/v2/sources?language=en&category=sports&apiKey=62abe08b0bac4d048638127c17e09e69')
      .then(response => response.json())
      .then(myJson =>  {this.setState({sports: [myJson.sources.map(value => value)]})})
      .catch(err => console.log('ERROR: ' + err));

    fetch('https://newsapi.org/v2/sources?language=en&category=technology&apiKey=62abe08b0bac4d048638127c17e09e69')
      .then(response => response.json())
      .then(myJson =>  {this.setState({technology: [myJson.sources.map(value => value)]})})
      .catch(err => console.log('ERROR: ' + err));
  }

  buttonClick = () => {
    fetch(`https://newsapi.org/v2/everything?q=trump&apiKey=62abe08b0bac4d048638127c17e09e69&page=${this.state.pageNumber}`)
      .then(response => response.json())
      .then(myJson =>  console.log(myJson.articles))
      .catch(err => console.log('ERROR: ' + err));
    this.setState({pageNumber: this.state.pageNumber+1})
  }

  render() {
    // console.log(this.state.topArticles.length);
    // if(this.state.topArticles.length > 0) {
    //   console.log(this.state.topArticles['0'])
    // }
    
    return (
      <div className="App">
        <Header buttonClick={() => this.buttonClick()}/>
        <Slider />
        <Latest topArticles={this.state.topArticles}/>
        <More />
        <News />
        {/* <Trending /> */}
      </div>
    );
  }
}

export default App;
