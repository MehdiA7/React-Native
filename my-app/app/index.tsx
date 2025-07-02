import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Edit app/index.tsx to edit this screen.</Text>
            <Link href="/about">Click me to change page</Link>
            <Link href={{pathname: '/client/[id]', params: { id: 3}}}>Click me to change page</Link>
        </View>
    );
}
