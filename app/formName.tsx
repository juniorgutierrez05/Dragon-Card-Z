import { View, Text, TextInput,  Image } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import Button from "@/components/Button";

export default function FormName() {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (name.trim()) {
    router.replace({
  pathname: "/home",
  params: { userName: name }
});
    } else {
      alert("Por favor ingresa tu nombre.");
    }
  };

  return (
    <View style={{ flex: 1, padding:20,  backgroundColor:"#fff"}}>
        <View style={{padding:50}}>
            <Image
            style={{width:265, height:265,paddingTop:50 }}
             source={require("@/assets/images/LOGO.png")}/>
        </View>
        <View style={{paddingBottom:50}}>
          <Text style={{fontSize:24, paddingBottom:10, textAlign:'center', fontWeight:'bold'}}>Ingresa tu Apodo:</Text>
      <TextInput
        placeholder="Tu nombre"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, marginVertical: 10, padding: 15, backgroundColor:'#FA432B', borderRadius:30, textAlign:'center', fontWeight:'bold', color:'#fff', }}
      />
        </View>
      
      <Button text="Guardar" backgroundColor="#FFCF11" textcolor="#000" onPress={handleSubmit} />
    </View>
  );
}
