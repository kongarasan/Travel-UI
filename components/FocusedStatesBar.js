import { StatusBar } from "react-native-web"
import { useIsFocused } from "@react-navigation/native"


const FocusedStatesBar = (props) => {
  const isFocused =useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props}/> : null; 
  
}

export default FocusedStatesBar