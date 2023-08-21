import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    homeContainer: { 
        justifyContent: 'space-evenly', 
        alignItems: 'center',
        backgroundColor: "#FCF7F8"
    },
    navContainer: {
        columnGap: 10,
        display: "flex",
        rowGap: 10,
        flexDirection: "column", 
        // backgroundColor: 'red'
    },
    container: { 
        backgroundColor: "#FCF7F8",
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
    },
    title: {
        color: '#275DAD',
        fontWeight: '900',
        fontSize: 30,
        textAlign: 'center',
        paddingVertical: 10,
        backgroundColor: '#00000000',
        // position: 'absolute',
    },
    rules: {
        rowGap: 30,
    },
    rulesContainer: {
        // justifyContent: 'space-evenly', 

        // width: Dimensions.get('window').width,
        // height: Dimensions.get('window').height
    },
    rulesParagraph: {
        textAlign: 'justify',
        textTransform: 'uppercase',
        letterSpacing: 2,
        lineHeight: 30
    },
    windowContainer: { 
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height, 
    },
    between: {
        justifyContent: 'space-between'
    },
    paddingBottom: {
        paddingBottom: 30,
        paddingHorizontal: 30
    },
    success: {
        // position: 'absolute',
        // top: Dimensions.get('window').height = 30,
        // right: Dimensions.get('window').width = 30,
        backgroundColor: '#5cb85c',
        marginTop: 10,
        padding: 10,
        borderRadius: 8,
        paddingHorizontal: 20,
        opacity: 0.3, 
    },
    successText: {
        color: 'white',
        fontSize: Dimensions.get('window').fontScale = 14
    }
})