import React from 'react';
import {
    View, Text, Dimensions, TouchableOpacity, StatusBar, Image, TextInput, BackHandler
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import apiUrl from '../Constants/Api';
import showToast from '../Constants/ShowToast';
import AsyncStorage from '@react-native-community/async-storage';

const sha256 = require('js-sha256');

const { width, height } = Dimensions.get('window');

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            secureField: true,
            firstName: '',
            lastName: '',
            password: '',
            email: ''
        };
    }

    registerNewUser() {
        var request = {};
        request['firstName'] = this.state.firstName;
        request['lastName'] = this.state.lastName;
        request['Email'] = this.state.email;
        request['Password'] = this.state.password;
        request['WalletStatusType'] = "1";

        fetch(`${apiUrl}/user/registration`, {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Credentials': true,
                'Content-type': 'application/json'
            },
            body: JSON.stringify(request)
        })
        .then((res)=> res.json())
        .then((response)=> {
            if(response.message === "Registration Completed Sucessfully...") {
                console.log('res',response)
                this.props.navigation.navigate('LoginScreen');
            }
            else {
                console.log('res',response)
                showToast(response.error)
            }
            
        })
        .catch((error)=> {
            console.log('res',error)
            showToast('Network Request Failed due to server error')
        })
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
            this.props.navigation.goBack();
        });
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', () => {
            return true;
        });
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                <StatusBar
                    translucent
                    backgroundColor="#3742fa"
                    barStyle='light-content'
                />
                <LinearGradient colors={['#43B0E8', '#3742fa']} start={{ x: -0.2, y: 0 }} end={{ x: 1, y: 0 }} style={{ width, height: (height / 2) - 60 }}></LinearGradient>
                <View style={{ width, backgroundColor: "#30336b", height: height - ((height / 2) - 60) }} />

                <View style={{ width: width - 80, height: (height / 2) + (height / 5), justifyContent: 'space-evenly', backgroundColor: '#f5f6fa', borderRadius: 8, zIndex: 1000, alignItems: 'center', position: 'absolute', top: height / 6 }}>
                    <Image source={require('../assets/Images/Ayanworks_logo.png')} resizeMode="contain" style={{ width: '75%' }} />


                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '90%', borderWidth: 1, borderColor: '#57606f', padding: 8, borderRadius: 4 }}>
                        <FontAwesome5 name="user-tie" color="#57606f" size={24} style={{ marginRight: 10 }} />
                        <TextInput
                            style={{ width: '100%', borderWidth: 0, padding: 4, fontFamily: 'Montserrat-Regular' }}
                            keyboardType='email-address'
                            onChangeText={text => this.setState({ firstName: text })}
                            placeholder="First name" />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '90%', borderWidth: 1, borderColor: '#57606f', padding: 8, borderRadius: 4 }}>
                        <FontAwesome5 name="user-tie" color="#57606f" size={24} style={{ marginRight: 10 }} />
                        <TextInput
                            style={{ width: '100%', borderWidth: 0, padding: 4, fontFamily: 'Montserrat-Regular' }}
                            keyboardType='email-address'
                            onChangeText={text => this.setState({ lastName: text })}
                            placeholder="Last name" />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '90%', borderWidth: 1, borderColor: '#57606f', padding: 8, borderRadius: 4 }}>
                        <Entypo name="mail" color="#57606f" size={24} style={{ marginRight: 10 }} />
                        <TextInput
                            style={{ width: '100%', borderWidth: 0, padding: 4, fontFamily: 'Montserrat-Regular' }}
                            keyboardType='email-address'
                            onChangeText={text => this.setState({ email: text })}
                            placeholder="User Email" />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '90%', borderWidth: 1, borderColor: '#57606f', padding: 8, borderRadius: 4 }}>
                        {
                            this.state.secureField ?
                                <Entypo name="eye" color="#57606f" onPress={() => this.setState({ secureField: false })} size={24} style={{ marginRight: 10 }} /> :
                                <Entypo name="eye-with-line" color="#57606f" size={24} onPress={() => this.setState({ secureField: true })} style={{ marginRight: 10 }} />
                        }
                        <TextInput
                            style={{ width: '100%', borderWidth: 0, padding: 4, fontFamily: 'Montserrat-Regular' }}
                            secureTextEntry={this.state.secureField}
                            onChangeText={text => this.setState({ password: text })}
                            placeholder="Password" />
                    </View>


                        <TouchableOpacity onPress={()=> this.registerNewUser()}>
                            <LinearGradient colors={['#666CDD', '#666CDD']} style={{ width: (width / 2), marginTop: 20, flexDirection: 'row', padding: 8, paddingVertical: 10, borderRadius: 4, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 15, fontFamily: 'Montserrat-SemiBold', color: 'white', }}>Create Account</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    
                    <TouchableOpacity onPress= {()=> this.props.navigation.navigate('LoginScreen')}>
                    <Text style= {{fontFamily: 'Montserrat-SemiBold', fontSize: 12, color: '#666CDD'}}>Already have an account? Login here</Text>    
                    </TouchableOpacity>
                    
                </View>
            </View>
        );
    }
}

export default Register;