import { View, Text, TextInput, Button, Image } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function FormName() {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (name.trim()) {
     // router.replace("/home");
    } else {
      alert("Por favor ingresa tu nombre.");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20, backgroundColor:"#fff"}}>
        <View>
            <Image
            style={{width:150, height:80}}
             source={require("@/assets/images/LOGO.png")}/>
        </View>
      <Text>Ingresa tu nombre:</Text>
      <TextInput
        placeholder="Tu nombre"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, marginVertical: 10, padding: 8 }}
      />
      <Button title="Empezar juego" onPress={handleSubmit} />
    </View>
  );
}
