import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity,FlatList,Image} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {AsyncStorage} from 'react-native'
import { NavigationActions,StackActions } from 'react-navigation';


export class UserList extends Component
{
    static navigationOptions = {
        title: 'SignUp',
        header:null
      };
    Data=[]
    constructor(props)
    {
        super(props)
        this.getUserData()
        this.getData()
        this.state={
          data:this.Data,
          accessToken:'',
          userdata:{}
        }
    }
    getUserData=async()=>{
        const token=await AsyncStorage.getItem("token")
        const value=await AsyncStorage.getItem("UserData")
        this.setState({
            accessToken:token,
            userdata:value
        })
        console.log(value);
        
    }

    getData=async()=>{
        console.log("entered getData")
        try {
            console.log("After Try")
            const res= await fetch('http://192.168.12.39:7000/api/v1/user/getUserList/0/1/10',
            {
                'method':'GET',
                'headers':{
                    'x-access-token':this.state.accessToken

                    // 'x-access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhpbWFuc2h1bWtpQG91dGxvb2suY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkUVhDSDBSUjBoMWhMZDZjRHEwTXRoTzFLNElXTmFjQjhEcTBnUFFqU0lwWHIucEpNazFrNEciLCJpYXQiOjE1MzU2MTk3NzMsImV4cCI6MTUzNTcwNjE3M30.wJAdI6qhjpeCiro8nllHmjXgqFwK_2f1YATVW1FfArQ'
                }
            })
   
     
    const data=await res.json();
    this.Data=data.message.results
    this.setState({data:this.Data})
    console.log(this.Data)

        } catch (error) {
            
          console.log(error)
            
        }
        
    }

    logout=async()=>
    {
        try {
            console.log("token stored")
            // const value=await AsyncStorage.getItem("token")
            // console.log(value);
            const vague=await AsyncStorage.removeItem('token')
            
           
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
            
        
           
        } 
        
        catch (error) {
            console.log(error)
        }
    }

    render()
    {
        console.log("started")
       
        
        return(

            <View>


                <View style={styles.header}>

                <Image style={styles.img} source={require('./orange.png')}/>
                <Text style={{fontSize:24,color:'white',textAlign:'center'}}>{this.state.title}</Text>
                {/* <TouchableOpacity style={styles.Micon} 
                onPress={()=>{this.Ref.openDrawer()}}
                >
                <Image  source={require('./menu-circular-button.png')}/>
                </TouchableOpacity> */}

                {/* <TouchableOpacity style={styles.filter} onPress={()=>{this.setState({SelectedMailType:this.state.SelectedMailType.reverse()})}}>
                <Image source={require('./filter-tool-black-shape.png')}/>
                </TouchableOpacity> */}
                
                <TouchableOpacity style={styles.filter} onPress={()=>{this.logout()}}>
                <Image source={require('./logout.png')}/>
                </TouchableOpacity>

                </View>

                 
                 <FlatList
                 data={this.state.data}
                 extraData={this.state}
                 renderItem={({item})=>{
                     return(<Text>{ item.name.first}</Text>)
                     }}
                 />
                     
                 
            </View>
        )
    }
}

const styles=StyleSheet.create({
    header: {
        height:70,
        width: wp('100%')
        // alignItems: 'center',
        // justifyContent: 'center',
      },
      img:{
        position:'absolute',
        height:70
      },
      filter:{
        position:'absolute',
        top:20,
        right:10
  
      }
})