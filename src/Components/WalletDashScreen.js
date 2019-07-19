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

const { width, height } = Dimensions.get('window');

class WalletDashScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: 'ravi@ayanworks.com',
            walletCreated: false,
            walletDID: 'ds56s5dcasac8r7Zzc878c4'
        };
    }

    render() {

        if (this.state.walletCreated) {
            return (
                <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <LinearGradient colors={['#43B0E8', '#666CDD']} start={{ x: 0.05, y: 0 }} end={{ x: 0, y: 1 }}
                        style={{ width, justifyContent: 'center', flexDirection: 'row', height: height / 6, borderBottomRightRadius: width / 2, alignItems: 'center' }}>

                        <SimpleLineIcons name="wallet" size={width / 10} color="white" style={{ alignSelf: 'center', marginRight: 10 }} />

                        <Text style={{ fontSize: 18, fontFamily: 'Montserrat-SemiBold', color: 'white' }}>Wallet Status</Text>
                    </LinearGradient>

                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: height / 10 }}>
                        <AntDesign name="exclamationcircleo" size={width / 6} color='#666CDD' />
                        <Text style={{ fontSize: 17, fontFamily: 'Montserrat-Regular', marginTop: height / 14 }}>
                            Wallet for user Email :
                    </Text>
                        <Text style={{ fontSize: 15, fontFamily: 'Montserrat-SemiBold', color: 'black', marginTop: 5 }}>
                            {this.state.email}
                        </Text>
                        <Text style={{ fontSize: 15, fontFamily: 'Montserrat-Regular', marginTop: 10 }}>
                            hasn't been created yet.
                    </Text>

                        <TouchableOpacity onPress= {() => this.props.navigation.navigate('CreateWallet')}>
                            <LinearGradient colors={['#666CDD', '#666CDD']} style={{ width: width - 180, marginTop: 20, flexDirection: 'row', padding: 8, paddingVertical: 12, justifyContent: 'center', alignItems: 'center' }}>
                                <Entypo name="wallet" color="white" size={24} />
                                <Text style={{ fontSize: 15, fontFamily: 'Montserrat-SemiBold', color: 'white', marginLeft: 10 }}>Create Wallet</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

                    <View style={{ width, height: (height / 14), justifyContent: 'center', alignItems: 'center', flexDirection: 'row', position: 'absolute', bottom: 0, backgroundColor: '#43B0E840' }}>
                        <AntDesign name="logout" color="#666CDD" size={28} />
                    </View>
                </View>
            );
        }

        else {
            return (
                <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <LinearGradient colors={['#43B0E8', '#666CDD']} start={{ x: 0.05, y: 0 }} end={{ x: 0, y: 1 }}
                        style={{ width, justifyContent: 'center', flexDirection: 'row', height: height / 6, borderBottomRightRadius: (width / 2) - 100, alignItems: 'center' }}>

                        <SimpleLineIcons name="wallet" size={width / 10} color="white" style={{ alignSelf: 'center', marginRight: 10 }} />

                        <Text style={{ fontSize: 18, fontFamily: 'Montserrat-SemiBold', color: 'white' }}>Wallet Status</Text>
                    </LinearGradient>

                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: height / 10 }}>
                        <AntDesign name="checkcircle" size={width / 6} color='green' />
                        <Text style={{ fontSize: 17, fontFamily: 'Montserrat-Regular', marginTop: height / 14 }}>
                            Wallet created for Email :
                    </Text>
                        <Text style={{ fontSize: 15, fontFamily: 'Montserrat-SemiBold', color: 'black', marginTop: 5 }}>
                            {this.state.email}.
                        </Text>
                        <Text style={{ fontSize: 15, fontFamily: 'Montserrat-Regular', marginTop: 10 }}>
                            Your UserDID is :
                    </Text>
                    <Text style={{ fontSize: 18, fontFamily: 'Montserrat-SemiBold', color: 'black', marginTop: 10 }}>
                        {this.state.walletDID}
                    </Text>

                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('RequestAccess')}>
                            <LinearGradient colors={['#43B0E8', '#43B0E8']} style={{ width: width - 200, marginTop: 20, borderRadius: 4, flexDirection: 'row', padding: 8, paddingVertical: 12, justifyContent: 'center', alignItems: 'center' }}>
                                <Entypo name="plus" color="white" size={24} />
                                <Text style={{ fontSize: 15, fontFamily: 'Montserrat-SemiBold', color: 'white', marginLeft: 10 }}>Request Access</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <LinearGradient colors={['#666CDD', '#666CDD']} style={{ width: width - 200, borderRadius: 4, marginTop: 20, flexDirection: 'row', padding: 8, paddingVertical: 12, justifyContent: 'center', alignItems: 'center' }}>
                                <Entypo name="documents" color="white" size={24} />
                                <Text style={{ fontSize: 15, fontFamily: 'Montserrat-SemiBold', color: 'white', marginLeft: 10 }}>View Access</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

                    <View style={{ width, height: (height / 14), justifyContent: 'center', alignItems: 'center', flexDirection: 'row', position: 'absolute', bottom: 0, backgroundColor: '#43B0E840' }}>
                        <AntDesign name="logout" color="#666CDD" size={28} />
                    </View>
                </View>
            );
        }
    }
};

const styles = StyleSheet.create({

});

export default WalletDashScreen;
