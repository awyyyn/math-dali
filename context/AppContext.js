import { View, Text } from 'react-native'
import { useEffect, useState, createContext } from 'react' 
import { Audio } from 'expo-av'
import { supabase } from '../lib/supabase'

export const SettingsContext = createContext()

export default function AppContext({children}) {

    const [sound, setSound] = useState()
    const [context, setContext] = useState();
    const [session, setSession] = useState({session: null})

    useEffect(() => { 
        async function getSession () {
            const { data } = await supabase.auth.getSession();
            setSession(data)
        } 
        getSession() 

    }, [])
    
    async function logout () {
        await supabase.auth.signOut()
        setSession({session: null}) 
    }

    async function playSound (value) {
        console.log(value)
        const { sound } = await Audio.Sound.createAsync(require('../assets/sound/siniskwela.mp3')) 
        setSound(sound)
        if(value){
            await sound.pauseAsync()
        }else{
            await sound.playAsync()
        }
    }
  
    useEffect(() => {
        playSound() 
    }, []);
    
    useEffect(() => {
        
        return sound
          ? () => {
              console.log('Unloading Sound');
              sound.unloadAsync();
            }
          : undefined;
      }, [sound])
      
    

    console.log("SESSUIB IN ROOT", session)

    return (
        <SettingsContext.Provider value={{playSound, session, logout, setSession}}>
            {children}
        </SettingsContext.Provider>
    )
}