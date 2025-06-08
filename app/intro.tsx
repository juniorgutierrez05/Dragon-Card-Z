import { View, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import React from 'react';
export default function IntroScreen() {
  const handlePress = () => {
    router.push("/formName");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FA432B", justifyContent: "center", alignItems: "center" }}>
      
      <TouchableOpacity onPress={handlePress}>
        <Image
          style={{ width: 300, height: 300 }}
          source={require("@/assets/images/LOGO.png")}
        />
      </TouchableOpacity>
    
    </View>
  );
}
