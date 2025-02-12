import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import TrackPrayerScreen from './screens/TrackPrayerScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    // define all screens of app
    <NavigationContainer>
      {/* default screen is login */}
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="TrackPrayerScreen" component={TrackPrayerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


// tests folder is to write test cases
// jest.config.js used for jest testing
// Gemfile used for ios dependencies
