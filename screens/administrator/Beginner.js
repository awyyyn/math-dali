import { Button, Input, Text } from 'react-native-elements'
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
import { numOfSets } from '../../lib/helpers'
import { useNavigation, StackActions } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function Beginner() {
      
    const navigation = useNavigation()
    
    const { session } = useContext(SettingsContext)
    const [sets, setSets] = useState([]);
    const [addDialog, setAddDialog] = useState(false);
    const [adding, setAdding] = useState(false)
    const [loading, setLoading] = useState(false)
    const [lastSet, setLastSet] = useState(0);
    const [snackBarMessage, setSnackBarMessage] = useState('') 
    const [refresh, setRefresh] = useState(false)
    const [timerErrMessage, setTimerErrMessage] = useState('')
    const [timer, setTimer] = useState('');
    const [schoolInfo, setSchoolInfo] = useState({
        role: '',
        schoolId: '',
        schoolName: ''
    })
 
 
    async function getSets () {

        
        const keys = await AsyncStorage.multiGet(['role', 'schoolId', 'schoolName']);

        setSchoolInfo({
            role: keys[0][1],
            schoolId: keys[1][1],
            schoolName: [2][1]
        }) 

        setLoading(true)
        const { data, error } = await supabase.from('category').select().match({'category': "Beginner", 'school_id': Number(keys[1][1])})
        if(error){
            alert(error.message)
            setLoading(false)
            return 
        } 
        
        setLastSet(data?.length + 1)  
        setSets(data?.sort((a, b) => a.id - b.id)) 
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


    }, [navigation])
      
 
    const handleClick = (path, value) => {
        navigation.navigate('SetScreen', {
            setNumber: path,
            value: value,
            isTrue: true,
            category: 'Beginner',
            schoolId: schoolInfo.schoolId,
            schoolName: schoolInfo.schoolName,
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
                                const { data, error } = await supabase.from('category').select().match({'category': "Beginner", 'school_id': Number(schoolInfo?.schoolId)})
                                if(error){
                                    alert(error.message)
                                    setRefresh(false)
                                    return 
                                } 
                                setSets(data.sort((a, b) => a.id - b.id))
                                setRefresh(false)
                            }}
                        />
                    }
                >  
                    <Text h1>Beginner</Text> 

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
                        {/* <DialogHeader title={``} />   */}
                        <DialogContent >
                            <Input 
                                label={`Set timer for set ${numOfSets[lastSet]} (seconds)`}
                                value={timer}
                                style={{textAlign: 'center', fontSize: 22}}
                                labelStyle={{marginTop: 50}}
                                keyboardType='number-pad'
                                onChangeText={(text) => setTimer(text)}
                                errorMessage={timerErrMessage}

                            />
                        </DialogContent>
                        <DialogActions>
                            <Stack direction='row-reverse' mh={10} mb={10} spacing={5} >
                                <Button 
                                    title={"Confirm"}
                                    buttonStyle={{minWidth: 70, marginLeft: 10,backgroundColor: "#004E64"}}
                                    onPress={async() => {
                                        setTimerErrMessage('')
                                        if(!timer || !/^\d+$/.test(timer)) {
                                            return setTimerErrMessage('Please enter a valid number')
                                        }
                                        setAdding(true)
                                        const { error } = await supabase.from('category')
                                            .insert({
                                                'category': 'Beginner', 
                                                level: (lastSet + 1), 
                                                email: session.session.user.email,
                                                time: timer,
                                                school_id: Number(schoolInfo?.schoolId)
                                            });

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
                                    title={"Cancel"}
                                    type='outline'
                                    onPress={() => {
                                        setAddDialog(false)
                                        setTimer('')
                                        setTimerErrMessage('')
                                    }} 
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