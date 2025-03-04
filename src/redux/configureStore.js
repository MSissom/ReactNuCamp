import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Campsites } from './campsites';
import { Promotions } from './promotions';
import { Comments } from './comments';
import { Partners } from './partners';
import { InitialFeedback } from './Forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
           campsites: Campsites,
           promotions: Promotions,
           comments: Comments,
           partners: Partners, 
           ...createForms({
               feedbackForm: InitialFeedback
           })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}