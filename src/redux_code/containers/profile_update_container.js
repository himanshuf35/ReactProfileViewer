import {connect} from 'react-redux'
import {Profile} from '../../screens/Profile'
import {profile_update} from '../actions/profile_update_action'

const mapStateToProps = (state)=>
{
    console.log(state.update.isProfileUpdated);
    return {
        email:state.user.userdata.email,
        token:state.user.token,
        isProfileUpdated:state.update.isProfileUpdated
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        profile_update:(email,image_source,accessToken)=>{ dispatch(profile_update(email,image_source,accessToken))}
    }
}

const Update=connect(mapStateToProps,mapDispatchToProps)(Profile);

export default Update;