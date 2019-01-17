import { initialState } from './reducer';
import { store } from './store';
import moment from 'moment';
import 'moment-timezone';
// import { connect } from 'react-redux';

//API KEY 62abe08b0bac4d048638127c17e09e69

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
            .then(myJson => dispatch({type: 'RECIVE_ENTERTAINMENT_ARTICLES',payload: myJson.articles.map(value => value)}))
            .catch(err => dispatch({type: 'ERROR', payload: err}));
    }
}

//All Health
export function getHealthArticles() {
    return function(dispatch) {
        fetch('https://newsapi.org/v2/everything?q=health&language=en&apiKey=62abe08b0bac4d048638127c17e09e69')
            .then(response => response.json())
            .then(myJson => dispatch({type: 'RECIVE_HEALTH_ARTICLES',payload: myJson.articles.map(value => value)}))
            .catch(err => dispatch({type: 'ERROR', payload: err}));
    }
}

//All Science
export function getScienceArticles() {
    return function(dispatch) {
        fetch('https://newsapi.org/v2/everything?q=science&language=en&apiKey=62abe08b0bac4d048638127c17e09e69')
            .then(response => response.json())
            .then(myJson => dispatch({type: 'RECIVE_SCIENCE_ARTICLES',payload: myJson.articles.map(value => value)}))
            .catch(err => dispatch({type: 'ERROR', payload: err}));
    }
}

//All Sports
export function getSportsArticles() {
    return function(dispatch) {
        fetch('https://newsapi.org/v2/everything?q=sport&language=en&apiKey=62abe08b0bac4d048638127c17e09e69')
            .then(response => response.json())
            .then(myJson => dispatch({type: 'RECIVE_SPORTS_ARTICLES',payload: myJson.articles.map(value => value)}))
            .catch(err => dispatch({type: 'ERROR', payload: err}));
    }
}

//All Technology
export function getTechnologyArticles() {
    return function(dispatch) {
        fetch('https://newsapi.org/v2/everything?q=tech&language=en&apiKey=62abe08b0bac4d048638127c17e09e69')
            .then(response => response.json())
            .then(myJson => dispatch({type: 'RECIVE_TECHNOLOGY_ARTICLES',payload: myJson.articles.map(value => value)}))
            .catch(err => dispatch({type: 'ERROR', payload: err}));
    }
}

//News button clicking for getting more news from popular websites
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

//Opening header navigation options when hover
// export function headerHover(e) {
//     return function(dispatch) {
//         document.querySelector('.hidden__section').style.display = 'flex';
//         const a = e.currentTarget.textContent;
//         fetch(`https://newsapi.org/v2/everything?q=${a}&language=en&apiKey=62abe08b0bac4d048638127c17e09e69`)
//             .then(response => response.json())
//             .then(myJson => dispatch({type: 'RECIVE_HEADER_CATEGORY', payload: myJson.articles.map(value => value)}))
//             .catch(err => dispatch({type: 'ERROR', payload: err}))
        
//     }
// }

// export function headerHover(e) {
//     const a = e.currentTarget.textContent.toLowerCase();
//     // const aLower = a.;
//     // if(aLower in initialState) {
//     // console.log(store.getState()["a"])
//     console.log(store.getState().a)
//     return {
//         type: `RECIVE_${a.toUpperCase()}_CATEGORY`,
//         payload: `${store.getState()}.${a}`
//     }

//     // }
// }

//Opening header navigation options when hover
export function headerHover(e) {
    document.querySelector('.hidden__section').style.display = 'flex';
    const a = e.currentTarget.textContent.toLowerCase();
    if(a === 'business') {
        return {
            type: `RECIVE_HEADER_CATEGORY`,
            payload: store.getState().business
        }
    }
    if(a === 'technology') {
        return {
            type: `RECIVE_HEADER_CATEGORY`,
            payload: store.getState().technology
        }
    }
    if(a === 'science') {
        return {
            type: `RECIVE_HEADER_CATEGORY`,
            payload: store.getState().science
        }
    }
    if(a === 'entertainment') {
        return {
            type: `RECIVE_HEADER_CATEGORY`,
            payload: store.getState().entertainment
        }
    }
    if(a === 'health') {
        return {
            type: `RECIVE_HEADER_CATEGORY`,
            payload: store.getState().health
        }
    }
    if(a === 'sports') {
        return {
            type: `RECIVE_HEADER_CATEGORY`,
            payload: store.getState().sports
        }
    }
}

//Moving slider to the right
export function movingSliderRight() {
    //index * -1200
    //articleIndex not articleNumber
    //articleNumber (5) (10) (3) - how many pictures do we have 
    let itemIndex = store.getState().slider.itemIndex;
    let itemsCount = store.getState().slider.sliderItems.length;

    if(itemIndex < itemsCount - 1) {
        for(let i = 0; i < itemsCount; i++) {
            document.querySelector(`.slider__section-middle-${i}`).style.transform = `translateX(${store.getState().translate-1200}px)`; 
        }
        return {
            type: 'MOVING_SLIDER_RIGHT'
        }
    }else {
        for(let i = 0; i < itemsCount; i++) {
            document.querySelector(`.slider__section-middle-${i}`).style.transform = `translateX(0)`;
        }
        return {
            type: 'MOVING_SLIDER_TO_ZERO',
        }
    }
}

