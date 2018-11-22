import React from 'react';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import articlePage from './components/articlePage/articlePage';
import categoryPage from './components/categoryPage/categoryPage';
import searchPage from './components/searchPage/searchPage';
// import Header from './components/header/header';
import Footer from './components/footer/footer';
import App from './App.js';

const Main = (props) => {
    return (
        <Router>
            <div>
            {/* <Header /> */}
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

