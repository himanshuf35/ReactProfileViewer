const initialState = {
    data: [],
  };

  export const sigin_reducer=(state = initialState,action)=>{

     if(action.type === SET_LOGIN)
     {
           return {
               ...state,
               data:action.data
           }
     }
     else
     {
            return { ...state }
     }

  }