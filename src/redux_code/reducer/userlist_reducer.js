// const initialState=[]

export const userlist_reducer=(state,action)=>
{

    if(action.type === 'USER_DATA')
     {   
    
           if(state.Userdata === undefined)
           {
               console.log("shit")
               return {
                Userdata:action.Userdata,
                token:action.token,
                userdata:action.userdata
               }
           }
           else
           {
               console.log(state)
           return {
               ...state,
               Userdata:state.Userdata.concat(action.Userdata)
              
           }
           }
     }
     else
     {
            return { ...state }
     }

}