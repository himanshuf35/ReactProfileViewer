import {connect} from 'react-redux'
import {SignIn} from '.../screens/Signin.js'
import {signin} from '../actions/sign_in_action'

const mapStateToProps = (state)=>
{
    console.log(state.main.data);
    return {
        data:state.main.data
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        signin:(token,userdata)=>{ dispatch(signin(token,userdata))}
    }
}

const Info=connect(mapStateToProps,mapDispatchToProps)(SignIn);

export default Info;