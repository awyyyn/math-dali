import { View, Text } from 'react-native'
import { useEffect, useState, createContext } from 'react' 
import { Audio } from 'expo-av'
import { supabase } from '../lib/supabase'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const SettingsContext = createContext()

export default function AppContext({children}) {

    const [sound, setSound] = useState()
    const [context, setContext] = useState();
    const [session, setSession] = useState({session: null});
    const [schoolInfo, setSchoolInfo] = useState({
        role: '',
        schoolId: '',
        schoolName: '' 
    })
    const [mute, setMute] = useState(false); 
    
    console.log("================================== SC")
    console.log(schoolInfo)
    console.log("================================== SC")

    useEffect(() => { 
        async function getSession () {
            const { data } = await supabase.auth.getSession();
            // await AsyncStorage.multiSet([['role', `${adminData?.role}`], ['schoolId', `${adminData?.school_id}`], ['schoolName', `${adminData?.school_name}`]] )
            setSession(data)
        } 
        // playSound() 
        getSession() 

    }, [])
    
    async function logout () {
        await supabase.auth.signOut()
        const aaaa = await AsyncStorage.multiRemove(['schoolId', 'schoolName', 'role'])
        console.log(aaaa)
        setSession({session: null}) 
    }

    async function playSound (value) {

        console.log(value)
        const { sound } = await Audio.Sound.createAsync(require('../assets/sound/steam-cafe.mp3')) 
        setSound(sound) 


        if(value){ 
            setMute(true)
            await sound.setIsMutedAsync(true) 
            await sound.pauseAsync() 
        }else{
            setMute(false)
            await sound.setIsMutedAsync(false)
            await sound.setIsLoopingAsync(true) 
            await sound.playAsync()
        }
    }
   
    
    useEffect(() => {
        
        return sound
          ? () => {
              console.log('Unloading Sound');
              sound.unloadAsync();
            }
          : undefined;

      }, [sound])
      
     

    return (
        <SettingsContext.Provider value={{playSound, session, logout, setSession, mute, schoolInfo, setSchoolInfo}}>
            {children}
        </SettingsContext.Provider>
    )
}