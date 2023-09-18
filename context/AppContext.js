import { View, Text } from 'react-native'
import { useEffect, useState, createContext } from 'react' 
import { Audio } from 'expo-av'
import { supabase } from '../lib/supabase'

export const SettingsContext = createContext()

export default function AppContext({children}) {

    const [sound, setSound] = useState()
    const [context, setContext] = useState();
    const [session, setSession] = useState({session: null});
    const [mute, setMute] = useState(false); 
    
    useEffect(() => { 
        async function getSession () {
            const { data } = await supabase.auth.getSession();
            setSession(data)
        } 
        playSound() 
        getSession() 

    }, [])
    
    async function logout () {
        await supabase.auth.signOut()
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
        <SettingsContext.Provider value={{playSound, session, logout, setSession, mute}}>
            {children}
        </SettingsContext.Provider>
    )
}