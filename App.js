/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput} from 'react-native';
import {Field} from './Fields'
import {fstyles} from './Fields'
import {SignIn} from './Signin'
import {SignUP} from './SignUp'
import {StackNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation'
import {Tabar} from './Tab'
import {UserList} from './userlist'
import {AsyncStorage} from 'react-native'
import {MainScreen} from './MainScreen'
 



export default class App extends Component{
  constructor(props)
  {
    super(props)
    this.isLoggedIn()
    this.state={
      email:'himanshumki@outlook.com',
      password:'blackbirdx71',
      screenToNavigate:''

    }
    
  }

  isLoggedIn=async()=>
  {
           const value=await AsyncStorage.getItem("token")
           console.log(value);
           if(value !== null)
           {
            this.setState({screenToNavigate:'UserList'})
           }
           else{
            this.setState({screenToNavigate:'Home'})
           }
          //  console.log(value);
  }

  render() {
   

      
      return(
         <RootStack email={this.state.email} password={this.state.password}></RootStack>
      )
     
  }
}

export const RootStack=createStackNavigator({
  
  Main:{
    screen:MainScreen
  },
  Home:{
    screen:SignIn
  },
  SignUp:{
    screen:SignUP
  },
  TabScreen:{
    screen:Tabar
  },
  UserList:{
    screen:UserList
  }
  
},{
  initialRouteParams:{
    name:'Himanshu',
    email:'himanshumki@outlook.com',
    password:'blackbirdx71'
  }
})

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
});
