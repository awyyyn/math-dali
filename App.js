 
import { useEffect, useState } from 'react'
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home'; 
import Rules from './screens/Rules'; 
import Start from './screens/Start';
import Settings from './screens/Settings'; 
import AppContext from './context/AppContext';
import Signin from './screens/auth/Signin'; 
import Beginner from './screens/Beginner';
import Level from './screens/Level';
import Intermediate from './screens/Intermediate';
import IntermediateLevel from './screens/IntermediateLevel';
import Expert from './screens/Expert';
import ExpertLevel from './screens/ExpertLevel'; 
import Administrator from './screens/administrator/Administrator'; 
import SetScreen from './screens/administrator/SetScreen';
import Logout from './components/Logout';
import EditData from './screens/administrator/EditData';
import AddQuestion from './screens/administrator/AddQuestion'; 
import { Provider } from '@react-native-material/core';


const Stack = createStackNavigator();

export default function App({navigation}) {
  
  
  const nestedAdminScreen = {
    presentation: "modal",
    headerShown: true, 
  }

  return ( 
    <AppContext> 
      <Provider>
        <NavigationContainer> 

          <Stack.Navigator  
            initialRouteName='Home'
            // detachInactiveScreens
            screenOptions={{
              headerShown: false,  
            }} 
          > 

            <Stack.Screen name='Home' component={Home}  />
            <Stack.Screen name='Rules' component={Rules}  />
            <Stack.Screen name='Start' component={Start}  />
            <Stack.Screen name='Settings' component={Settings}  />
            {/* <Stack.Screen name='Addquestion' component={Addquestion}   /> */}
            <Stack.Screen name='Beginner' component={Beginner}   />
            <Stack.Screen name='Level' component={Level}   />
            <Stack.Screen name='Intermediate' component={Intermediate}   />
            <Stack.Screen name='IntermediateLevel' component={IntermediateLevel}   />
            <Stack.Screen name='Expert' component={Expert}   />
            <Stack.Screen name='ExpertLevel' component={ExpertLevel}   />
          

            <Stack.Screen name='Sign in' component={Signin}  />  


            <Stack.Screen 
              name='AddQuestion' 
              component={AddQuestion} 
              options={nestedAdminScreen} 
              
            />
            <Stack.Screen 
              name='SetScreen' 
              component={SetScreen}    
              options={{ headerShown: true }}
            />
            <Stack.Screen 
              name="Administrator" 
              component={Administrator} 
              options={{
                headerShown: true,
                headerRight: () => <Logout />,
                headerLeft: null
              }}
            />

            <Stack.Screen 
              name='EditData' 
              options={{
                presentation: "modal"
              }} 
              component={EditData}
            /> 
 
          </Stack.Navigator>   
        </NavigationContainer>  
      </Provider>
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