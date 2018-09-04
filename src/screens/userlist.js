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
        
        // this.getData()
        this.state={
          data:this.Data,
          accessToken:'',
          userdata:{},
          page:1,
          userImage:''
        }
    }

    componentWillMount()
    {
        this.getUserData()
    }

    //function to get UserData

    getUserData=async()=>{
        const token=await AsyncStorage.getItem("token")
        console.log(token);
        const value=await AsyncStorage.getItem("UserData")
          console.log(value);
          await this.setState({
            accessToken:token,
            userdata:JSON.parse(value)
        })
         await this.props.getdata(this.state.page,this.state.accessToken,this.state.userdata);
         await this.setState({
             page:this.state.page+1
         })
        
        console.log(this.state.accessToken+","+this.state.userdata)
        // console.log(value);
        
    }

    //function to get Userlist Data

    // getData=async()=>{
    //     console.log("entered getData")
    //     try {
    //         console.log("After Try")
    //         const res= await fetch('http://192.168.12.39:7000/api/v1/user/getUserList/0/'+this.state.page+'/10',
    //         {
    //             'method':'GET',
    //             'headers':{
    //                 'x-access-token':this.state.accessToken

    //                 // 'x-access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhpbWFuc2h1bWtpQG91dGxvb2suY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkUVhDSDBSUjBoMWhMZDZjRHEwTXRoTzFLNElXTmFjQjhEcTBnUFFqU0lwWHIucEpNazFrNEciLCJpYXQiOjE1MzU2MTk3NzMsImV4cCI6MTUzNTcwNjE3M30.wJAdI6qhjpeCiro8nllHmjXgqFwK_2f1YATVW1FfArQ'
    //             }
    //         })
   
     
    // const data=await res.json();
    // console.log(data)
    // this.Data=data.message.results
    // this.setState({data:this.state.data.concat(data.message.results),page:this.state.page+1})
     

    //     } catch (error) {
            
    //       console.log(error)
            
    //     }
        
    // }
 
    // //Logout Function

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
 
    //Render Function

    render()
    {
        console.log("started")
        console.log(this.state.page)
        console.log(this.state.userdata)
       
        
        return(

            <View>
                
               
                <View style={styles.header}>


                <Image style={styles.img} source={require('../images/orange.png')}/>
                <Text style={{fontSize:24,color:'white',textAlign:'center'}}>{this.state.title}</Text>
                
                <View style={styles.profile}>
                    <TouchableOpacity
                    onPress={()=>{this.props.navigation.navigate('Profile')}}>

                        <Image style={styles.userimage} source={{uri:'http://192.168.12.39:7000/'+this.state.userdata.image}}>

                        </Image>

                    </TouchableOpacity>
                    <Text style={styles.username}>
                            {this.state.userdata.name}
                    </Text>
 
                </View>


                <TouchableOpacity style={styles.filter} onPress={()=>{this.logout()}}>
                <Image source={require('../images/logout.png')}/>
                </TouchableOpacity>

                </View>

                 
                 <FlatList
                 onEndReached={()=>{
                     this.props.getdata(this.state.page,this.state.accessToken,this.state.userdata)
                     this.setState({
                         page:this.state.page+1
                     })
                     
                     }}
                 data={this.props.userdata}
                 extraData={this.props}
                 renderItem={({item})=>{
                     return(
                         <View style={styles.infoBox}>
                      <Text style={styles.innerText}>{item.name.first} {item.name.last}</Text>
                     <Text style={styles.innerText}>{ item.gender}</Text>
                     <Text style={styles.innerText}>{ item.email}</Text>
                     <Text style={styles.innerText}>{ item.phone}</Text>
                     <Text style={styles.innerText}>{ item.location.city}</Text>
                         </View>
                     
                     )
                     }}
                 />
                     
                 
            </View>
        )
    }
}

const styles=StyleSheet.create({
    header: {
        height:70,
        width: wp('100%'),
        // alignItems: 'center',
         justifyContent: 'center',
      },
      img:{
        position:'absolute',
        height:70
      },
      filter:{
        position:'absolute',
        top:20,
        right:10
      },
      innerText:{
          textAlign:'center'
      },
      infoBox:{
          margin:5,
          padding: 10,
          borderBottomWidth: 1,
      },
      username:{
          position:'absolute',
          left:60,
          color:'white',
          fontSize:20
      },
      profile:{
          justifyContent:'center',
          paddingLeft:10
      },
      userimage:{
          height:50,
          width:50,
        }

})