import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome } from "./src/screens/Welcome";
import { SignUp } from "./src/screens/SignUp";
import { LogIn } from "./src/screens/LogIn";
import { Profile } from "./src/screens/Profile";
import { HumanGivens } from "./src/screens/HumanGivens";
import { FoodSafety } from "./src/screens/Results";
import { Info } from "./src/screens/Info";
import { Test } from "./src/screens/Test";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="HumanGivens" component={HumanGivens} />
        <Stack.Screen name="Results" component={FoodSafety} />
        <Stack.Screen name="Info" component={Info} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
