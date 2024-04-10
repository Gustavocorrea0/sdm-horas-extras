import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(24, 24, 24, 0.6)',
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    content:{
        backgroundColor: "#FFFFFF",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8
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
        flex: 1,
        alignItems: "center",
        marginTop: 14,
        marginBottom: 14,
        padding: 8,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderBottomColor: "#000000"
    },

    bottonYes: {
        flex: 1,
        alignItems: "center",
        marginTop: 14,
        marginBottom: 14,
        padding: 8,
        backgroundColor: "#000000"
    },

    buttonTextYes:{
        color: "#FFFFFF",
        fontWeight: "bold"
    },

    buttonTextNo:{
        color: "#000000",
        fontWeight: "bold"
    },

})