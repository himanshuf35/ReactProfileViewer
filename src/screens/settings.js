import React,{Component} from 'react'
import {Switch,Slider,View,StyleSheet,Text} from 'react-native'

export class Settings extends Component
{
    constructor(props){
        super(props)
        this.state={
            switch1:false,
            switch2:false
        }
    }
    render()
    {
        return(
            <View>

                <View style={styles.content}>
                <Text style={styles.contentText}>Setting 1</Text>
                <Switch  
                style={styles.switch}
                onTintColor='cyan'
                onValueChange={()=>{
                   
                    if(!(this.state.switch1 == this.state.switch2))
                    {
                        this.setState({switch2:!this.state.switch2})
                             
                    }
                    this.setState({switch1:!this.state.switch1})
        
                    // this.setState({switch1:!this.state.switch1})
                    }}
                    value={this.state.switch1}
                />
                </View>

                <View style={styles.content}>
                <Text style={styles.contentText}>Setting 2</Text>
                <Switch  
                style={styles.switch}
                onTintColor='cyan'
                onValueChange={()=>{
                    
                    if(!(this.state.switch1 == this.state.switch2))
                    {
                        this.setState({switch1:!this.state.switch1})
                    }
                    this.setState({switch2:!this.state.switch2})
                    
                    
                    }}
                    value={this.state.switch2}
                />

                </View>
                <View style={styles.heading}>
                    <Text style={styles.headingText}>Notifications</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.contentText}>Account info</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.contentText}>Newsletter</Text>
                </View>
                <View style={styles.heading}>
                    <Text style={styles.headingText}>Brightness</Text>
                </View>
                <View style={styles.slidercontent}>
                    <Slider minimumValue={0} maximumValue={10000} style={styles.slider}></Slider>
                </View>



               
            </View>
        )
    }

}
const styles=StyleSheet.create({

    content:{

        height:50,
        borderBottomWidth: .5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
        
      },
      heading:{

          height:40,
          justifyContent: 'center',
          borderBottomWidth: .5,
        
      },
      contentText:{
         position:'absolute',
         top:10,
         left:10,
         fontSize:20,
        // marginTop: 20,
        // width:200,
        // backgroundColor:'red'
      },
      headingText:{

        marginLeft:15,
        fontSize:20,
        fontWeight: 'bold',
       
      },
      switch:{
        top:10,
        position:'absolute',
        right:10
        

          
        },
     slider:{
         width:300,
         marginLeft: 10,
     }   ,
     slidercontent:{
         marginTop:10,
         height:50,
        borderBottomWidth: .5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
     }


})