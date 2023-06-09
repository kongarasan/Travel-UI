import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Page1 from './Page1';
import Rental from './Rental';
import Cab from './Cab';
import Laundary from './Laundary';
import Foods from './Foods';
const Stack=createNativeStackNavigator();
const HomeDashboard =() => {
    return(
        <NavigationContainer independent={true}>
          <Stack.Navigator screenOptions={{headerShown: false}}
          initialRouteName="Page1">
            
             <Stack.Screen name='Page1' component={Page1}/>
            <Stack.Screen name='Rental' component={Rental}/>
            <Stack.Screen name='Cab' component={Cab}/>
            <Stack.Screen name='Laundary' component={Laundary}/>
            <Stack.Screen name='Foods' component={Foods}/>
       
            
            
    
          </Stack.Navigator>  
        </NavigationContainer>
      )
    }
    
    export default HomeDashboard;

