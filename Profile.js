import React,{Component} from 'react'
import {View,TextInput,StyleSheet,Image} from 'react-native' 
import {Field} from './Fields'
import {fstyles} from './Fields'
import {styles} from './App'
import {GButton} from './button'

export class Profile extends Component{
    static navigationOptions = {
        title: 'Profile',
      };

constructor(props)
{
    super(props)
    this.state={
        name:'',
        email:'',
        password:''
    }
}

render()
{
    return(
        <View style={Styles.container}>
        <Image style={{marginTop:40,marginBottom:40}} source={require('./man.png')}/>
        <TextInput style={fstyles.Inputfield} placeholder="Me" ></TextInput>
        <TextInput style={fstyles.Inputfield} placeholder="xyz.com" ></TextInput>
        <TextInput style={Styles.Bottomfield} placeholder="******" ></TextInput>
        <View style={{marginTop:40}}>
            <GButton title="Save" press={()=>{alert("Data saved")}}/>
        </View>
        </View>
    )
}
}

const Styles=StyleSheet.create(
    {
        Bottomfield:{
            paddingHorizontal: 15,
            paddingVertical: 10,
            height:50,
            width:300,
            borderWidth: 1,
      },
      container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
      }
    }
)