import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import RegistrationScreen from "./screens/RegistrationScreen";

/**
 * Screen navigation demo using native stack
 *
 * 1. install react-native-nagivation library for project:
 *        npm install @react-navigation/native @react-navigation/native-stack
 *
 * 2. install dependencies (using expo for this demo):
 *    if using expo:
 *        expo install react-native-screens react-native-safe-area-context
 *    if using npm:
 *        npm install react-native-screens react-native-safe-area-context
 *
 * 3. Wrap app in NavigationContainer and make sure it's imported
 *
 * 4. Add create Stack variable => createNavigationStackNavigator()
 *
 * 5. Add Stack.Navigator component within NavigationContainer
 *
 * 6. Add Stack.Screen components within Stack.Navigator component
 *
 * 7. For each Stack.Screen component set it to the corresponding JavaScript file
 *
 * 8. Add the navigation prop to each JavaScript file we wish to navigate too. Shown in each screen file.
 *
 * Each button in this demo will take you to the corresponding screen. Note that you can
 * also hit the back arrow in the top left of your screen to go back to the last screen
 * on the stack.
 */

const Stack = createNativeStackNavigator(); // create Stack component

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login" // name of screen, used in navigator.navigate(<screen_name>) callback function
          component={LoginScreen} // setting component to screens/LoginScreen.js
          options={{ headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen} // setting component to screens/HomeScreen.js
          options={{ headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Register"
          component={RegistrationScreen} // setting component to screens/RegistrationScreen.js
          options={{ headerTitleAlign: "center" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // not used
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
