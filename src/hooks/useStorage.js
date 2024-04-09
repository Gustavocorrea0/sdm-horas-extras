import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
    const getItem = async(key) => {
        try {
            const extraHours = await AsyncStorage.getItem(key);
            return JSON.parse(extraHours) || [];
        } catch (error) {
            console.log("erro ao buscar", error);
            return[];
        }
    }

    const saveItem = async (key, value) => {
        try{
            let extraHours = await getItem(key);
            extraHours.push(value);
            await AsyncStorage.setItem(key, JSON.stringify(extraHours));
        } catch (error) {
            console.log("Erro ao salvar", error);
        }
    }

    const removeItem = async (key, item) => {
        try {
            let extraHours = await getItem(key);
            let myExtraHours = extraHours.filter( (extraHours) => {
                return (extraHours !== item);
            });

            await AsyncStorage.setItem(key, JSON.stringify(myExtraHours))
            return myExtraHours
        } catch (error) {
            console.log("Erro ao remover", error);
        }
    }


    return {
        getItem,
        saveItem,
        removeItem
    }

}

export default useStorage;