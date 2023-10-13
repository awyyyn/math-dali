import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import { Dialog, Text } from 'react-native-elements' 
import Icon from 'react-native-vector-icons/MaterialIcons'
import { supabase, supabaseAdmin } from '../../lib/supabase';
import { RefreshControl } from 'react-native-gesture-handler';
import { ActivityIndicator, Stack, TextInput } from '@react-native-material/core';
import { Input } from '@rneui/themed';
import {  } from 'react-native-js-tableview'
import { useNavigation } from '@react-navigation/native';
import { Cell, Row, Table, TableWrapper } from 'react-native-table-component';

 

export default function MainAdmin() {

    const [toDeleteModal, setToDeleteModal] = useState(false)
    const navigation = useNavigation();
    const [search, setSearch] = useState('')
    const [schools, setSchools] = useState([]);
    const [admins, setAdmins] = useState([]);
    const [filtered, setFiltered] = useState(admins);
    const [initLoading, setInitLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [deleting, setDeleting] = useState(false)
    const [toDelete, setToDelete] = useState({
        id: '',
        email: ''

    });

    useEffect(() => { 
        (async () => {
            const { data, error } = await supabase.from('administrator').select().eq('role', 'sub_admin');
            console.log(data)

            if(error) {
                alert(error.message)
                return console.log(error.message)
            }

            setSchools(data?.map(item => item.school_name));

            // const returnData = data.map((item, gggg) => ([ 
            //     gggg,
            //     item.email,
            //     item.school_name,
            //     item.school_id,
            //     'Edit',
            //     'Delete'
            // ]));

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
                                    const { data, error } = await supabase.from('administrator').select().eq('role', 'sub_admin');
                                    if(error) {
                                        alert(error.message)
                                        return console.log(error.message)
                                    }
                                    setAdmins(data)
                                    setFiltered(data)
                                })
                                .subscribe()


        return () => {
            supabase.removeChannel(subscription)
        }

    }, [])

    useEffect(() => {

        setFiltered(admins.filter(item => 
            String(item.school_name).toLowerCase().includes(search.toLowerCase()) ||
            String(item.email).toLowerCase().includes(search.toLowerCase()) ||
            String(item.school_id).toLowerCase().includes(search.toLowerCase())  
        )) 

    }, [search]) 


    const tableHeader = ['#', 'Email', 'School Name', 'School ID', 'Edit', 'Delete']


    const EditElement = (id) => (
        <TouchableOpacity
            onPress={() => { 
                navigation.navigate('Edit Admin', id)
            }}
        >
            <Text style={{color: "green"}}>Edit</Text>
        </TouchableOpacity>
    )

    const DeleteElement = (id) => (
        <TouchableOpacity
            onPress={() => {
                setToDelete({
                    email: id.email,
                    id: id.id
                })
                setToDeleteModal(true)
            }}
        >
            <Text style={{color: "red"}}>Delete</Text>
        </TouchableOpacity>
    )

    const wid = [30, 250, 200, 100, 80, 80];

    
    

    return (
        
        <View style={{width: Dimensions.get('screen').width}}>
            {/* ==================================== MODAL ==================================== */}
            <Dialog
                isVisible={toDeleteModal}
                onDismiss={() => setToDeleteModal(false)}
            >
                <Dialog.Title title='Delete Admin' />
                {/* <Dialog.Loading /> */}
                <View style={{marginBottom: 15, marginTop: 10}}>
                    <Text style={{fontSize: Dimensions.get('screen').fontScale = 16, textAlign: 'justify', letterSpacing: 2, lineHeight: 20}}>{"\t\t"}Are you sure you want to delete admin {toDelete.email}?</Text>
                </View>
                <Dialog.Actions >
                    <Dialog.Button 
                        loading={deleting}
                        containerStyle={[styles.dialogButton]}
                        title="Confirm"
                        titleStyle={{color: "#FFF"}}
                        buttonStyle={{
                            backgroundColor: 'red',
                        }}
                        onPress={async() => {
                            setDeleting(true)
                            console.log(toDelete)
                            const { error } = await supabaseAdmin.deleteUser(toDelete.id)
                            if(error) {
                                setDeleting(false)
                                alert(error.message)
                                console.log(error.message)
                                return
                            }
                            const { error: adminError } = await supabase.from('administrator').delete().eq('id', toDelete.id)
                            if(adminError) {
                                setDeleting(false)
                                alert(error.message)
                                console.log(error.message)
                                return
                            }
                            setDeleting(false)
                            setToDeleteModal(false) 
                            
                        }}
                        // linearGradientProps={l}
                    />
                    <Dialog.Button  
                        containerStyle={[styles.dialogButton, {marginRight: 8}]}
                        title="Cancel"
                        titleStyle={{color: "#FFF"}}
                        buttonStyle={{
                            backgroundColor: 'green',
                        }}
                        onPress={() => setToDeleteModal(false)}
                    />
                </Dialog.Actions>
            </Dialog> 
            {/* ==================================== */}
            <Text h3 style={{paddingHorizontal: 20, paddingTop: 10}}>Manage Admins</Text>
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.buttonContainer}
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('Create Admin')}
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
            <ScrollView
                contentContainerStyle={{
                    maxHeight: Dimensions.get('screen').scale = 400,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: '#00000020',
                    overflow: 'hidden',
                    shadowColor: "#00667E",
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.27,
                    shadowRadius: 4.65,

                    elevation: 6,
                    margin: 10
                }}
                style={{
                    marginHorizontal: 10,
                }}
                horizontal={false}
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
                            setInitLoading(false)
                            setRefreshing(false)
                        }}
                    />
                }
            >
                <ScrollView
                    horizontal 
                    contentContainerStyle={{
                        minHeight: Dimensions.get('screen').scale = 400,
                    }}
                >
                    <Table
                        // borderStyle='' 
                        style={{
                            borderRadius: 10,
                            backgroundColor: "#FFF",
                            // borderColor: '#000',
                            // borderWidth: 1,
                        }}
                        
                    >
                        <TableWrapper
                            style={{
                                display: 'flex',
                                flexDirection: 'row'
                            }}
                        >
                            {tableHeader.map((item, i)  => (
                                <Cell 
                                    key={i}   
                                    width={wid[i]}
                                    data={item}
                                    textStyle={{
                                        padding: 10,
                                        fontWeight: 'bold',
                                        color: i == 4 ? 'green' : i == 5 ? 'red' : 'black'
                                    }}
                                />
                            ))}
                        </TableWrapper> 
                        {initLoading ? 
                            <Row
                                data={['Fetching Data...']} 
                                style={{
                                    width: '100%',
                                    height: '80%',
                                    paddingLeft: '15%'
                                }}
                            />
                        : filtered?.map((iii, adsd) => ({
                            num: adsd,
                            email: iii.email,
                            school_name: iii.school_name,
                            school_id: iii.school_id,
                            info: iii,
                            info2: iii,
                        })).map((admin, index) => (
                            <TableWrapper 
                                key={index} 
                                style={{display: 'flex', flexDirection: 'row'}}
                                // borderStyle={{borderWidth: 1, borderColor: '#000'}} 
                            >
                                {Object.values(admin).map((item, j) => ( 
                                    <Cell
                                        key={j}
                                        borderStyle={{
                                            borderBottomWidth: j == admins?.length ? 5 : 0,
                                            borderBottomColor: '#000'
                                        }}
                                        textStyle={{
                                            textAlign: j == 0 ? "center" : 'auto'
                                        }}
                                        style={{padding: 10}}
                                        data={j === 4 ? EditElement(item) : j == 5 ? DeleteElement(item) : item}
                                        width={wid[j]}
                                    /> 
                                ))
                                }
                            </TableWrapper>
                        ))} 
                    </Table>
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
    },
    dialogButton: {
        minWidth: 80
    }
})

 
