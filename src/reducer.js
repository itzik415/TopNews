
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
                entertainment: action.payload 
            }
        
        case 'RECIVE_HEALTH_ARTICLES':
            return {
                ...state, 
                health: action.payload 
            }
        
        case 'RECIVE_SCIENCE_ARTICLES':
            return {
                ...state, 
                science: action.payload 
            }

        case 'RECIVE_SPORT_ARTICLES':
            return {
                ...state, 
                sport: action.payload 
            }

        case 'RECIVE_TECHNOLOGY_ARTICLES':
            return {
                ...state, 
                technology: action.payload 
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
                trendingList: action.payload
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