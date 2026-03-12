import { View, Text } from "react-native";
import { gymMembershipCost } from "../gymMembershipCost";

export default function GymMembershipCostView() {

    // processing
    let baseCost = 100.00;

    let nTest1 = gymMembershipCost(baseCost, 1);
    let nTest2 = gymMembershipCost(baseCost, 2);
    let nTest3 = gymMembershipCost(baseCost, 3);
    let nTest4 = gymMembershipCost(baseCost, 4);

    // output
    return (
        <View>
            <Text>1 friend (5% off) = ${nTest1}</Text>
            <Text>2 friends (10% off) = ${nTest2}</Text>
            <Text>3 friends (15% off) = ${nTest3}</Text>
            <Text>4 friends (15% off) = ${nTest4}</Text>
        </View>
    );
}
