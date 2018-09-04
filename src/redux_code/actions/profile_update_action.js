import {AysncStorage} from 'react-native'


const profileUpdated = () => ({
    type: 'UPDATE',
    isProfileUpdated:true
  });

export const profile_update=(email,image_source,accessToken)=>async(dispatch)=>{
    try{
        const res=await fetch('http://192.168.12.39:7000/api/v1/user/uploadUserImage',{

                'method':'POST',
                'headers': {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token':accessToken
                  },
                  body: JSON.stringify({
                    "email":email,
                    "image":image_source.uri
                  })

              })

              const data=await res.json();
              
              if(data.status)
              {
                

                console.log("Updated")
                  dispatch(profileUpdated())
                // this.storeToken(data.token,data.data)
                // dispatch(setLoginData(data.data));
                // console.log("here"+data)
                // alert("Logged In")
        
                  
              }
              else{
                //   console.log(data)
                //   alert(data.message)
              }

    }
    catch(error)
    {
        console.log(error)
    }
}