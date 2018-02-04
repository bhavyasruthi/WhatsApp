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
import ChatsRow from './ChatsRow';

export default class Chats extends Component {
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
                "table": "ChatsData",
                "columns": [
                            "*"
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
              console.log("an"+result[0].chatID);
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
                //renderRow={(rowData) => <Text>{rowData.chatID}</Text>}
                renderRow={(data) => <ChatsRow {...data} />}
                renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                />
                </View>
                );
    }
}


