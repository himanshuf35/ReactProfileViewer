/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
import {SignIn} from '../screens/Signin'
import {SignUP} from '../screens/SignUp'
import {StackNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation'
import {Tabar} from '../navigation/Tab'
import {UserList} from '../screens/userlist'
import {AsyncStorage} from 'react-native'
import {MainScreen} from '../screens/MainScreen'
import {Profile} from '../screens/Profile'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import MainReducer from '../redux_code/reducer/mainReducer'
import Info from '../redux_code/containers/sign_in_container'
import Userlist from '../redux_code/containers/userlist_container'
import Update from '../redux_code/containers/profile_update_container'
import thunk from 'redux-thunk'

const store=createStore(MainReducer,undefined,applyMiddleware(thunk))
 



export default class App extends Component{
  constructor(props)
  {
    super(props)
    // this.isLoggedIn()
    this.state={
      email:'himanshumki@outlook.com',
      password:'blackbirdx71',
      screenToNavigate:''

    }
    
  }

 

  render() {
   

      
      return(
        <Provider store={store}>
        <RootStack email={this.state.email} password={this.state.password}></RootStack>
        </Provider>
         
      )
     
  }
}

export const RootStack=createStackNavigator({
  
  Main:{
    screen:MainScreen
  },
  Home:{
    screen:Info
  },
  SignUp:{
    screen:SignUP
  },
  TabScreen:{
    screen:Tabar
  },
  UserList:{
    screen:Userlist
  },
  Profile:{
    screen:Update
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
