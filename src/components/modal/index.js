import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import * as Clipboard from "expo-clipboard";
import useStorage from "../../hooks/useStorage";
import styles from "./style";

export function ModalExtraHours({ extraHours, handleClose }) {
    const { saveItem } = useStorage();

    async function handleCopyExtraHours() {
        //await Clipboard.setStringAsync(extraHours) - copiar
        await saveItem("@extra", extraHours)
        alert("Hora extra salva")
        handleClose();
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Confirmar Horas Extras?</Text>

                <View style={styles.buttonArea}>

                    <TouchableOpacity style={styles.bottonNo} onPress={handleClose}>
                        <Text style={styles.buttonTextNo}>Não</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bottonYes} onPress={handleCopyExtraHours}>
                        <Text style={styles.buttonTextYes}>Sim</Text>
                    </TouchableOpacity>

                </View>
                
            </View>
        </View>
    );
}