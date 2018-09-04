const initialState = {
    isProfileUpdated:false
    
  };

  export const profile_update_reducer=(state = initialState,action)=>{

     if(action.type === 'UPDATE')
     {
         console.log(action.isProfileUpdated)
           return {
               ...state,
               isProfileUpdated:action.isProfileUpdated
              
           }
     }
     else
     {
            return { ...state }
     }

  }