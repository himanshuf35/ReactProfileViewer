import React,{Component} from 'react'
import {View,TextInput,StyleSheet,Image,TouchableOpacity} from 'react-native' 
import {fstyles} from '../components/Fields'
import {GButton} from '../components/button'

var ImagePicker = require('react-native-image-picker');

var options = {
    title: 'Select Avatar',
    customButtons: [
      {name: 'fb', title: 'Choose Photo from Facebook'},
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
  };

export class Profile extends Component{
    static navigationOptions = {
        title: 'Profile',
        header:null
      };

constructor(props)
{
    super(props)
    this.state={
        name:'',
        email:'',
        password:'',
        avatarSource:require('../images/man.png')
    }
}



render()
{

    let data=base64.encode(this.state.avatarSource)
    let dataURL="data:image/png;base64,"+data
    console.log(dataURL)


    return(
        <View style={Styles.container}>
        {/* <Image style={{marginTop:40,marginBottom:40}} source={require('./man.png')}/> */}

        {/* <TouchableOpacity onPress={()=>{

           ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
      
        if (response.didCancel) {
          console.log('User cancelled image picker');
        }
        else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        }
        else {
          let source = { uri: response.uri };
      
          // You can also display the image using data:
          // let source = { uri: 'data:image/jpeg;base64,' + response.data };
      
          this.setState({
            avatarSource: source
          });
          console.log(this.state.avatarSource)
        }
      });
               

        }}>

        <Image source={this.state.avatarSource} style={Styles.uploadAvatar} />

        </TouchableOpacity> */}
       

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
      },
      uploadAvatar:{
          marginTop:50,
          marginBottom:40
        }
    }
)