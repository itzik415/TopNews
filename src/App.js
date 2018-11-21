import React, { Component } from 'react';
import Header from './components/header/header';
import Slider from './components/slider/slider';
import Latest from './components/latest/latest';
import More from './components/more/more';
import Footer from './components/footer/footer';

String.prototype.indexOfEnd = function(string) {
  var index = this.indexOf(string);
  return index == -1 ? -1 : index + string.length;
}

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
      pageNumber: 2,
      articleNumber: 0,
      translate: 0
    }
  }

  componentDidMount() {
    //API KEY 62abe08b0bac4d048638127c17e09e69
  
    // //Top Headlines
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=62abe08b0bac4d048638127c17e09e69')
      .then(response => response.json())
      .then(myJson => this.setState({topArticles: myJson.articles.map(value => value)}))
      .catch(err => console.log('ERROR: ' + err));

    //Top sources
    fetch('https://newsapi.org/v2/everything?language=en&domains=wsj.com,nytimes.com,foxnews.com,nbcnews.com,news.nationalgeographic.comnfl.com/news,us.cnn.com&apiKey=62abe08b0bac4d048638127c17e09e69')
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
    fetch('https://newsapi.org/v2/everything?q=tech&language=en&apiKey=62abe08b0bac4d048638127c17e09e69')
      .then(response => response.json())
      .then(myJson => this.setState({technology: myJson.articles.map(value => value)}))
      .catch(err => console.log('ERROR: ' + err));
    
    fetch('https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&apiKey=62abe08b0bac4d048638127c17e09e69')
      .then(response => response.json())
      // .then(myJson => this.setState({technology: myJson.articles.map(value => value)}))
      .then(myJson => console.log(myJson))
      .catch(err => console.log('ERROR: ' + err));

      
  }

  //News button clicking for getting more news from popular wesites
  buttonClick = () => {
    fetch(`https://newsapi.org/v2/everything?language=en&domains=wsj.com,nytimes.com,foxnews.com,nbcnews.com,news.nationalgeographic.comnfl.com/news,techcrunch.com,us.cnn.com&apiKey=62abe08b0bac4d048638127c17e09e69&page=${this.state.pageNumber}`)
      .then(response => response.json())
      .then(myJson =>  this.setState({allArticles: [...this.state.allArticles, ...myJson.articles.map(value => value)]}))
      .catch(err => console.log('ERROR: ' + err));
    this.setState({pageNumber: this.state.pageNumber+1})
  }

  //For opening the right category on button click in Trendings
  categoryChange = (e) => {
    const a = e.currentTarget.textContent;
    fetch(`https://newsapi.org/v2/everything?q=${a}&language=en&apiKey=62abe08b0bac4d048638127c17e09e69`)
      .then(response => response.json())
      .then(myJson => this.setState({trendingList: myJson.articles.map(value => value)}))
      .catch(err => console.log('ERROR: ' + err));
  }

  //Opening header navigation options when hover
  mouseEnter = (e) =>{
    document.querySelector('.hidden__section').style.display = 'flex';
    const a = e.currentTarget.textContent;
    fetch(`https://newsapi.org/v2/everything?q=${a}&language=en&apiKey=62abe08b0bac4d048638127c17e09e69`)
      .then(response => response.json())
      .then(myJson => this.setState({trendingList: myJson.articles.map(value => value)}))
      .catch(err => console.log('ERROR: ' + err));
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
    // console.log(this.state.entertainment);
    // console.log(this.state.general);
    // console.log(this.state.business);
    // if(this.state.allArticles.length > 0) {
    //   console.log(this.state.topArticles)
    // }
    
    return (
      <div className="App" id="home">
        <div className="blackBackground" onClick={() =>this.buttonCloseNav()}></div>

        <Header 
          buttonCloseNav={() => this.buttonCloseNav()}
          buttonOpenNav={() => this.buttonOpenNav()}
          mouseLeave={() => this.mouseLeave()}
          mouseEnter={(e) => this.mouseEnter(e)}
          buttonClick={() => this.buttonClick()}
          trendingList={this.state.trendingList}
        />

        <Slider 
          articleHandle={(article) => {this.articleHandle(article)}}
          movingArticlesLeft={() => this.movingArticlesLeft()}
          movingArticlesRight={() => this.movingArticlesRight()}
          topArticles={this.state.topArticles}
        />

        <Latest 
          articleHandle={(article) => {this.articleHandle(article)}}
          topArticles={this.state.topArticles}
        />

        <More 
          categoryChange={(e)=>this.categoryChange(e)}
          trendingList={this.state.trendingList}
          allArticles={this.state.allArticles} 
          buttonClick={() => this.buttonClick()}
        />

        <Footer />

      </div>
    );
  }
}

export default App;
