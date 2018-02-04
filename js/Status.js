import React from 'react';
import { StyleSheet, Text, View,WebView ,Image,Linking, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import {Container} from 'native-base';

export default class Status extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    
    static navigationOptions = {
        title : 'Status',
            }
    render() {
        return (
                <View>
                
                    <Image source={require("../images/status.png")} style={styles.status} />
                    <View style={{flexDirection:"row", flex:1}} >
                     <Image source={require("../images/Profile.png")} style={styles.photo} />
                
                            <Text>" " </Text>
                            <View style={{flexDirection:"column", flex:1}}>
                            <Text style={styles.userName}>
                                My status
                            </Text>
                            <Text style={styles.text}>
                            tap to add status update</Text>
                            </View>
                
                    </View>
                </View>
                );
    }
}

const styles = StyleSheet.create({
                                 container: {
                                 flex: 1,
                                 padding: 12,
                                 flexDirection: 'row',
                                 alignItems: 'center',
                                 },
                                 photo: {
                                 height: 50,
                                 width: 50,
                                 borderRadius: 20,
                                 },
                                 status: {
                                 height: 250,
                                 width: 406,
                                 },
                                 text: {
                                 marginLeft: 12,
                                 fontSize: 13,
                                 },
                                 userName: {
                                 marginLeft: 12,
                                 fontSize: 17,
                                 color :'black',
                                 fontWeight : "bold",
                                 },
                                 });
