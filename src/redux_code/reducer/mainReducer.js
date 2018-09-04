import {combineReducer, combineReducers} from 'redux'
import {sigin_reducer} from './signin_action_reducer'
import {userlist_reducer} from './userlist_reducer'
import {profile_update_reducer} from './profile_update_reducer'


export default combineReducers({
    main:sigin_reducer,
    user:userlist_reducer,
    update:profile_update_reducer
})