/*import React from 'react';
import { StyleSheet, Text, WebView } from 'react-native';
import {Icon} from 'react-native-elements';
import {Container} from 'native-base';

import AppFooter from './AppFooter';


export default class Calls extends React.Component {
    static navigationOptions = {
        title : 'Calls',
    tabBarText: ({tintColor})=>{
        return <Text color={tintColor}>Calls</Text>;
        
        }
    }
    render() {
        return (
                <Container>
                <Text> Calls </Text>
                </Container>
                );
    }
}
*/
const styles = StyleSheet.create({
                                 container: {
                                 flex: 1,
                                 backgroundColor: '#fff',
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 },
                                 separator: {
                                 flex: 1,
                                 height: StyleSheet.hairlineWidth,
                                 backgroundColor: '#8E8E8E',
                                 },
                                 });
import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, ListView, Text, View } from 'react-native';
import CallsRow from './CallsRow';

export default class Calls extends Component {
    constructor(props) {
        super(props);
        this.state = {
        isLoading: true
        }
    }
    componentDidMount() {
         var url = "https://data.formatting70.hasura-app.io/v1/query";
        
        var requestOptions = {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": "Bearer b6dd647d6ff670eec1f3edf7dd7766ac334d2eda274cc4d9"
            }
        };
        
        var body = {
            "type": "select",
            "args": {
                "table": "CallsData",
                "columns": [
                            "callID",
                            "userID",
                            "duration",
                            "status",
                            "Date"
                            ]
            }
        };
        
        requestOptions.body = JSON.stringify(body);
        
        return fetch(url, requestOptions)
        .then((response) =>
               response.json()
              )
        .then((result) =>{
              console.log(result);
              console.log("an"+result[0].callID);
              let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
              this.setState({
                            isLoading: false,
                            dataSource: ds.cloneWithRows(result),
                            }, function() {
                            // do something with new state
                            });
              })
        .catch(function(error) {
               console.log('Request Failed:' + error);
               });
    }
    
    render() {
        if (this.state.isLoading) {
            return (
                    <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator />
                    </View>
                    );
        }
        
        return (
                <View style={{flex: 1, paddingTop: 20}}>
                <ListView
                dataSource={this.state.dataSource}
                //renderRow={(rowData) => <Text>{rowData.callID}</Text>}
                renderRow={(data) => <CallsRow {...data} />}
                renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                />
                </View>
                );
    }
}


