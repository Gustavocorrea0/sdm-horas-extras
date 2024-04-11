import React from "react";
import { View, Text, StyleSheet, Pressable, Image, TouchableOpacity } from "react-native";

export function ExtraHoursItem( { data, removeExtraHour } ) {
    const { day, month, year, hourStart, hourExit, local, id } = data;

    return (
        <Pressable onLongPress={ () => removeExtraHour} style={styles.container}>

            <Text style={styles.textData}>{`Data: ${day}/${month}/${year}`}</Text>

            <Text style={styles.text}>"Entrada:"{`${hourStart}`}</Text>

            <Text style={styles.text}>{`Saida: ${hourExit}`}</Text>

            <Text style={styles.text}>{`Local: ${local}`}</Text>

        </Pressable>
    );

}

const styles = StyleSheet.create({

    container: {
        width: 320,
        height: 120,
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: "#000000",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: 'column',
        marginTop: 6
    },

    textData: {
        color: "#000000",
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 6,
        marginLeft: 25
    },

    text: {
        color: "#000000",
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 25
    },

    removeHours: {
        width: 45,
        height: 45,
        marginLeft: 260,
        marginTop: 10,
        borderWidth: 2,
        alignItems: 'center',
        backgroundColor: '#D11341'
    },

    xToRemove: {
        fontSize: 16,
        marginTop: 1,
        fontWeight: 'bold',
        color: 'white'
    }

});