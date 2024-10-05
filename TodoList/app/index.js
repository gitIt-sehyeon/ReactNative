import { View, Text, SafeAreaView } from "react-native";
import MainScreen from "../screens/MainScreen";
import { Provider } from "react-redux";
import store from '../redux/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function Index() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <MainScreen />
        </SafeAreaView>
      </Provider>
    </GestureHandlerRootView>
  );
}
