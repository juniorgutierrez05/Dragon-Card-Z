import { Stack } from 'expo-router';


export default function RootLayout() {
  return (
    <>
      <Stack
        initialRouteName="intro"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="intro"/>
        <Stack.Screen name="formName" />
        <Stack.Screen name="home" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </>
  );
}



