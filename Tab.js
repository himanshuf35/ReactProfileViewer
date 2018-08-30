import React, {Component} from 'react';
import {View} from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import {CardViewer} from './cardviewer'
import {Profile} from './Profile'
import {SignIn} from './Signin'
import {Settings}from './settings'
import Icon from 'react-native-vector-icons/FontAwesome';

export class Tabar extends Component{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return( 
            
            <TabBars/>
            
        )
    }
}

export const TabBars=createBottomTabNavigator({
    Profile:{
        screen:Profile,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="adn"
                    color={tintColor}
                    size={24}
                />
            )
        })
    },
    ProfileList:{
        screen:CardViewer,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="adn"
                    color={tintColor}
                    size={24}
                />
            )
        })
    },
    Settings:{
        screen:Settings,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="adn"
                    color={tintColor}
                    size={24}
                />
            )
        })
    }
})