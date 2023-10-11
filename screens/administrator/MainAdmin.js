import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements' 
import Icon from 'react-native-vector-icons/MaterialIcons'
import { supabase } from '../../lib/supabase';
import { RefreshControl, ScrollView } from 'react-native-gesture-handler';
import { ActivityIndicator, Stack, TextInput } from '@react-native-material/core';
import { Input } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';




export default function MainAdmin() {

    const navigation = useNavigation();
    const [search, setSearch] = useState('')
    const [schools, setSchools] = useState([]);
    const [admins, setAdmins] = useState([]);
    const [filtered, setFiltered] = useState(admins);
    const [initLoading, setInitLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => { 
        (async () => {
            const { data, error } = await supabase.from('administrator').select().eq('role', 'sub_admin');
            console.log(data)

            setSchools(data?.map(item => item.school_name))
            setAdmins(data)
            setFiltered(data)
            setInitLoading(false);
            // console.log(schools)
        })() 


        const subscription = supabase
                                .channel('any')
                                .on("postgres_changes", {
                                    event: "*",
                                    schema: "public",
                                    table: "administrator",
                                }, async(payload) => {
                                    const { data, error } = await supabase.from('administrator').select();
                                    if(error) {
                                        alert(error.message)
                                        return console.log(error.message)
                                    }
                                    setAdmins(data)
                                    setFiltered(data)
                                })
                                .subscribe()


        return () => {
            subscription.unsubscribe()
        }

    }, [])

    useEffect(() => {

        setFiltered(admins.filter(item => 
            String(item.school_name).toLowerCase().includes(search.toLowerCase()) ||
            String(item.email).toLowerCase().includes(search.toLowerCase()) ||
            String(item.school_id).toLowerCase().includes(search.toLowerCase())  
        )) 

    }, [search]) 

    console.log(filtered)

    return (
        <View style={{width: Dimensions.get('screen').width}}>
            <Text h3 style={{paddingHorizontal: 20, paddingTop: 10}}>Manage Admins</Text>
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.buttonContainer}
                    activeOpacity={0.8}
                    
                >
                    <View
                        
                        style={styles.button}
                    >
                        <Icon 
                            name='person-add-alt-1' 
                            size={Dimensions.get('window').fontScale = 40} 
                        />
                        <Text style={styles.text}>Add Admin</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.buttonContainer}
                    activeOpacity={0.8}
                >
                    <View
                        style={styles.button}
                    >
                        <Icon 
                            name='person-add-alt-1' 
                            size={Dimensions.get('window').fontScale = 40} 
                        />
                        <Text style={styles.text}>Add Admin</Text>
                    </View>
                </TouchableOpacity>
                 
            </View>

            <Stack
                direction='row' 
                style={{
                    marginHorizontal: 10,
                    marginVertical: 4, 
                }}
            >
                {/* <Text h4 
                >
                    Admin List
                </Text> */}
                <Input  
                    style={{
                        paddingHorizontal: 5,
                        width: 'auto',
                        marginRight: 100,
                        flexWrap: 'wrap'
                    }}
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                    placeholder='Search'
                />
            </Stack>
            <Stack direction='row' spacing={20} ph={20} >
                <Text style={{fontSize: Dimensions.get('window').fontScale = 12.5, textAlign: 'center', paddingVertical: 5}}>{"Email \t / \t School Name \t / \t School ID \t / \t Edit \t / \t Delete"}</Text>
            </Stack>
            <ScrollView 
                // horizontal={false} 
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={async() => {
                            setRefreshing(true)
                            const { data, error } = await supabase.from('administrator').select().eq('role', 'sub_admin')
                            if(error) return alert(error.message)
                            setSearch('')
                            setFiltered(data)
                            setAdmins(data)
                            setRefreshing(false)
                        }}
                    />
                }
                contentContainerStyle={styles.scrollContainer} 
            >
                <ScrollView
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        display: 'flex',
                        flexDirection: "column",
                        width: initLoading ? '100%' : 'auto',
                        paddingHorizontal: 10,
                    }}  
                >  
                    {initLoading ? 
                        <>
                            <View 
                                style={{   
                                    height: "100%", 
                                    width: '100%', 
                                    display: 'flex', 
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                {/* <Text style={{textAlign: 'center'}}> */}
                                    <ActivityIndicator 
                                        size={50}
                                        color='#004777'
                                        
                                    />
                                {/* </Text> */}
                            </View>
                        </> :
                        filtered?.map((admin, i) => (
                            <View
                                key={i}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    padding: 10,
                                    columnGap: 10
                                }}
                                > 
                                    <Text style={styles.minWidthEmail}>
                                        {admin?.email}
                                    </Text>
                                    <Text style={styles.minWidthSchool}>
                                        {admin?.school_name}
                                    </Text> 
                                    <Text style={styles.minWidthID}>
                                        {admin?.school_id}
                                    </Text> 
                                    <TouchableOpacity
                                        style={{paddingHorizontal: 10}}
                                        onPress={() => {
                                            navigation.navigate('Edit Admin', {
                                                id: admin?.id,
                                                email: admin?.email,
                                                school_id: admin?.school_id,
                                                school_name: admin?.school_name
                                            })
                                        }}
                                    >
                                        <Text>Edit</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{paddingHorizontal: 10}}
                                    >
                                        <Text>Delete</Text>
                                    </TouchableOpacity>
                            </View>
                        ))
                    } 
                </ScrollView>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: Dimensions.get('window').scale = 120,
        width: Dimensions.get('window').scale = 120,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        margin: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        // padding: 10,
        elevation: 3,
    },
    button: {
        padding: 5,
        borderRadius: 10,
        backgroundColor: "#FFF",
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // flex: 1,
        position: 'relative',
    },
    text: {
        fontSize: Dimensions.get('window').fontScale = 18,
        textAlign: 'center'
    },
    container: {
        paddingTop: 30,
        // flex: 1,
        position: 'relative',
        zIndex: 99,
        // backgroundColor: '#FFF',
        height: 'auto',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    scrollContainer: {
        // backgroundColor: "#FFF",
        // padding: [20, 10]
        paddingVertical: 10,
        minHeight: 400
    },
    minWidthEmail: {
        minWidth: 250
    },
    minWidthID: {
        minWidth: 60
    },
    minWidthSchool: {
        minWidth: 200
    }
})
