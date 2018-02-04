import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
                                 container: {
                                 flex: 1,
                                 padding: 12,
                                 flexDirection: 'row',
                                 alignItems: 'center',
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
                                 photo: {
                                 height: 50,
                                 width: 50,
                                 borderRadius: 20,
                                 },
                                 });

                             class CallsRow extends React.Component {
                             constructor() {
                             super();
                             this.state = {
                             //searchActive:false,
                             
                             };
                             
                             };
                             
                                 componentDidMount(){
                                     var url = "https://data.formatting70.hasura-app.io/v1/query";                                     var requestOptions = {
                                         "method": "POST",
                                         "headers": {
                                             "Content-Type": "application/json",
                                             "Authorization": "Bearer b6dd647d6ff670eec1f3edf7dd7766ac334d2eda274cc4d9"
                                         }
                                     };
                                     
                                     var Userbody = {
                                         "type": "select",
                                         "args": {
                                             "table": "UsersData",
                                             "columns": [
                                                         "userName"
                                                         ],
                                             "where": {
                                                 "userID": {
                                                     "$eq": this.props.userID
                                                 }
                                             }
                                         }
                                     };
                                     
                                     
                                     
                                     requestOptions.body = JSON.stringify(Userbody);
                                         
                                          fetch(url, requestOptions)
                                         .then((response) =>
                                                response.json()
                                               )
                                         .then((result)=> {
                                               console.log(result);
                                               console.log("i cahtsname"+result[0].userName);
                                               this.setState({
                                                             userName : result[0].userName,
                                                             }, function() {
                                                             // do something with new state
                                                             });
                                               })
                                         .catch(function(error) {
                                                console.log('Request Failed:' + error);
                                                });
                                     
                                     var Msgbody = {
                                         "type": "select",
                                         "args": {
                                             "table": "MsgData",
                                             "columns": [
                                                         "text",
                                                         "media",
                                                         "time"
                                                         ],
                                             "where": {
                                                 "msgID": {
                                                     "$eq": this.props.msgID
                                                 }
                                             }
                                         }
                                     };

                                     requestOptions.body = JSON.stringify(Msgbody);
                                     
                                      fetch(url, requestOptions)
                                     .then((response) =>
                                           response.json()
                                           )
                                     .then((result)=> {
                                           console.log(result);
                                           console.log("i cahts msg text and time"+result[0].text+result[0].time);
                                                    this.setState({
                                                         msgText : result[0].text,
                                                         msgTime : result[0].time,
                                                         }, function() {
                                                         // do something with new state
                                                         });
                                           })
                                     .catch(function(error) {
                                            console.log('Request Failed:' + error);
                                            });
                                     
                                     
                                 }
                             render () {
                                 var imageName;
                                 if(this.props.userID==1) {
                                     imageName = <Image source={require("../images/Profile.png")} style={styles.photo} />
                                 }
                                 else if(this.props.userID==2) {
                                     imageName = <Image source={require("../images/user4.png")} style={styles.photo} />
                                 }
                                 else if(this.props.userID==3) {
                                     imageName = <Image source={require("../images/user1.png")} style={styles.photo} />
                                 }
                                 else{
                                     imageName = <Image source={require("../images/user3.png")} style={styles.photo} />
                                     
                                 }
                                  return(
                                         
                                         <View style={styles.container}>
                                         
                                         
                                         <View>{imageName}</View>
                        
                                         <View>
                                            <View style={{flexDirection:"column", flex:1}}>
                                                <Text style={styles.userName}>
                                                            {this.state.userName}
                                                </Text>
                                                <Text style={styles.text}>
                                                        {this.state.msgText}</Text>
                                            </View>
                                         </View>
                                         <View style={{paddingLeft : 40}}>
                                            <Text style={styles.text}>
                                                {this.state.msgTime}</Text>
                                         </View>
                                        </View>
                        )
                             }
                             };


export default CallsRow;
