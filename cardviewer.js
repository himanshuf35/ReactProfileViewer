/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,Image,FlatList} from 'react-native';
import {Card} from './card'



 

export class CardViewer extends Component {
  static navigationOptions = {
    title: 'ProfileList',
  };

  constructor(props)
  {
     super(props)
     var data=require('./cardata.json');
     this.Array_Items=data.CardData
     this.state={
     }
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
           
            <Image style={{position:'absolute',top:20,left:10}} source={require('./menu.png')}/>
            <Text style={{fontSize:26,color:'white'}}>Trending</Text>
            <Image style={{position:'absolute',top:20,right:10}}source={require('./earth.png')}/>

        </View>

        
         <FlatList
           data={this.Array_Items}
           renderItem={({item,Key})=>{
             return(
           <Card 
      
      key={Key}
      name={item.name} 
      userName={item.UserName}
      userImage={item.UserImage}
      timeString={item.TimeString}
      image={item.Picture}
      description={item.Description}

              />

             )}

             }
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header:{
    alignItems:'center',
    justifyContent:'center',
    height:75,
    backgroundColor:'#6E48AA',
    width:360
  }
  
  
});
