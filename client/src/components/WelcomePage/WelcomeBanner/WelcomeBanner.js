import { Text, View, Image } from "react-native";
import { WelcomeBannerStyle } from "./WelcomeBannerStyle";

export function WelcomeBanner({}) {
  return (
    <View style={WelcomeBannerStyle.container}>
      <Text style={WelcomeBannerStyle.welcomeText}>Human Givens</Text>
      <Image
        style={WelcomeBannerStyle.image}
        source={require("../../../../assets/humangivens_logo.png")}
      />
    </View>
  );
}
