import React from 'react';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import articlePage from './components/articlePage/articlePage';
import categoryPage from './components/categoryPage/categoryPage';
import searchPage from './components/searchPage/searchPage';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import App from './App.js';

const buttonCloseNav = () => {
    document.querySelector('.navBar__section').style.transform = 'translate(-350px)';
    document.querySelector('.navBar__section').style.transition = '.4s';
    document.querySelector('.blackBackground').style.display = 'none';
  }

const Main = () => {
    return (
        <Router>
            <div>
            <div className="blackBackground" onClick={buttonCloseNav}></div>
            <Header />
                <Route exact path='/' component={App} />
                <Route path='/article/:name' component={articlePage} />
                <Route path='/category/:name' component={categoryPage} />
                <Route path='/searching-page/:name' component={searchPage} />
            <Footer />
            </div>
        </Router>
    )
}

export default Main;

