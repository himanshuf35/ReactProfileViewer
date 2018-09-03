import React,{Component} from 'react'
import {View,TextInput,StyleSheet,Text} from 'react-native' 
import {Field} from '../components/Fields'
import {fstyles} from '../components/Fields'
import {styles} from '../navigation/App'
import {GButton} from '../components/button'
import { NavigationActions,StackActions } from 'react-navigation';
// import {AsyncStorage} from 'react-native'



export class SignUP extends Component{
    static navigationOptions = {
        title: 'SignUp',
        header:null
      };

constructor(props)
{
    super(props)
    this.state={
        name:'',
        email:'',
        password:'',
        isPassValid:false
    }
}

createUser=async()=>
{
    console.log("entered CreateUser")
    try {
        console.log("After Try")
        const res= await fetch('http://192.168.12.39:7000/api/v1/user/createUser',
        {
            'method':'POST',
            'headers': {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                "name":this.state.name,
                "email":this.state.email,
                "password":this.state.password
              }),
        })

 
          const data=await res.json();
          if(data.success)
          {
            let stackaction=StackActions.reset({
                index:0,
                actions:[NavigationActions.navigate({routeName:'Home',
                params:{
                    name:this.state.name,
                    email:this.state.email,
                    password:this.state.password
                }
                })]
            })
            this.props.navigation.dispatch(stackaction);

            console.log(data)
              
          }
          else{
              alert(data.message)
          }
          

    } catch (error) {
        
      console.log(error)
        
    }
    
}

render()
{
    return(
        <View style={styles.container}>
        <Text>{this.state.RegistrationFailed}</Text>
        <TextInput 
        style={fstyles.Inputfield} 
        placeholder="Name"
        onChangeText={(text)=>{this.setState({name:text})}}
         ></TextInput>

        <Field 
        setEmail={(email)=>{this.setState({email:email})}} 
        setPassword={(password,isValid)=>{this.setState({password:password,isPassValid:isValid})}}
        placeholder1='E-Mail' 
        placeholder2='password'/>
        <View style={{marginTop:40}}>
        <GButton title="SignUp" press={()=>{
             if(this.state.isPassValid)
                {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email))
                {
                    // this.props.onSubmit(this.state.email,this.state.password)
                    let stackaction=StackActions.reset({
                index:0,
                actions:[NavigationActions.navigate({routeName:'Home',
                params:{
                    name:this.state.name,
                    email:this.state.email,
                    password:this.state.password
                }
                })]
            })


               this.createUser()
            // this.props.navigation.dispatch(stackaction);
           
                }
                else
                {
                    alert("Invalid Email")
                }
            }
            
             

            }
            
            }/>

            </View>

            <Text>{this.state.email},{this.state.password}</Text>
        </View>
    )
}
}