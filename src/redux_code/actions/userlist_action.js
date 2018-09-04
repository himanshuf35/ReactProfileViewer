
const setUserData=(data,token,userdata)=>({

    type:'USER_DATA',
    Userdata:data,
    token:token,
    userdata:userdata

});








export const getData=(page_count,accessToken,userdata)=>async(dispatch)=>{
    console.log(accessToken)
    console.log("entered getData")
    try {
        console.log("After Try")
        const res= await fetch('http://192.168.12.39:7000/api/v1/user/getUserList/0/'+page_count+'/10',
        {
            'method':'GET',
            'headers':{
                'x-access-token':accessToken

                // 'x-access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhpbWFuc2h1bWtpQG91dGxvb2suY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkUVhDSDBSUjBoMWhMZDZjRHEwTXRoTzFLNElXTmFjQjhEcTBnUFFqU0lwWHIucEpNazFrNEciLCJpYXQiOjE1MzU2MTk3NzMsImV4cCI6MTUzNTcwNjE3M30.wJAdI6qhjpeCiro8nllHmjXgqFwK_2f1YATVW1FfArQ'
            }
        })

 
const data=await res.json();
console.log(data)
this.Data=data.message.results
console.log(data.message)
dispatch(setUserData(data.message.results,accessToken,userdata))
// this.setState({data:this.state.data.concat(data.message.results),page:this.state.page+1})
 

    } catch (error) {
        
      console.log(error)
        
    }
    
}