 

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs' 
import { SafeAreaView } from 'react-native-safe-area-context'; 
import { Text  } from 'react-native-elements';
import Beginner from './Beginner';
import Intermediate from './Intermediate';
import Expert from './Expert';


const Tab = createMaterialTopTabNavigator();


export default function Administrator() {

    return (   
        <>  
            <Tab.Navigator initialRouteName='Beginner'  >
                {/* <Tab.Screen name='Dashboard' component={Dashboard} /> */}
                <Tab.Screen name='Beginner' component={Beginner} />
                <Tab.Screen name='Intermediate' component={Intermediate} />
                <Tab.Screen name='Expert' component={Expert} />
            </Tab.Navigator>   
        </>
    )
}