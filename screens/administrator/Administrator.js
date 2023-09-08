 

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs' 
import { SafeAreaView } from 'react-native-safe-area-context'; 
import { Text  } from 'react-native-elements';
import Beginner from './Beginner';
import Intermediate from './Intermediate';
import Expert from './Expert';
import { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';


const Tab = createMaterialTopTabNavigator();


export default function Administrator() {

    const navigation = useNavigation()

    useEffect(() => {
        

        const backAction = () => { 
            navigation.dispatch(StackActions.popToTop());
            return true;  
        };

        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
        
        return () => { 
            backHandler.remove()
        }
    }, [])

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