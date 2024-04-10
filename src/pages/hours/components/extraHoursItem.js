import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

export function ExtraHoursItem({ data, removeExtraHours }) {
    const { day, month, year, hourStart, hourExit, local } = data;

    return (
        <View style={styles.container}>

            <Pressable onPress={removeExtraHours} style={styles.removeHours}>
                <Text style={styles.xToRemove}>X</Text>
            </Pressable>

            <Text style={styles.textData}>{`Data: ${day}/${month}/${year}`}</Text>

            <Text style={styles.text}>{`Entrada: ${hourStart}`}</Text>

            <Text style={styles.text}>{`Saida: ${hourExit}`}</Text>

            <Text style={styles.text}>{`Local: ${local}`}</Text>
            
        </View>
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
        marginTop: -22,
        marginLeft: 25
    },

    text: {
        color: "#000000",
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 25
    },

    removeHours: {
        width: 20,
        height: 20,
        marginLeft: 280,
        marginTop: 10,
        borderWidth: 2,
        alignItems: 'center',
        backgroundColor: '#D11341'
    },

    xToRemove: {
        fontSize: 16,
        marginTop: -4,
        fontWeight: 'bold',
        color: 'white'
    }

});