//Moving slider to the left
export function movingSliderLeft() {
    let itemIndex = store.getState().slider.itemIndex;
    let itemsCount = store.getState().slider.sliderItems.length;
    if(itemIndex > 0) {
        for(let i = 0; i < itemsCount; i++) {
            document.querySelector(`.slider__section-middle-${i}`).style.transform = `translateX(${store.getState().translate+1200}px)`; 
        }
        return {
            type: 'MOVING_SLIDER_LEFT'
        }
    }else {
        for(let i = 0; i < itemsCount; i++) {
            document.querySelector(`.slider__section-middle-${i}`).style.transform = `translateX(-4800px)`;
        }
        return {
            type: 'MOVING_SLIDER_BACK',
        }
    }
}

//Getting the right article with click - Slider and Latest
export function articleHandle(selectedArticleName, articles) {
    let chosenArticleArray = articles.filter((item) => {
        return selectedArticleName.slice(selectedArticleName.search(item.title), selectedArticleName.indexOfEnd(item.title)) === item.title;
    })
    let chosenArticle = chosenArticleArray[0];
    store.dispatch({type: 'RIGHT_ARTICLE', payload: initialState.chosenArticle = chosenArticle})
}

// //Get the right article from the API
// export function getTheRightArticle(selectedArticleName, articles) {
//     let chosenArticleArray = articles.filter((item) => {
//         return selectedArticleName.slice(selectedArticleName.search(item.title), selectedArticleName.indexOfEnd(item.title)) === item.title;
//     })
//     let chosenArticle = chosenArticleArray[0].title.replace(/ /g,'%20');
//     fetch(`https://newsapi.org/v2/top-headlines?q=${chosenArticle}&apiKey=62abe08b0bac4d048638127c17e09e69`)
//         .then(response => response.json())
//         .then(myJson => store.dispatch({type: 'RECIVE_RIGHT_ARTICLE', payload: myJson.articles[0]}))
//         .catch(err => store.dispatch({type: 'ERROR', payload: err}))
// }

//Get the right article from the API
export function getTheRightArticle() {
    let urlLocation = window.location.href;
    let pageUrl = urlLocation.slice(urlLocation.indexOf('article/')+8);
    // .replace(/[\/\\(),.-]/, ' ').replace(/\s+/, '-').replace(/(^-|-$)/, '')
    if(window.location.href.indexOf('article/') > -1) {
        fetch(`https://newsapi.org/v2/top-headlines?q=${pageUrl}&apiKey=62abe08b0bac4d048638127c17e09e69`)
            .then(response => response.json())
            .then(myJson => store.dispatch({type: 'RECIVE_RIGHT_ARTICLE', payload: myJson.articles[0]}))
            .catch(err => store.dispatch({type: 'ERROR', payload: err}))
    }else {
        console.log('didnt find')
    }
}

//Get trending directly form the API
export function getTrendingArticles() {
    return function(dispatch) {
        fetch('https://newsapi.org/v2/top-headlines?sources=the-washington-post,the-new-york-times,fox-news,nbc-news,cnn-es&apiKey=62abe08b0bac4d048638127c17e09e69')
            .then(response => response.json())
            .then(myJson => dispatch({type: 'RECIVE_TRENDING', payload: myJson.articles.map(value => value)}))
            .catch(err => dispatch({type: 'ERROR', payload: err}));
    }
}

//For creating new sliderItems list
export function buildSliderItemsFromArticles(selectedArticles) {
    let sliderItems = [];
    for(let i = 0; i < selectedArticles.length; i++){
        let item = {
            title: selectedArticles[i].title,
            image: selectedArticles[i].urlToImage, 
            description: selectedArticles[i].description,
            secondaryDescription: selectedArticles[i].source.name + '/ ' + moment.tz(selectedArticles[i].publishedAt,"UTC").fromNow(),
            url: `/article/${selectedArticles[i].title}`,
        }
        sliderItems.push(item)
    }
    return sliderItems
}

//For creating new trending list
export function buildTrendingItemsFromArticles(selectedArticles) {
    let trendingItems = [];
    for(let i = 0; i < selectedArticles.length; i++){
        let item = {
            title: selectedArticles[i].title,
            image: selectedArticles[i].urlToImage, 
            secondaryDescription: selectedArticles[i].source.name + '/ ' + moment.tz(selectedArticles[i].publishedAt,"UTC").fromNow(),
            url: `/article/${selectedArticles[i].title}`,
        }
        trendingItems.push(item)
    }
    return trendingItems
}

//For creating new latest list
export function buildLatestItemsFromArticles(selectedArticles) {
    let latestItems = [];
    for(let i = 0; i < selectedArticles.length; i++){
        let item = {
            title: selectedArticles[i].title,
            image: selectedArticles[i].urlToImage, 
            secondaryDescription: selectedArticles[i].source.name + '/ ' + moment.tz(selectedArticles[i].publishedAt,"UTC").fromNow(),
            url: `/article/${selectedArticles[i].title}`,
        }
        latestItems.push(item)
    }
    return latestItems
}

//IndexItem for slider back to zero
export function itemIndexForSliderBackToZero () {
    store.dispatch({type: 'INDEX_BACK_TO_ZERO'})
}



//Changing it to rusable url
// function convertedUrlToRusableUrl() {
//     sliderItem[i].replace(/[\/\\(),.-]/, ' ').replace(/\s+/, '-').replace(/(^-|-$)/, '')
// }




