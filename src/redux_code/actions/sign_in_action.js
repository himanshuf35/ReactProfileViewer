export const signin = (token,userdata)=>(dispatch)=>{
     
     const data={
         "Token":token,
         "Userdata":userdata
     };

     dispatch(setLoginData(data));
 
}
const setLoginData = (data) => ({
    type: 'SET_LOGIN',
    data: data,
  });