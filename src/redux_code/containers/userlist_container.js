import {connect} from 'react-redux'
import {UserList} from '/home/user/ReactProfileViewer/src/screens/userlist.js'
import {getData} from '../actions/userlist_action'

const mapStateToProps=(state)=>{
        return{
            userdata:state.user.Userdata
        }
}

const mapDispatchToProps=(dispatch)=>{

    return {
        getdata:(page_count,accessToken,userdata)=>{ dispatch(getData(page_count,accessToken,userdata))}
    }
}

const Userlist=connect(mapStateToProps,mapDispatchToProps)(UserList)

export default Userlist