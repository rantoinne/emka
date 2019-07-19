import React, { Fragment } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    ActivityIndicator,
    Text,
    StatusBar,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';


class SplashScreen extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('WalletDashScreen')
        }, 2000);
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
