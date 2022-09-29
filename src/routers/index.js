import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MoviesScreen from '../screens/MoviesScreen';
import DetailMovieScreen from '../screens/DetailMovieScreen';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();

const Routers = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MoviesScreen"
        component={MoviesScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailMovieScreen"
        component={DetailMovieScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routers;
