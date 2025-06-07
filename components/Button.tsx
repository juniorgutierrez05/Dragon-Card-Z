import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type ButtonProps = {
  text: string;
  backgroundColor: string;
  textcolor: string;
  onPress?: () => void;
};

export default function Button({ text, backgroundColor, textcolor, onPress }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, { backgroundColor }]}>
        <Text style={[styles.text, { color: textcolor }]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginVertical: 10,
    width:150,
    borderWidth:2,
    alignSelf: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
