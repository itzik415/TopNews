import React, { Component } from 'react';
import Header from './components/header/header';
import Slider from './components/slider/slider';
import Latest from './components/latest/latest';
import More from './components/more/more';
import Footer from './components/footer/footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      business: [],
      entertainment: [],
      health: [],
      science: [],
      sports: [],
      technology: [],
      topArticles: [],
      allArticles: [],
      trendingList: [],
      pageNumber: 2
    }
  }

  componentDidMount() {
    //API KEY 62abe08b0bac4d048638127c17e09e69

    //Top Headlines
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=62abe08b0bac4d048638127c17e09e69')
      .then(response => response.json())
      .then(myJson => this.setState({topArticles: myJson.articles.map(value => value)}))
      .catch(err => console.log('ERROR: ' + err));

    //All sources
    fetch('https://newsapi.org/v2/everything?language=en&domains=wsj.com,nytimes.com,foxnews.com,nbcnews.com,news.nationalgeographic.comnfl.com/news,techcrunch.com,us.cnn.com&apiKey=62abe08b0bac4d048638127c17e09e69')
      .then(response => response.json())
      .then(myJson => this.setState({allArticles: myJson.articles.map(value => value)}))
      .catch(err => console.log('ERROR: ' + err));

    //All Business
    fetch('https://newsapi.org/v2/everything?q=business&language=en&apiKey=62abe08b0bac4d048638127c17e09e69')
      .then(response => response.json())
      .then(myJson => this.setState({business: myJson.articles.map(value => value), trendingList: myJson.articles.map(value => value)}))
      .catch(err => console.log('ERROR: ' + err));

    //All Entertainment
    fetch('https://newsapi.org/v2/everything?q=entertainment&language=en&apiKey=62abe08b0bac4d048638127c17e09e69')
      .then(response => response.json())
      .then(myJson => this.setState({entertainment: myJson.articles.map(value => value)}))
      .catch(err => console.log('ERROR: ' + err));

    //All Health
    fetch('https://newsapi.org/v2/everything?q=health&language=en&apiKey=62abe08b0bac4d048638127c17e09e69')
      .then(response => response.json())
      .then(myJson => this.setState({health: myJson.articles.map(value => value)}))
      .catch(err => console.log('ERROR: ' + err));

    //All science
    fetch('https://newsapi.org/v2/everything?q=science&language=en&apiKey=62abe08b0bac4d048638127c17e09e69')
      .then(response => response.json())
      .then(myJson => this.setState({science: myJson.articles.map(value => value)}))
      .catch(err => console.log('ERROR: ' + err));

    //All Sports
    fetch('https://newsapi.org/v2/everything?q=sport&language=en&apiKey=62abe08b0bac4d048638127c17e09e69')
      .then(response => response.json())
      .then(myJson => this.setState({sports: myJson.articles.map(value => value)}))
      .catch(err => console.log('ERROR: ' + err));

    //All Technology
    fetch('https://newsapi.org/v2/everything?q=technology&language=en&apiKey=62abe08b0bac4d048638127c17e09e69')
      .then(response => response.json())
      .then(myJson => this.setState({technology: myJson.articles.map(value => value)}))
      .catch(err => console.log('ERROR: ' + err));
  }

  buttonClick = () => {
    fetch(`https://newsapi.org/v2/everything?language=en&domains=wsj.com,nytimes.com,foxnews.com,nbcnews.com,news.nationalgeographic.comnfl.com/news,techcrunch.com,us.cnn.com&apiKey=62abe08b0bac4d048638127c17e09e69&page=${this.state.pageNumber}`)
      .then(response => response.json())
      .then(myJson =>  this.setState({allArticles: [...this.state.allArticles, ...myJson.articles.map(value => value)]}))
      .catch(err => console.log('ERROR: ' + err));
    this.setState({pageNumber: this.state.pageNumber+1})
  }

  categoryChange = (e) => {
    const a = e.currentTarget.textContent;
    console.log(e.currentTarget.textContent)
    fetch(`https://newsapi.org/v2/everything?q=${a}&language=en&apiKey=62abe08b0bac4d048638127c17e09e69`)
      .then(response => response.json())
      .then(myJson => this.setState({trendingList: myJson.articles.map(value => value)}))
      .catch(err => console.log('ERROR: ' + err));
  }

  render() {
    // console.log(this.state.entertainment);
    // console.log(this.state.general);
    // console.log(this.state.business);
    // if(this.state.allArticles.length > 0) {
    //   console.log(this.state.allArticles)
    // }
    
    return (
      <div className="App">
        <Header 
          buttonClick={() => this.buttonClick()}
          trendingList={this.state.trendingList}/>
        <Slider />
        <Latest topArticles={this.state.topArticles}/>
        <More 
          categoryChange={(e)=>this.categoryChange(e)}
          trendingList={this.state.trendingList}
          allArticles={this.state.allArticles} 
          buttonClick={() => this.buttonClick()}/>
        <Footer />
      </div>
    );
  }
}

export default App;
