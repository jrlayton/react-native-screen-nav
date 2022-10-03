import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import RegistrationScreen from "./screens/RegistrationScreen";

/**
 * Screen navigation demo using native stack
 *
 * 1. install react-native-nagivation library for project:
 *        npm install @react-navigation/native
 *
 * 2. intall drawer navigator:
 *        npm install @react-navigation/drawer
 *
 * 3. also need to install gesture handler and reanimated for expo managed project run:
 *        npx expo install react-native-gesuture handler react-native-reanimated
 *
 * 4. add import "react-native-gesture-handler" to top of screen
 *
 * 5. install dependencies (using expo for this demo):
 *    if using expo:
 *        expo install react-native-screens react-native-safe-area-context
 *    if using npm:
 *        npm install react-native-screens react-native-safe-area-context
 *
 * 6. Wrap app in NavigationContainer and make sure it's imported
 *
 * 7. Add create Drawer variable => createDrawerNavigator()
 *
 * 8. Add Drawer.Navigator component within NavigationContainer
 *
 * 9. Add Drawer.Screen components within Drawer.Navigator component
 *
 * 10. For each Drawer.Screen component set it to the corresponding JavaScript file
 *
 * 11. Add the navigation prop to each JavaScript file we wish to navigate too. Shown in each screen file.
 *
 * Produces a hamburger style drop down to allow navigation between screens!
 */

const Drawer = createDrawerNavigator(); // create Drawer component

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerTitleAlign: "center" }}
        />
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitleAlign: "center" }}
        />
        <Drawer.Screen
          name="Register"
          component={RegistrationScreen}
          options={{ headerTitleAlign: "center" }}
        />
      </Drawer.Navigator>
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
