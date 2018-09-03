import React,{Component} from 'react'
import {View,TextInput,StyleSheet,Text} from 'react-native' 


export class Field extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            email:'',
            password:'',
            message:'',
            isPassValid:false
        }
    }
    render()
    {
        return (
            <View>
                <TextInput 
                placeholder={this.props.placeholder1} 
                style={fstyles.Inputfield} 
                onChangeText={(text)=>{

                this.props.setEmail(text)
                
                }
                
                } ></TextInput>
                <TextInput 
                secureTextEntry={true} 
                placeholder={this.props.placeholder2} 
                style={fstyles.password} 
                onChangeText={
                    (text)=>{
                        this.setState({password:text})
                      if(!(/^[a-zA-Z0-9]+$/.test(this.state.password)))
                           {
                              this.setState({message:"Invalid password"})
                           }
                      else
                    {
                         this.setState({
                         message:'',
                         isPassValid:true
                           })
                     }
                         this.props.setPassword(text,this.state.isPassValid)
                    
                    }

                    } ></TextInput>
                    <Text>{this.state.message}</Text>
            </View>
        )
    }
}
export const fstyles=StyleSheet.create(
    {   container:{
          alignItems: 'center',
          justifyContent: 'center',
        },
        Inputfield:{
              paddingHorizontal: 15,
              paddingVertical: 10,
              height:50,
              width:300,
              borderTopWidth: 1,
              borderLeftWidth: 1,
              borderRightWidth: 1,
        },
        password:{
            paddingHorizontal: 15,
              paddingVertical: 10,
              height:50,
              width:300,
              borderWidth: 1
        }
        

    }
)