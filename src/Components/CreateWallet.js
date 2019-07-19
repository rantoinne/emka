import React, { Fragment } from 'react';
import {
    StyleSheet,
    ActivityIndicator,
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
import { TextInput } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

class CreateWallet extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: 'ravi@ayanworks.com',
            start: false
        };
    }

    createWallet() {
        this.setState({
            start: true
        });
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                <LinearGradient colors={['#43B0E8', '#666CDD']} start={{ x: 0.05, y: 0 }} end={{ x: 0, y: 1 }}
                    style={{ width, justifyContent: 'center', flexDirection: 'row', height: height / 6, borderBottomRightRadius: (width / 2) - 100, alignItems: 'center' }}>

                    <SimpleLineIcons name="wallet" size={width / 10} color="white" style={{ alignSelf: 'center', marginRight: 10 }} />

                    <Text style={{ fontSize: 18, fontFamily: 'Montserrat-SemiBold', color: 'white' }}>Create Wallet</Text>
                </LinearGradient>

                <AntDesign name="addfile" color="#666CDD" size={50} style={{ alignSelf: 'center', marginTop: 40 }} />

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 40, padding: 4 }}>
                    <FontAwesome5 name="user-tie" color="#43B0E8" size={24} style={{ marginRight: 10 }} />
                    <TextInput
                        style={{ width: '90%', borderWidth: 0, padding: 4, fontFamily: 'Montserrat-Regular' }}
                        underlineColorAndroid="#43B0E8"
                        keyboardType='email-address'
                        editable={false}
                        value={this.state.email}
                        onChangeText={text => this.lastName = text}
                        placeholder="First name"
                    />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 40, alignItems: 'center', padding: 4 }}>
                    <MaterialCommunityIcons name="rename-box" color="#43B0E8" size={24} style={{ marginRight: 10 }} />
                    <TextInput
                        style={{ width: '90%', borderWidth: 0, padding: 4, fontFamily: 'Montserrat-Regular' }}
                        underlineColorAndroid="#666CDD"
                        keyboardType='email-address'

                        onChangeText={text => this.lastName = text}
                        placeholder="First name"
                    />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 40, alignItems: 'center', padding: 4 }}>
                    <MaterialCommunityIcons name="rename-box" color="#43B0E8" size={24} style={{ marginRight: 10 }} />
                    <TextInput
                        style={{ width: '90%', borderWidth: 0, padding: 4, fontFamily: 'Montserrat-Regular' }}
                        underlineColorAndroid="#666CDD"
                        keyboardType='email-address'

                        onChangeText={text => this.lastName = text}
                        placeholder="Last Name"
                    />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: '90%', padding: 10, marginTop: 40 }}>

                    <TouchableOpacity onPress= {()=> this.createWallet()}>
                        <LinearGradient colors={['#666CDD', '#666CDD']} style={{ width: (width / 2) - 50, marginTop: 20, flexDirection: 'row', padding: 8, paddingVertical: 10, borderRadius: 4, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 15, fontFamily: 'Montserrat-SemiBold', color: 'white', }}>{this.state.start ? "Creating .." : "Create"}</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress= {()=> this.props.navigation.goBack()}>
                        <LinearGradient colors={['#fff', '#fff']} style={{ width: (width / 2) - 50, marginTop: 20, flexDirection: 'row', padding: 8, paddingVertical: 10, borderRadius: 4, borderWidth: 1, borderColor: "#666CDD", justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 15, fontFamily: 'Montserrat-SemiBold', color: '#666CDD', }}>Go Back</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                </View>

            </View>
        );
    }
};

const styles = StyleSheet.create({

});

export default CreateWallet;
