import { View, Text } from "react-native";
import { earthquakeDamage } from "../earthquakeDamage";

export default function EarthquakeDamageView() {

    // processing
    let nTest1 = earthquakeDamage(4.8);
    let nTest2 = earthquakeDamage(5.2);
    let nTest3 = earthquakeDamage(6.0);
    let nTest4 = earthquakeDamage(7.0);
    let nTest5 = earthquakeDamage(8.1);

    // output
    return (
        <View>
            <Text>4.8 → {nTest1}</Text>
            <Text>5.2 → {nTest2}</Text>
            <Text>6.0 → {nTest3}</Text>
            <Text>7.0 → {nTest4}</Text>
            <Text>8.1 → {nTest5}</Text>
        </View>
    );
}
