import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export function ExtraHoursItem( { data, removeExtraHours } ){
    const { day, month, year, hourStart, hourExit, local} = data;

    return(
        <Pressable onLongPress={removeExtraHours} style={styles.container}>
            <Text style={styles.textData}>{`Data: ${day}/${month}/${year}`}</Text>
                     
            <Text style={styles.text}>{`Entrada: ${hourStart}`}</Text>
            
            <Text style={styles.text}>{`Saida: ${hourExit}`}</Text>
            
            <Text style={styles.text}>{`Local: ${local}`}</Text>
        </Pressable>    
    );
}

const styles = StyleSheet.create ({

    container:{
        width: 350,
        height: 120,
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: "#000000",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: 'column',
        marginTop: 6
    },
    /*
    container:{
        backgroundColor: "#0e0e0e",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    */
    textData: {
        color:  "#000000",
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 5,
        marginLeft: 25
    },

    text: {
        color:  "#000000",
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 25
    }

});