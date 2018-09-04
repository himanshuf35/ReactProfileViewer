import {AsyncStorage} from 'react-native'


const setLoginData = (token,data) => ({
    type: 'SET_LOGIN',
    data:{
        token:token,
        userdata:data,
        isLogin:true
    }
  });


  export const signin=(email,password)=> async(dispatch)=>{


    console.log("entered userSignIn")
   try {
    console.log("After Try")
    const res= await fetch('http://192.168.12.39:7000/api/v1/user/authenticateUser',
    {
        'method':'POST',
        'headers': {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "email":email,
            "password":password
          }),
    })


      const data=await res.json();
      if(data.success)
      {
          
        this.storeToken(data.token,data.data)
        dispatch(setLoginData(data.token,data.data));
        console.log("here"+data)
        alert("Logged In")

          
      }
      else{
        //   console.log(data)
        //   alert(data.message)
      }
      

} catch (error) {
    
  console.log(error)
    
}
}

storeToken=async(Token,userdata)=>{
    console.log("inStore")

    try {
        console.log("token stored")
        // const value=await AsyncStorage.getItem("token")
        // console.log(value);
         await AsyncStorage.setItem('token',Token)
         await AsyncStorage.setItem('UserData',JSON.stringify(userdata))
       
    } 
    
    catch (error) {
        console.log(error)
    }
    
}