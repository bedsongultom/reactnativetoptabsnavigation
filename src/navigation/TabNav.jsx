import React, {Component, Fragment} from 'react';
import { Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Home from "../screens/Home";
import Details from "../screens/Details";
import Profile from "../screens/Profile";
import Settings from '../screens/Settings';

const TabTop = createMaterialTopTabNavigator();

export default class TabNav extends Component{
    render(){
        return(
            <Fragment>
                <NavigationContainer>
                  
                    <TabTop.Navigator initialRouteName="Home"
                       
                        screenOptions={{
                                                                                
                            "tabBarActiveTintColor"   : "#FF6F00",
                            "tabBarInactiveTintColor" : "#FFF",
                            "tabBarLabelStyle": {  "paddingBottom": 10, "fontsize": 12 },
                            "tabBarStyle": [
                                {
                                "backgroundColor":'orange',
                                },
                            ]}}>
                            
                        <TabTop.Screen name="Home"      component={Home}/>
                        <TabTop.Screen name="Details"   component={Details}/>  
                        <TabTop.Screen name="Profile"   component={Profile}/>
                        <TabTop.Screen name="Settings"  component={Settings}/>
                    </TabTop.Navigator>
                </NavigationContainer>    
            </Fragment>
        )
    }
}