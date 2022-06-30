import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import React, { useEffect, useState } from "react";

import { auth } from "../firebase";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.cta}>Pievienojiesdsfds</Text>
      <TextInput
        placeholder="E-pasts"
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Parole"
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      <View style={styles.btnGroup}>
        <TouchableOpacity style={styles.btn} onPress={handleSignUp}>
          <Text style={styles.btnText}>Reģistrēties</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cta: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 40,
  },
  input: {
    width: 300,
    height: 50,
    borderRadius: 20,
    border: "1px solid black",
    padding: 20,
    marginBottom: 20,
  },
  btnGroup: {
    width: "50%",
  },
  btn: {
    backgroundColor: "#00BFA6",
    width: "100%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
