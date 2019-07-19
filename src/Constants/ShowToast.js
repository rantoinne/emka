import Toast from 'react-native-root-toast';

const showToast = (message) => {
    return Toast.show(message, {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        animation: true
    });
};

export default showToast;