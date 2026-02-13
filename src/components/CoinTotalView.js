import { View, Text } from "react-native";
import { coinTotal } from "../coinTotal";


export default function CoinTotalView() {

    // processing
    let nTest1 = coinTotal(1, 1, 1, 1, 1);
    let nTest2 = coinTotal(0, 0, 0, 0, 0);  // testing 0
    let nTest3 = coinTotal(10, 5, 4, 2, 1);

    // output
    return (
        <View>
            <Text>Test 1 (1 of each coin) = ${nTest1}</Text>
            <Text>Test 2 (all zero coins) = ${nTest2}</Text>
            <Text>Test 3 (10N, 5D, 4Q, 2L, 1T) = ${nTest3}</Text>
        </View>
    );
}
