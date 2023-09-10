import { Button, Text } from 'react-native-elements'
import React, { useEffect, useState } from 'react'
import { RefreshControl, ScrollView } from 'react-native-gesture-handler'
import { BackHandler, Dimensions, ImageBackground, TouchableOpacity, TouchableOpacityComponent, View } from 'react-native'
import SetButton from './components/SetButton'
import { FAB } from 'react-native-elements';
import Icon, { FA5Style } from 'react-native-vector-icons/FontAwesome5'
import { Dialog, DialogActions, DialogContent, DialogHeader, Portal, PortalContext, PortalProvider, Snackbar, Stack } from '@react-native-material/core'
import { supabase } from '../../lib/supabase'
import { DialogBase } from '@rneui/base/dist/Dialog/Dialog'
import { DialogTitle } from '@rneui/base/dist/Dialog/Dialog.Title'
import { Skeleton } from '@rneui/themed'
import { useContext } from 'react'
import { SettingsContext } from '../../context/AppContext';
import { numOfSets } from '../../lib/helpers';


export default function Expert({navigation}) {
      
    
    const { session } = useContext(SettingsContext)
    const [sets, setSets] = useState([]);
    const [addDialog, setAddDialog] = useState(false);
    const [adding, setAdding] = useState(false)
    const [loading, setLoading] = useState(false)
    const [lastSet, setLastSet] = useState(0);
    const [snackBarMessage, setSnackBarMessage] = useState('') 
    const [refresh, setRefresh] = useState(false)

    async function getSets () {
        setLoading(true)
        const { data, error } = await supabase.from('category').select().eq('category', "Expert")
        if(error){
            alert(error.message)
            setLoading(false)
            return 
        }
        setLastSet(data.length + 1)
        setSets(data.sort((a, b) => a.id - b.id))
        setLoading(false)
    }
 
        
 
    useEffect(() => {
        getSets()

        const subscription = supabase.channel('any')
            .on('postgres_changes', { event: "INSERT", schema: 'public', table: 'category'}, (payload => getSets()))
            .subscribe()

        return () => {
            subscription.unsubscribe()    
        }

    }, [])
 
    const handleClick = (path, value) => {
        navigation.navigate('SetScreen', {
            setNumber: path,
            value: value,
            isTrue: true,
            category: 'Expert',
            snackBar: "",
            q: ""
        })
    }
 
    
    return (
        <>
            <ImageBackground 
                source={require('../../assets/bg.jpg')} 
                imageStyle={{opacity: 0.1, height: Dimensions.get('screen').height}}
            >
                {snackBarMessage &&
                    <Snackbar
                        message={snackBarMessage}
                        style={{    
                            backgroundColor: "#004E64",
                            start: 80,
                            end: 16,
                            top: 10, 
                            zIndex: 99,
                            position: 'absolute'
                        }}

                        elevation={24}
                    />
                }
                <ScrollView 
                    contentContainerStyle={{
                        paddingHorizontal: 20,
                        paddingVertical: 15, 
                        minHeight: Dimensions.get('screen').height - 180
                    }}
                    refreshControl={
                        <RefreshControl 
                            refreshing={refresh}
                            onRefresh={async() => {
                                setRefresh(true)
                                const { data, error } = await supabase.from('category').select().eq('category', "Expert")
                                if(error){
                                    alert(error.message)
                                    setRefresh(false)
                                    return 
                                }
                                setLastSet(data.length + 1)
                                setSets(data)
                                setRefresh(false)
                            }}
                        />
                    }
                >  
                    <Text h1>Expert</Text> 

                    <View style={{marginVertical: 15, display: 'flex', gap: 20}}>
                        {loading ? 
                            <Stack spacing={10}>
                                <Skeleton height={42} />
                                <Skeleton height={42} />
                                <Skeleton height={42} />
                                <Skeleton height={42} />
                                <Skeleton height={42} />
                            </Stack> :
                            <>
                                <SetButton handleClick={handleClick} setNumber={1} value={"Set A"} disabled={true} /> 
                                {sets && sets?.map(set => (
                                    <SetButton handleClick={handleClick} 
                                        key={set.id}
                                        setNumber={set.level}
                                        value={`Set ${numOfSets[set.level - 1]}`}
                                    />
                                ))}
                            </>
                        }
                    </View>
                    <Dialog visible={addDialog} onDismiss={() => setAddDialog(false)} >
                        <DialogHeader title={`Add a new Set?`} />  
                        <DialogContent>
                            <Text>Add Set {numOfSets[lastSet]}</Text>
                        </DialogContent>
                        <DialogActions>
                            <Stack direction='row-reverse' mh={10} mb={10} spacing={5} >
                                <Button 
                                    title={"Yes"}
                                    buttonStyle={{minWidth: 70, marginLeft: 10,backgroundColor: "#004E64"}}
                                    onPress={async() => {
                                        setAdding(true)
                                        const { error } = await supabase.from('category').insert({'category': 'Expert', level: (lastSet + 1), email: session.session.user.email})
                                        if(error) {
                                            alert(error.message)
                                            setAdding(false)
                                            return
                                        }
                                        setSnackBarMessage(`Set ${numOfSets[lastSet]}  is added`)
                                        setAddDialog(false)
                                        setTimeout(() => {
                                            setAdding(false)
                                            setSnackBarMessage('')
                                        }, 3000)

                                    }}
                                    loading={adding}
                                />
                                <Button 
                                    buttonStyle={{minWidth: 60, borderColor: '#004E64'}}
                                    titleStyle={{color: "#004E64"}}
                                    title={"No"}
                                    type='outline'
                                    onPress={() => setAddDialog(false)} 
                                />
                            </Stack>
                        </DialogActions>
                    </Dialog> 
                </ScrollView> 
            </ImageBackground>
            
        
            {numOfSets.length != lastSet &&
                <FAB    
                    buttonStyle={{backgroundColor: "#335C67"}}
                    placement='right'  
                    visible={true} 
                    icon={{ name: 'add', color: 'white' }}  
                    onPress={() => setAddDialog(true)}
                /> 
            }
        </>
    )
}