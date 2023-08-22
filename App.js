 
import { useEffect, useState } from 'react'
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import { SafeAreaView } from 'react-native-safe-area-context';
import Rules from './screens/Rules';
import { useFonts } from 'expo-font';
import Start from './screens/Start';
import Settings from './screens/Settings';
import { Audio } from 'expo-av'
import AppContext from './context/AppContext';
import Signin from './screens/Signin';
import Addquestion from './screens/Addquestion';
import { supabase } from './lib/supabase';
import Beginner from './screens/Beginner';
import Level from './screens/Level';
import Intermediate from './screens/Intermediate';
import IntermediateLevel from './screens/IntermediateLevel';
import Expert from './screens/Expert';
import ExpertLevel from './screens/ExpertLevel';

const Stack = createStackNavigator();

export default function App({navigation}) {
     
  return ( 
    <AppContext>
      <NavigationContainer> 
        <Stack.Navigator 
          initialRouteName='Home'
          detachInactiveScreens
          screenOptions={{
            headerShown: false, 
            
          }} 
        >
          <Stack.Screen name='Home' component={Home}  />
          <Stack.Screen name='Rules' component={Rules}  />
          <Stack.Screen name='Start' component={Start}  />
          <Stack.Screen name='Settings' component={Settings}  />
          <Stack.Screen name='Sign in' component={Signin}  />
          <Stack.Screen name='Addquestion' component={Addquestion}   />
          <Stack.Screen name='Beginner' component={Beginner}   />
          <Stack.Screen name='Level' component={Level}   />
          <Stack.Screen name='Intermediate' component={Intermediate}   />
          <Stack.Screen name='IntermediateLevel' component={IntermediateLevel}   />
          <Stack.Screen name='Expert' component={Expert}   />
          <Stack.Screen name='ExpertLevel' component={ExpertLevel}   />
        </Stack.Navigator> 
      </NavigationContainer> 
    </AppContext>
  );
} 








  // {
//   "build": {
//     "preview": {
//       "android": {
//         "buildType": "apk"
//       }
//     },
//     "preview2": {
//       "android": {
//         "gradleCommand": ":app:assembleRelease"
//       }
//     },
//     "preview3": {
//       "developmentClient": true
//     },
//     "production": {}
//   }
// }