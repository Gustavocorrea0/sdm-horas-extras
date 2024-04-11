import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
//import * as Clipboard from "expo-clipboard";
import useStorage from "../../hooks/useStorage";
import styles from "./style";

export function ModalExtraHours({ extraHours, handleClose }) {
    const { saveItem } = useStorage();

    async function handleCopyExtraHours() {
        console.log('ok')
        await saveItem("@extra", extraHours)
        alert("Hora extra salva")
        console.log('horas salvas', extraHours)
        handleClose();
    }

    async function handleCancelSaveExtraHours() {
        alert("As horas não foram salvas")
        handleClose()
    }


    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Salvar Horas Extras?</Text>

                <View style={styles.buttonArea}>

                    <TouchableOpacity style={styles.bottonYes} onPress={ () => handleCopyExtraHours()}>
                        
                        <Text style={styles.buttonTextYes}>Sim</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bottonNo} onPress={handleCancelSaveExtraHours}>
                        <Text style={styles.buttonTextNo}>Não</Text>
                    </TouchableOpacity>

                </View>
                
            </View>
        </View>
    );
}