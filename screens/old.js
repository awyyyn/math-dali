

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
                            // onPress={}
                            onPress={() => {
                                setToDelete({
                                    email: admin.email,
                                    id: admin.id
                                })
                                setToDeleteModal(true)
                            }}

                        >
                            <Text>Delete</Text>
                        </TouchableOpacity>
                </View>
            ))
        } 
    </ScrollView>
</ScrollView>