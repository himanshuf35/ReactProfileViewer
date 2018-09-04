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
        
    }

    componentWillReceiveProps(nextprops)
    {
        if(nextprops.data.isLogin)
        {
            nextprops.navigation.navigate('UserList')
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
                        
                         this.props.signin(this.state.email,this.state.password)
                         
                         }} title="SignIn"/>
                 </View>
                 <View>
                     <TouchableOpacity onPress={()=>{this.props.navigation.navigate('SignUp')}}>
                         <Text>
                             Create an Account
                         </Text>
                     </TouchableOpacity>
                 </View>
                 
                 
                 
            </View>

            
           
        )
    }
}