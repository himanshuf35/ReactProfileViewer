import {connect} from 'react-redux'
import {SignIn} from '../../screens/Signin'
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
        signin:(email,password)=>{ dispatch(signin(email,password))}
    }
}

const Info=connect(mapStateToProps,mapDispatchToProps)(SignIn);

export default Info;