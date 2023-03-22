import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './Screen/main_screen/main_screen';
import Sub from './Screen/sub_screen/sub_screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden></StatusBar>
      <Stack.Navigator   
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Sub" component={Sub} />
      </Stack.Navigator>
    </NavigationContainer>  
  );
}


