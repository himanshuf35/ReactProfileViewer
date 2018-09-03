import React,{Component} from 'react'
import {View,TextInput,StyleSheet,TouchableOpacity,Text,Image} from 'react-native' 
import {Field} from '../components/Fields'
import {styles} from '../navigation/App'
import {GButton} from '../components/button'
import {AsyncStorage} from 'react-native'

export class SignIn extends Component
{
    static navigationOptions = {
        title: 'SignIn',
        header:null
      };
    
    constructor(props)
    {
        super(props)
        this.state={
            email:'',
        password:'',
        isPassValid:false
        }
        // this.isLoggedIn()
    }

//     isLoggedIn=async()=>
//   {
//            const value=await AsyncStorage.getItem("token")
//            console.log(value);
//            if(value !== null)
//            {
//             this.props.navigation.navigate('UserList')
//            }
//         //    else{
           
//         //    } this.setState({screenToNavigate:'Home'})
//           //  console.log(value);
//   }

    userSignIn=async()=>{
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
                "email":this.state.email,
                "password":this.state.password
              }),
        })

 
          const data=await res.json();
          if(data.success)
          {
            this.storeToken(data.token,data.data)
            console.log("here"+data)
            this.props.navigation.navigate('UserList');
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

    render()
    {
        
        return(
            <View style={styles.container}>

            <View>
                <Image style={{marginBottom:40}} source={require('../images/logo.png')}/>
            </View>
                 <Field 
                 placeholder1='E-Mail'
                 placeholder2='password'
                 setEmail={(email)=>{this.setState({email:email})}} 
                 setPassword={(password,isValid)=>{this.setState({password:password,isPassValid:isValid})}}

                  />
                 <View>
                     <GButton press={()=>{
                        //  if((this.state.email === this.props.navigation.state.params.email)
                        //      &&
                        //      (this.state.password === this.props.navigation.state.params.password)
                        //  ){
                        //    alert("User Logged In")
                        //  this.props.navigation.navigate('UserList',{
                        //     //  name:this.props.navigation.state.params.name,
                        //     //  email:this.props.navigation.state.params.email,
                        //     //  password:this.props.navigation.state.params.email

                        //  })      
                        //  }
                        //  else{
                        //      alert("Wrong Information!")
                        //  }

                         this.userSignIn()
                        // this.props.navigation.navigate('UserList')
                         
                         }} title="SignIn"/>
                 </View>
                 <View>
                     <TouchableOpacity onPress={()=>{this.props.navigation.navigate('SignUp')}}>
                         <Text>
                             Create an Account
                         </Text>
                     </TouchableOpacity>
                 </View>
                 {/* <Text>{this.props.navigation.state.params.email},{this.props.navigation.state.params.password}</Text> */}
                 
                 
            </View>

            
           
        )
    }
}