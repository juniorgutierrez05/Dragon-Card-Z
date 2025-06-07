import { View, Image, Text } from "react-native";

export default function Intro(){
    return(
        <View style={{flex:1, backgroundColor:"#FA432B"}}>
            <View style={{paddingTop:20}}>
                <Image source={require("@/assets/images/LOGO.png")}/>
            </View>
            
        </View>
    )
}