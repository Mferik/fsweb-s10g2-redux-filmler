import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoriteReducer from './favoriteReducer'

const combinedReducer = combineReducers({
    movieReducer,
    favoriteReducer,
})


export default combinedReducer;