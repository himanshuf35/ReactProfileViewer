import {combineReducer, combineReducers} from 'redux'
import {sigin_reducer} from '../reducer/signin_action_reducer'


export default combineReducers({
    main:sigin_reducer
})