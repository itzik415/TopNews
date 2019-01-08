// import { store } from './store';
import { buildSliderItemsFromArticles } from './actions';
import { articleHandle } from './actions';

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
    slider: {
        sliderItems: [],
        itemIndex: 0
    },
    chosenArticle: null,
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
                topArticles: action.payload,
                slider: {
                    sliderItems: buildSliderItemsFromArticles(action.payload.slice(0,5)),
                    onSliderItemClicked: (clickEvent) => articleHandle(clickEvent.currentTarget.textContent),
                    itemIndex: 0
                }
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
            }
        
        case 'RECIVE_HEALTH_ARTICLES':
            return {
                ...state, 
                health: action.payload,
            }
        
        case 'RECIVE_SCIENCE_ARTICLES':
            return {
                ...state, 
                science: action.payload,
            }

        case 'RECIVE_SPORTS_ARTICLES':
            return {
                ...state, 
                sports: action.payload,
            }

        case 'RECIVE_TECHNOLOGY_ARTICLES':
            return {
                ...state, 
                technology: action.payload,
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
            // let stateClone = JSON.parse()
            // state.translate -= 1200;
            // state.slider.itemIndex += 1;
            // return state;
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
                chosenArticle: action.payload[0]
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