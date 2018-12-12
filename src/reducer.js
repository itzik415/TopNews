// import { store } from './store';


export const initialState = {
    counter: 0,
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
    translate: 0,
    error: null,
}

// export function articleHandle(article) {
//     return function(dispatch) {
//         var name = article.currentTarget.textContent;
//         const chosenArticle = initialState.topArticles.filter((item) => {
//             return name.slice(name.search(item.title), name.indexOfEnd(item.title)) === item.title;
//         })
//         console.log(chosenArticle)
//     }
// }


export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'RECIVE_TOP_SOURCES':
            return {
                ...state, 
                allArticles: action.payload 
            }

        case 'RECIVE_TOP_HEADLINES':
            return {
                ...state, 
                topArticles: action.payload 
            }

        case 'RECIVE_BUSINESS_ARTICLES':
            return {
                ...state, 
                business: action.payload, 
                trendingList: action.payload 
            }

        case 'RECIVE_ENTERTAINMENT_ARTICLES':
            return {
                ...state, 
                entertainment: action.payload,
                // trendingList: action.payload
            }
        
        case 'RECIVE_HEALTH_ARTICLES':
            return {
                ...state, 
                health: action.payload,
                // trendingList: action.payload
            }
        
        case 'RECIVE_SCIENCE_ARTICLES':
            return {
                ...state, 
                science: action.payload,
                // trendingList: action.payload
            }

        case 'RECIVE_SPORT_ARTICLES':
            return {
                ...state, 
                sport: action.payload,
                // trendingList: action.payload
            }

        case 'RECIVE_TECHNOLOGY_ARTICLES':
            return {
                ...state, 
                technology: action.payload,
                // trendingList: action.payload
            }

        case 'RECIVE_MORE_ARTICLES':
            return {
                ...state, 
                allArticles: [...state.allArticles, ...action.payload],
                pageNumber: action.payload2
            }

        case 'RECIVE_HEADER_CATEGORY':
            return {
                ...state, 
                trendingList: [...initialState.trendingList, ...action.payload]
            }

        case 'MOVING_SLIDER_RIGHT':
            return {
                ...state, 
                translate: state.translate - 1200,
                articleNumber: state.articleNumber + 1
            }

        case 'MOVING_SLIDER_TO_ZERO':
            return {
                ...state, 
                translate: 0,
                articleNumber: 0
            }
        
        case 'MOVING_SLIDER_LEFT':
            return {
                ...state, 
                translate: state.translate + 1200,
                articleNumber: state.articleNumber - 1
            }

        case 'MOVING_SLIDER_BACK':
            return {
                ...state, 
                translate: -4800,
                articleNumber: 4
            }

        case 'ERROR':
            return {
                ...state, 
                error: action.payload 
            }

        default:
            return state;
    }
}