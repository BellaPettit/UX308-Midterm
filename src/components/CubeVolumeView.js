import { View, Text } from "react-native";
import { cubeVolume } from "../cubeVolume";


export default function CubeVolumeView() {

    // processing
    let nTest1 = cubeVolume(1);
    let nTest2 = cubeVolume(2);
    let nTest3 = cubeVolume(3);

    // output
    return (
        <View>
            <Text>Cube height 1m = {nTest1} m³</Text>
            <Text>Cube height 2m = {nTest2} m³</Text>
            <Text>Cube height 3m = {nTest3} m³</Text>
        </View>
    );
}
