
import React, {Component} from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';



export class Card extends Component
{
  constructor(props)
   {
     super(props);
     this.state={


     }
   }
   render()
   {
     return(
              <View style={styles.CardContainer}>
                
                 <View style={styles.Profile}>
                   <View style={styles.names}>

                     <Text>{this.props.name}</Text>
                     <Text style={{color:'red',fontSize:11}}>@{this.props.userName}</Text>

                   </View>

                    <Image style={styles.userimage} source={{uri:this.props.userImage}}/>
                    <View style={styles.time}>
                      <Text style={{fontSize:12}}>{this.props.timeString}</Text>
                      <Text style={styles.locationInfo}>in India</Text>
                    </View>
                    <Image style={styles.location} source={require('../images/placeholder.png')}/>


                 </View>


                 <View>

                 <Image style={{height:200,width:360}} source={{uri:this.props.image}}/>

                 </View>

                 <View>

                   <View style={styles.desc}>
                    <Text>{this.props.description}</Text>
                   </View> 
                   <Image style={styles.location} source={require('../images/right-arrow.png')}/>

                 </View>

              </View>  
 
     )
   }

}


const styles = StyleSheet.create({
    
  CardContainer: {
    // padding:5,
    borderBottomWidth:1,
    borderBottomColor:'#aaaeb5'

  },
  Profile:{
   position:'relative',
   height:70
  },
  names:{
    position:'absolute',
    left:70,
    top:15,
  },
  userimage:{
    height:50,
    width:50,
    borderRadius:25,
    position:'absolute',
    top:10,
    left:10
  },
  time:{
    position:'absolute',
    right:35,
    top:10
  },
  desc:{
    paddingLeft:15,
    paddingTop:15,
    paddingBottom:15,
    width:300
  },
  location:{
     position:'absolute',
     top:15,
     right:5
  },
  locationInfo:{
    color:'red',
    textAlign:'right',
    fontSize:11
  },
});
