import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Client () {
    const params = useLocalSearchParams()
    return <View>
        <Text>Client {params.id}</Text>
    </View>
}