import { View } from "react-native";

import CoinTotalView from "./CoinTotalView";
import FahrenheitToCelsiusView from "./FahrenheitToCelsiusView";
import CubeVolumeView from "./CubeVolumeView";
import GymMembershipCostView from "./GymMembershipCostView";
import EarthquakeDamageView from "./EarthquakeDamageView";

export default function App() {
  return (
    <View>

      <CoinTotalView />

      <FahrenheitToCelsiusView />

      <CubeVolumeView />

      <GymMembershipCostView />

      <EarthquakeDamageView />

    </View>
  );
}

