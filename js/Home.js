import React from "react";
import { Platform, Text, View, Button } from "react-native";
import { Root,Header } from "native-base";
import { StackNavigator, TabNavigator } from "react-navigation";

import Profile from "./Profile";
import SearchWindow from "./SearchWindow";
import Calls from "./Calls";
import Chats from "./Chats";
import Status from "./Status";
import Camera from "./Camera";
import {Icon} from 'native-base';
import TabBarComponent from './TabBarComponent';
import AppHeader from './AppHeader';

const HomeTabNavigator = TabNavigator(
                                    {
                                      Camera : {
                                                screen : Camera,
                                                navigationOptions: {
                                                    tabBarOptions:{
                                                        showIcon : true,
                                                        showLabel : false,
                                                    },
                                                },
                                                },
                                      Chats : {screen : Chats,
                                                navigationOptions:{
                                                    tabBarOptions:{
                                                        showIcon : false,
                                                    },
                                                },
                                                },
                                      Status : {screen : Status},
                                      Calls : {screen : Calls},
                                    },
                                    {
                                 /*   tabBarComponent: props => (
                                                                 
                                                                 <TabBarComponent{...props}
                                                                 
                                                                 />),*/
                                    tabBarPosition: "Top",
                                    swipeEnabled: true,
                                    tabBarOptions : {
                                      showIcon : true,
                                      indicatorStyle: {
                                      backgroundColor: 'white',
                                      },
                                      style:{
                                      borderTopWidth: 0,
                                      elevation: 8,
                                      backgroundColor: '#075E54',
                                      },
                                      activeTintColor : 'white',
                                      animationEnabled: true,
                                      /*showLabel : false,
                                      showIcon : true,
                                      tabBarIcon: {tintColor : '#00aced'},*/
                                    },
                                      
                                    }
                                    );

const MyAppNavigator = StackNavigator({
                                      HomeStack: { screen: HomeTabNavigator,
                                                    navigationOptions: {
                                                        headerTitle : 'WhatsApp',
                                                        headerTitleStyle : {
                                                            color : 'white',
                                                        },
                                                        headerStyle :{
                                                            backgroundColor : '#075E54',
                                                            elevation:null
                                                        },
                                                        headerRight: <AppHeader/>
                                                    }
                                      },
                                      SearchWindow :{ screen: SearchWindow },
                                      }
                                      );
export default MyAppNavigator;
