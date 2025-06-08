import Button from "@/components/Button";
import { View, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";


export default function Home(){
    const params = useLocalSearchParams();
  const userName = params.userName as string | undefined;
    return(
        <View style={{ flex: 1, backgroundColor: "#6EDD3A", padding:10 }}>
            <View style={{justifyContent: "center", alignItems: "center"}}>
                <Image
                style={{width:167, height:167,paddingTop:50 }}
                source={require("@/assets/images/LOGO.png")}/>
            </View>
            <View style={{ height: '26%' }}>
                <View style={{alignItems: 'flex-start'}}>
                    <Button text="Maquina" textcolor="#000" backgroundColor="#00F4AC"/>
                </View>
            </View>

            <View style={{justifyContent: "center", alignItems: "center"}}>
                <Image
                style={{width:110, height:110,paddingTop:10 }}
                source={require("@/assets/images/vs.png")}/>
            </View>

            <View style={{ height: '26%' }}>
                <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                    <Button text={userName || "Tu"} textcolor="#FA432B" backgroundColor="#FFCF11"/>
                </View>
            </View>

            <View >
                <View style={{alignItems: 'center'}}>
                    <Button text="Lanzar" textcolor="#fff" backgroundColor="#FA432B"/>
                </View>
            </View>
        </View>
    )
}