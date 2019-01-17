// import { store } from './store';
import { buildSliderItemsFromArticles, 
         getTheRightArticle, 
         buildTrendingItemsFromArticles, 
         buildLatestItemsFromArticles } from './actions';

export const initialState = {
    counter: 0,
    business: [],
    entertainment: [],
    health: [],
    science: [],
    sports: [],
    technology: [],
    trendingList: [],
    topArticles: [],
    topHeadlines: [],
    allArticles: [],
    trendingArticles: [],
    slider: {
        sliderItems: [],
        itemIndex: 0,
        onSliderItemClicked: null
    },
    chosenArticle: [],
    pageNumber: 2,
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
                topHeadlines: action.payload, 
                topArticles: buildLatestItemsFromArticles(action.payload.slice(5,10)),
                trendingArticles: buildTrendingItemsFromArticles(action.payload.slice(10,18)),
                slider: {
                    sliderItems: buildSliderItemsFromArticles(action.payload.slice(0,5)),
                    onSliderItemClicked: (clickEvent) => getTheRightArticle(clickEvent),
                    // onSliderItemClicked: (clickEvent) => articleHandle(clickEvent.currentTarget.textContent, action.payload),
                    itemIndex: 0
                }
            }

        case 'RECIVE_BUSINESS_ARTICLES':
            return {
                ...state, 
                business: action.payload, 
                trendingList: {
                    ...state.trendingList,
                    business: action.payload
                },
                
            }

        case 'RECIVE_ENTERTAINMENT_ARTICLES':
            return {
                ...state, 
                entertainment: action.payload,
                trendingList: {
                    ...state.trendingList,
                    entertainment: action.payload
                }
            }
        
        case 'RECIVE_HEALTH_ARTICLES':
            return {
                ...state, 
                health: action.payload,
                trendingList: {
                    ...state.trendingList,
                    health: action.payload
                }
            }
        
        case 'RECIVE_SCIENCE_ARTICLES':
            return {
                ...state, 
                science: action.payload,
                trendingList: {
                    ...state.trendingList,
                    science: action.payload
                }
            }

        case 'RECIVE_SPORTS_ARTICLES':
            return {
                ...state, 
                sports: action.payload,
                trendingList: {
                    ...state.trendingList,
                    sports: action.payload
                }
            }

        case 'RECIVE_TECHNOLOGY_ARTICLES':
            return {
                ...state, 
                technology: action.payload,
                trendingList: {
                    ...state.trendingList,
                    technology: action.payload
                }
            }

        case 'RECIVE_MORE_ARTICLES':
            return {
                ...state, 
                allArticles: [...state.allArticles, ...action.payload],
                pageNumber: action.payload2
            }

        // case 'RECIVE_HEADER_CATEGORY':
        //     return {
        //         ...state, 
        //         trendingList: [...initialState.trendingList, ...action.payload]
        //     }

        case 'RECIVE_HEADER_CATEGORY':
            return {
                ...state, 
                trendingList: action.payload
            }


        case 'MOVING_SLIDER_RIGHT':
            return {
                ...state, 
                translate: state.translate - 1200,
                slider: {
                    ...state.slider,
                    itemIndex: state.slider.itemIndex + 1
                }
            }

        case 'MOVING_SLIDER_TO_ZERO':
            return {
                ...state, 
                translate: 0,
                slider: {
                    ...state.slider,
                    itemIndex: 0
                }
            }
        
        case 'MOVING_SLIDER_LEFT':
            return {
                ...state, 
                translate: state.translate + 1200,
                slider: {
                    ...state.slider,
                    itemIndex: state.slider.itemIndex - 1
                }
            }

        case 'MOVING_SLIDER_BACK':
            return {
                ...state, 
                translate: -4800,
                slider: {
                    ...state.slider,
                    itemIndex: 4
                }
            }

        case 'RIGHT_ARTICLE':
            return {
                ...state, 
                chosenArticle: action.payload
            }
        
        case 'RECIVE_RIGHT_ARTICLE':
            return {
                ...state,
                chosenArticle: action.payload
            }

        case 'INDEX_BACK_TO_ZERO':
            return {
                ...state,
                slider: {
                    ...state.slider,
                    itemIndex: 0
                }
            }
            
        case 'RECIVE_TRENDING':
            return {
                ...state,
                trendingArticles: buildTrendingItemsFromArticles(action.payload.slice(10,18))
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