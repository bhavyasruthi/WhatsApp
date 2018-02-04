import React, { Component } from 'react';
import {
    Text,Image,StyleSheet, View, Platform, StatusBar
} from 'react-native';
import {Header,Left,Button,Icon,Right,Body,Title,Container} from 'native-base';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';

const AppHeader = (props) => {
    const {navigation} = props;
    return (
            <View style={{flex:1, backgroundColor: '#075E54',flexDirection: 'row', paddingTop:10}}>
            <Button style={{backgroundColor: '#075E54', paddingRight : 15}}><Feather name="search" color='white' style={{fontSize: 20}}/></Button>
            <Button style={{ backgroundColor: '#075E54'}}><SimpleLineIcons name="options-vertical" color='white' style={{fontSize: 20}}/></Button>
            </View>
                );
    }


var styles = StyleSheet.create({
                               image: {
                               height: 35,
                               borderRadius: 50,
                               width: 40
                               },
                               title:{
                               fontWeight : 'bold',
                               fontSize :20,
                               color : 'black',
                               paddingTop:9,
                               paddingBottom :  3
                               },
                               AppHeader:{
                               backgroundColor : 'red'
                               }
                               });

export default AppHeader;
/*
 <View style={{paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}}>
 <Header hasTabs style={{backgroundColor:'white',elevation: 0}}>
 <Left >
 
 <Image style={styles.image} source={require('../images/ProfilePic.png' )}/>                   </Left>
 <Body >
 <Text style={styles.title}>Home</Text>
 <Title color='red' >Home</Title>
 </Body>
 <Right/>
 </Header>
 </View>*/
