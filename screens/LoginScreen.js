import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

/**
 * Here we pass the navigation prop as a function argument to use
 * for our onPress call back functions.
 */
const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")} // on button press we navigate to home screen
          style={styles.button}
        >
          <Text style={styles.buttonText}>To Home Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")} // on button press we navigate to registration screen
          style={[styles.button, styles.button2]}
        >
          <Text style={styles.buttonText}>To Register Screen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "100%",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "orange",
    alignItems: "center",
  },
  button2: {
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
