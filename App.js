import SplashScreen from './src/Components/SplashScreen';
import ViewAllRequests from './src/Components/ViewAllRequests';
import WalletDashScreen from './src/Components/WalletDashScreen';
import Register from './src/Components/Register';
import RequestAccess from './src/Components/RequestAccess';
import LoginScreen from './src/Components/LoginScreen';
import CreateWallet from './src/Components/CreateWallet';
import { createStackNavigator, createAppContainer, } from 'react-navigation';


const AppContainer = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  Register: {
    screen: Register,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  WalletDashScreen: {
    screen: WalletDashScreen,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  CreateWallet: {
    screen: CreateWallet,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  RequestAccess: {
    screen: RequestAccess,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  ViewAllRequests: {
    screen: ViewAllRequests,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
});

export default createAppContainer(AppContainer);
