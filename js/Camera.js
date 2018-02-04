import React from 'react';
import { StyleSheet, Text, View, Image, AppRegistry, Alert } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Camera from 'react-native-camera';

export default class CameraFeature extends React.Component {
static navigationOptions={
tabBarIcon: ({tintColor})=>{
    return  <FontAwesome name="camera" color='white' style={{fontSize: 20}}/>;
    
    
},
    tabBarLabel : () => {},
tabBarOptions:{
    showIcon : true,
    showLabel :false,
}
}
    render() {
        return (
                <View style={styles.container}>
                <Camera
                ref={(cam) => {
                this.camera = cam;
                }}
                style={styles.preview}
                onBarCodeRead={this.onBarCodeRead.bind(this)}
                aspect={Camera.constants.Aspect.fill}>
                <View style={styles.capture}>
                    <FontAwesome name="circle-o" color='white' style={{fontSize: 70}} onPress={this.takePicture.bind(this)}/>
                <Text style={{color:'white'}}>Tap for photo</Text>
                </View>
                </Camera>
                </View>
                );
    }
    takePicture() {
        const options = {};
        this.camera.capture({metadata: options})
        .then((data) => {
              console.log(data);
              // Works on both iOS and Android
              Alert.alert(
                          'Image Saved to '+data.path
                          )

              })
        .catch(err => console.error(err));
        }
    onBarCodeRead(e) {
        console.log(
                    "Barcode Found!",
                    "Type: " + e.type + "\nData: " + e.data
                    );
    }

}

const styles = StyleSheet.create({
                                 container: {
                                 flex: 1,
                                 backgroundColor: '#fff',
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 },
                                 image: {
                                                                height: 100,
                                                                borderRadius: 50,
                                                                width: 100
                                                                },
                                 
                                 preview: {
                                 flex: 1,
                                 alignSelf: 'stretch',
                                 width: '100%',
                                 height: '100%',
                                 justifyContent: 'flex-end',
                                 alignItems: 'center'
                                 },
                                 capture: {
                                 flex: 0,
                                 borderRadius: 5,
                                 padding: 10,
                                 margin: 40
                                 }
                                 });


