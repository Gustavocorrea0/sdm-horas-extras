import { View, Text, Image, TouchableOpacity, Modal, ScrollView, FlatList } from "react-native"

import styles from "./style"
import { SafeAreaView } from "react-native-safe-area-context"

import { ExtraHoursItem } from "./components/extraHoursItem"
import { useEffect, useState } from "react"
import { useIsFocused } from "@react-navigation/native"
import useStorage from "../../hooks/useStorage"

export function Hours() {
    const [listExtraHours, setListExtraHours] = useState([]);
    const focused = useIsFocused();
    const { getItem, removeItem } = useStorage();

    useEffect(() => {
        async function loadExtraHours() {
            const extraHours = await getItem('@extra');
            setListExtraHours(extraHours);
        }
        loadExtraHours();
    }, [focused]);

    async function handleDeleteExtraHours(item) { 
        const updateExtraHours = await removeItem("@extra", item);
        setListExtraHours(updateExtraHours);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.top_bar}>
                <Text style={styles.title}>SDM</Text>
            </View>

            <Text style={styles.text_title_hours}>Horas Lançadas</Text>

            <View style={styles.content}>
                <FlatList
                    style={{ flex: 1, padding: 14 }}
                    data={listExtraHours}
                    keyExtractor={(item) => item.id}
                    //renderItem={({ item, index }) => <ExtraHoursItem data={item} removeExtraHours={ () => handleDeleteExtraHours(item)}/>}

                    renderItem={({ item, index }) => {
                        console.log(`Key do item ${index}: ${item.id}`);
                        return <ExtraHoursItem data={item} removeExtraHours={() => handleDeleteExtraHours(item)} />;
                    }}
                />
            </View>

        </SafeAreaView>

    )
}