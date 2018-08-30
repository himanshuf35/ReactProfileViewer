import React,{Component} from 'react'
import {View,TextInput,StyleSheet,TouchableOpacity,Text,Image} from 'react-native' 

export class GButton extends Component{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(
            <TouchableOpacity onPress={()=>{this.props.press()}} style={{width:300}}>
               
               <Image source={require('./orange.png')}  style={styles.img}>
               </Image>
               
               <Text style={styles.Text}>{this.props.title}</Text>
              

            </TouchableOpacity>
        )
        
    }
}
const styles=StyleSheet.create({
    Text:{ 
        color:'white',
        backgroundColor: 'transparent',
        textAlign: 'center',
        fontSize: 22,
        padding: 40, 
} ,
    img:{
        top:32,
        position:'absolute',
        height:50,
        width:300
    }
})