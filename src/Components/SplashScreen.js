import React, { Fragment } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    ActivityIndicator,
    Text,
    StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';

class SplashScreen extends React.Component {

    async componentDidMount() {
        try {
            var value = await AsyncStorage.getItem('@userToken')
            if(value !== null) {
                setTimeout(() => {
                    this.props.navigation.navigate('WalletDashScreen');
                }, 1500);
            }
            else {
                setTimeout(() => {
                    this.props.navigation.navigate('LoginScreen')
                }, 1500);
            }
        }
        catch(error) {
            setTimeout(() => {
                this.props.navigation.navigate('LoginScreen')
            }, 2000);
        }
    }

    render() {

        return (
            <LinearGradient colors={['#43B0E8', '#666CDD']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <StatusBar
                    translucent
                    backgroundColor="#43B0E8"
                    barStyle='dark-content'
                />
                <ActivityIndicator color="white" size={50} />
                <Text style={{ fontSize: 18, fontFamily: 'Montserrat-Regular', marginTop: 20, color: 'white' }}>Loading ..</Text>
            </LinearGradient>
        );
    }
};

const styles = StyleSheet.create({

});

export default SplashScreen;
