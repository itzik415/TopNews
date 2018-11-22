import React from 'react';
import CategoryPageTop from './categoryPageTop/categoryPageTop';
import CategoryPageList from './categoryPageList/categoryPageList';
import Trending from '../trending/trending';
// import {Link} from 'react-router-dom';

const categoryPage = (props) => {
    return (
        <div className="categoryPage">
            <CategoryPageTop />
            <div className="categoryPage-bottom">
                
                <Trending />
            </div>
        </div>
    )
}

export default categoryPage;