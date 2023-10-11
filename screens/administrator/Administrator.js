 

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs' 
import { SafeAreaView } from 'react-native-safe-area-context'; 
import { Text  } from 'react-native-elements';
import Beginner from './Beginner';
import Intermediate from './Intermediate';
import Expert from './Expert';
import { useEffect, useState } from 'react';
import { BackHandler } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainAdmin from './MainAdmin';
import EditAdmin from './EditAdmin';


const Tab = createMaterialTopTabNavigator();
 
export default function Administrator() {

    const [role, setRole] = useState(null)



    const navigation = useNavigation()

    useEffect(() => { 

        (async () => {
            const storedRole = await AsyncStorage.getItem('role') 
            setRole(storedRole)
        })()

        const backAction = () => { 
            navigation.dispatch(StackActions.popToTop());
            return true;  
        }; 
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
        
        return () => { 
            backHandler.remove()
        }

    }, [])


    const adminOptions = {
        tabBarShowLabel: false,
        tabBarStyle: {
            display: 'none'
        }
    }

    return (   
        <>  
            <Tab.Navigator 
                
            >
                {/* <Tab.Screen name='Dashboard' component={Dashboard} /> */}
                {role == "sub_admin" ? 
                    <>
                        <Tab.Screen name='Beginner' component={Beginner} />
                        <Tab.Screen name='Intermediate' component={Intermediate} />
                        <Tab.Screen name='Expert' component={Expert} />
                    </>
                :
                    <>
                        <Tab.Screen name='subAdmin' component={MainAdmin} 
                            options={adminOptions}
                        /> 
                    </>
                }
            </Tab.Navigator>   
        </>
    )
}