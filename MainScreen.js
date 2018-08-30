import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity,FlatList,Image} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {AsyncStorage} from 'react-native'
import { NavigationActions,StackActions } from 'react-navigation';
import {ActivityIndicator} from 'react-native'
 
export class MainScreen extends Component{
    static navigationOptions = {
        header:null
      };

    constructor(props)
    {
        super(props)
        this.state={

        }
        setTimeout(()=>{this.isLoggedIn()},1000)
        
    }
    
    isLoggedIn=async()=>
    {
             const value=await AsyncStorage.getItem("token")
             console.log(value);
             if(value !== null)
             {
              this.props.navigation.navigate('UserList')
             }
             else{
                this.props.navigation.navigate('Home')
             } 
             console.log(value);
    }

    render()
    {
        return(
            <View style={styles.mainContainer}>
            <Image style={styles.imageContainer} source={require('./gradientMain.png')}/>
            <ActivityIndicator size="large" color="white"/>
            <Text style={styles.text}>
                Loading
            </Text>
        </View>
        )
      
    }
}

const styles=StyleSheet.create({
    mainContainer:{
       alignContent: 'center',
       justifyContent: 'center',
       width: wp('100%'),
       height:hp('100%')
    },
    imageContainer:{
        position:'absolute',
        width: wp('100%'),
        height:hp('100%')

    },
    text:{
        fontWeight: 'bold',
        fontSize: 26,
        alignSelf: 'center',
        color:'white'
    }
})
