import { StyleSheet } from "react-native";


export default StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row', 
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    flexCenter: {
        alignItems: 'center',
    },
    spaceBetween: {
        justifyContent: 'space-between'
    },
    header: {
        padding: 13
    },
    button: {
        minWidth: 80,
        marginLeft: 10
    }
})