import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        backgroundColor: '#6F6F6F',
        height: '100%',
        width: '100%',
    },

    top_bar: {
        height: 90,
        width: "100%",
        backgroundColor: 'black',
        marginTop: 0,
        alignItems: 'center',
    },

    title: {
        fontSize: 32,
        color: 'white',
        marginTop: 35,
    },

    text_title_hours: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginLeft: 130,
        marginTop: 20
    },

    content:{
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14,
    }
    
})