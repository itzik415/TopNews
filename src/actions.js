import { initialState } from './reducer';
// import { store } from './store';
// import { connect } from 'react-redux';

//Top headlines
export function getTopHeadlines() {
    return function(dispatch) {
        fetch('https://newsapi.org/v2/top-headlines?sources=the-washington-post,the-new-york-times,fox-news,nbc-news,cnn-es&apiKey=62abe08b0bac4d048638127c17e09e69')
            .then(response => response.json())
            .then(myJson => dispatch({type: 'RECIVE_TOP_HEADLINES', payload: myJson.articles.map(value => value)}))
            .catch(err => dispatch({type: 'ERROR', payload: err}));
    }
}

//Top Sources
export function getTopSources() {
    return function(dispatch) {
        fetch('https://newsapi.org/v2/everything?language=en&domains=wsj.com,nytimes.com,foxnews.com,nbcnews.com,us.cnn.com&apiKey=62abe08b0bac4d048638127c17e09e69')
            .then(response => response.json())
            .then(myJson => dispatch({type: 'RECIVE_TOP_SOURCES', payload: myJson.articles.map(value => value)}))
            .catch(err => dispatch({type: 'ERROR', payload: err}));
    }
}

//All Business
export function getBusinessArticles() {
    return function(dispatch) {
        fetch('https://newsapi.org/v2/everything?q=business&language=en&apiKey=62abe08b0bac4d048638127c17e09e69')
            .then(response => response.json())
            .then(myJson => dispatch({type: 'RECIVE_BUSINESS_ARTICLES', payload: myJson.articles.map(value => value)}))
            .catch(err => dispatch({type: 'ERROR', payload: err}));
    }
}


//All Entertainment
export function getEntertainmentArticles() {
    return function(dispatch) {
        fetch('https://newsapi.org/v2/everything?q=entertainment&language=en&apiKey=62abe08b0bac4d048638127c17e09e69')
            .then(response => response.json())
            .then(myJson => dispatch({type: 'RECIVE_ENTERTAINMENT_ARTICLES', payload: myJson.articles.map(value => value)}))
            .catch(err => dispatch({type: 'ERROR', payload: err}));
    }
}

//All Health
export function getHealthArticles() {
    return function(dispatch) {
        fetch('https://newsapi.org/v2/everything?q=health&language=en&apiKey=62abe08b0bac4d048638127c17e09e69')
            .then(response => response.json())
            .then(myJson => dispatch({type: 'RECIVE_HEALTH_ARTICLES', payload: myJson.articles.map(value => value)}))
            .catch(err => dispatch({type: 'ERROR', payload: err}));
    }
}

//All Science
export function getScienceArticles() {
    return function(dispatch) {
        fetch('https://newsapi.org/v2/everything?q=science&language=en&apiKey=62abe08b0bac4d048638127c17e09e69')
            .then(response => response.json())
            .then(myJson => dispatch({type: 'RECIVE_SCIENCE_ARTICLES', payload: myJson.articles.map(value => value)}))
            .catch(err => dispatch({type: 'ERROR', payload: err}));
    }
}

//All Sports
export function getSportsArticles() {
    return function(dispatch) {
        fetch('https://newsapi.org/v2/everything?q=sport&language=en&apiKey=62abe08b0bac4d048638127c17e09e69')
            .then(response => response.json())
            .then(myJson => dispatch({type: 'RECIVE_SPORT_ARTICLES', payload: myJson.articles.map(value => value)}))
            .catch(err => dispatch({type: 'ERROR', payload: err}));
    }
}

//All Technology
export function getTechnologyArticles() {
    return function(dispatch) {
        fetch('https://newsapi.org/v2/everything?q=tech&language=en&apiKey=62abe08b0bac4d048638127c17e09e69')
            .then(response => response.json())
            .then(myJson => dispatch({type: 'RECIVE_TECHNOLOGY_ARTICLES', payload: myJson.articles.map(value => value)}))
            .catch(err => dispatch({type: 'ERROR', payload: err}));
    }
}

//News button clicking for getting more news from popular wesites
export function gettingMoreArticles() {
    return function(dispatch) {
        fetch(`https://newsapi.org/v2/everything?language=en&domains=wsj.com,nytimes.com,foxnews.com,nbcnews.com,news.nationalgeographic.comnfl.com/news,techcrunch.com,us.cnn.com&apiKey=62abe08b0bac4d048638127c17e09e69&page=${initialState.pageNumber}`)
            .then(response => response.json())
            .then(myJson => dispatch({type: 'RECIVE_MORE_ARTICLES', 
                payload: [...myJson.articles.map(value => value)], 
                payload2: initialState.pageNumber++}))
            .catch(err => dispatch({type: 'ERROR', payload: err}))
    }
}

// buttonClick = () => {
//     fetch(`https://newsapi.org/v2/everything?language=en&domains=wsj.com,nytimes.com,foxnews.com,nbcnews.com,news.nationalgeographic.comnfl.com/news,techcrunch.com,us.cnn.com&apiKey=62abe08b0bac4d048638127c17e09e69&page=${this.state.pageNumber}`)
//       .then(response => response.json())
    //   .then(myJson =>  this.setState({allArticles: [...this.state.allArticles, ...myJson.articles.map(value => value)]}))
    //   .catch(err => console.log('ERROR: ' + err));
//     this.setState({pageNumber: this.state.pageNumber+1})
//   }


























// store.dispatch((dispatch) => {
//     dispatch({type: 'FETCH_TOP_HEADLINES'})
//     fetch('https://newsapi.org/v2/top-headlines?sources=the-washington-post,the-new-york-times,fox-news,nbc-news,cnn-es&apiKey=62abe08b0bac4d048638127c17e09e69')
//         .then(response => response.json())
//         .then(myJson => dispatch({type: 'RECIVE_TOP_HEADLINES', payload: myJson.articles.map(value => value)}))
//         .catch(err => dispatch({type: 'ERROR_TOP_HEADLINES', payload: err}));
// })

