import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnBoarding} from './container/Onboarding';
import HomePage from './container/HomePage';
import SingleDogScreen from './container/SingleDogScreen';

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Onboarding" component={OnBoarding} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="SingleDogScreen" component={SingleDogScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
