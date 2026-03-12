import { View, Text } from "react-native";
import { fahrenheitToCelsius } from "../fahrenheitToCelsius";

export default function FahrenheitToCelsiusView() {

    // processing
    let nTest1 = fahrenheitToCelsius(32);   // freezing
    let nTest2 = fahrenheitToCelsius(212);  // boiling
    let nTest3 = fahrenheitToCelsius(70);   // room temperature

    // output
    return (
        <View>
            <Text>32°F = {nTest1}°C</Text>
            <Text>212°F = {nTest2}°C</Text>
            <Text>70°F = {nTest3}°C</Text>
        </View>
    );
}
