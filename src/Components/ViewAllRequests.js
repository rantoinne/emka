import React from 'react';
import {
    StyleSheet,
    ActivityIndicator,
    TextInput,
    Text,
    Dimensions,
    View,
    TouchableOpacity
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import apiUrl from '../Constants/Api';

const { width, height } = Dimensions.get('window');

class ViewAllRequests extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            start: false,
            walletName: '',
            walletPassword: ''
        };
    }

    createWallet() {
  
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
              <LinearGradient colors={['#43B0E8', '#666CDD']} start={{ x: 0.05, y: 0 }} end={{ x: 0, y: 1 }}
                  style={{ width, justifyContent: 'center', flexDirection: 'row', height: height / 6, borderBottomRightRadius: (width / 2) - 100, alignItems: 'center' }}>

                  <Entypo name="documents" size={width / 10} color="white" style={{ alignSelf: 'center', marginRight: 10 }} />

                  <Text style={{ fontSize: 18, fontFamily: 'Montserrat-SemiBold', color: 'white' }}>View Access</Text>
              </LinearGradient>

              <View style={{width, padding: 8, flexDirection: 'row', }}>

              </View>

            </View>
        );
    }
};

const styles = StyleSheet.create({

});

export default ViewAllRequests;
