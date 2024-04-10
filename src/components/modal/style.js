import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(24, 24, 24, 0.6)',
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    content:{
        backgroundColor: "#FFFFFF",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "#000000"
    },

    title:{
        fontSize: 20,
        fontWeight: "bold",
        color: "#000000",
        marginBottom: 24
    },

    buttonArea:{
        flexDirection: "row",
        width: "90%",
        marginTop: 8,
        alignItems: "center",
        justifyContent: "space-between"
    },

    bottonNo:{
        height: 45,
        width: 120,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderBottomColor: "#000000",
        alignItems: 'center',
        marginTop: -15,
        borderRadius: 20
    },

    bottonYes: {
        height: 45,
        width: 120,
        backgroundColor: "#FFFFFF",
        marginTop: -15,
        backgroundColor: "#000000",
        alignItems: 'center',
        borderRadius: 20
    },

    buttonTextYes:{
        fontSize: 20,
        color: "#FFFFFF",
        fontWeight: "bold",
        marginTop: 7
    },

    buttonTextNo:{
        fontSize: 20,
        color: "#000000",
        fontWeight: "bold",
        marginTop: 7
    },

})