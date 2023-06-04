import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from './Screens/Home';
import Details from './Screens/Details';
import Page1 from './Screens/Page1';
import Rental from './Screens/Rental';
import Cab from './Screens/Cab';
import Laundary from './Screens/Laundary';
const Stack=createNativeStackNavigator();

const App =() => {
  const [loaded] = useFonts({
     InterBold: require("./assets/fonts/Inter-Bold.ttf"),
     InterLight: require("./assets/fonts/Inter-Light.ttf"),
     InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
     InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
     InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
  });
  if(!loaded) return null;
   const theme ={
    ...DefaultTheme,
    color: {
      ...DefaultTheme.colors,
      background: "white"
    }
   }
  return(
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown: false}}
      initialRouteName="Home">
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Details' component={Details}/>
        <Stack.Screen name='Page1' component={Page1}/>
        <Stack.Screen name='Rental' component={Rental}/>
        <Stack.Screen name='Cab' component={Cab}/>
        <Stack.Screen name='Laundary' component={Laundary}/>
      </Stack.Navigator>  
    </NavigationContainer>
  )
}

export default App;