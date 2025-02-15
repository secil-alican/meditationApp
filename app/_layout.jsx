import { Text } from "react-native";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import MeditationDetailsScreen from "../screens/MeditationDetailsScreen";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            contentStyle: { backgroundColor: "#1B1A55" },
            headerStyle: { backgroundColor: "#A9B5DF" },
          }}
        >
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ title: "Keşfet", headerTitleAlign: "center" }}
          />

          <Stack.Screen
            name="MeditationDetailsScreen"
            component={MeditationDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
