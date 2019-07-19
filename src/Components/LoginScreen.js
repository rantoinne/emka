import React from 'react';
import {
    View, Text, Dimensions, TouchableOpacity, StatusBar, Image, TextInput
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-community/async-storage';
import showToast from '../Constants/ShowToast';

const { width, height } = Dimensions.get('window');

class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            secureField: true,
            email: '',
            password: ''
        };
    }

    loginUser() {
        var request = {};
        request['Email'] = this.state.email;
        request['Password'] = this.state.password;

        console.log(request)
        fetch(`${apiUrl}/user/login`, {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Credentials': true,
                'Content-type': 'application/json'
            },
            body: JSON.stringify(request)
        })
        .then((res)=> res.json())
        .then((response)=> {
            if(response.message === "Logged In Successfully") {
                console.log('res',response.userData)
                this.storeTokenAndEmailLocally(response.userData);
                // this.props.navigation.navigate('LoginScreen');
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

    storeTokenAndEmailLocally = async (data) => {
        alert(JSON.stringify(data))
        try {
            await AsyncStorage.setItem('@userToken', data.token);
            await AsyncStorage.setItem('@userEmail', data.userEmail);
        }
        catch(error) {
            alert('Something went wrong');
        }
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


                <View style={{ width: width - 80, height: (height / 2) + 80, justifyContent: 'space-evenly', backgroundColor: '#f5f6fa', borderRadius: 8, zIndex: 1000, alignItems: 'center', position: 'absolute', top: height / 5 }}>
                    <Image source={require('../assets/Images/Ayanworks_logo.png')} resizeMode="contain" style={{ width: '75%' }} />


                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '90%', borderWidth: 1, borderColor: '#57606f', padding: 8, borderRadius: 4 }}>
                        <Entypo name="mail" color="#57606f" size={24} style={{ marginRight: 10 }} />
                        <TextInput
                            style={{ width: '100%', borderWidth: 0, padding: 4, fontFamily: 'Montserrat-Regular' }}
                            keyboardType='email-address'
                            onChangeText={(text)=> this.setState({ email: text })}
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
                            secureTextEntry= {this.state.secureField}
                            onChangeText={(text)=> this.setState({ password: text })}
                            placeholder="Password" />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: '100%', borderWidth: 0, }}>

                    <TouchableOpacity onPress={()=> this.loginUser()}>
                        <LinearGradient colors={['#666CDD', '#666CDD']} style= {{width: (width / 2) - 80, marginTop: 20, flexDirection: 'row', padding: 8, paddingVertical: 10, borderRadius: 4, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{ fontSize: 15, fontFamily: 'Montserrat-SemiBold', color: 'white',}}>Log In</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Register')}>
                        <LinearGradient colors={['#666CDD', '#666CDD']} style= {{width: (width / 2) - 80, marginTop: 20, flexDirection: 'row', padding: 8, paddingVertical: 10, borderRadius: 4, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{ fontSize: 15, fontFamily: 'Montserrat-SemiBold', color: 'white', }}>Register</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    </View>
                </View>
            </View>
        );
    }
}

export default LoginScreen;