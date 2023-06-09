import { useState } from "react";
import { View, SafeAreaView, FlatList, Text, Image, TouchableOpacity, TextInput, setText } from "react-native";



import {Feather, AntDesign, Entypo} from "@expo/vector-icons"

import { COLORS, NFTData, assets, SHADOWS, FONTS } from '../constants';

const Details = ({ navigation }) => {
  const [text, setText] = useState('');
  const [Password, setPassword] = useState('');
  const [passIcon, setPassIcon] = useState(false)


  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", backgroundColor: 'white' }}>
      <Text style={{ fontSize: 26, marginTop: 60, fontFamily: FONTS.bold }}>Hello Again!</Text>
      <Text style={{ fontSize: 18, color: "#656565", marginTop: 20, marginHorizontal: 100, textAlign: "center" }}>Welcome Back! You’ve been missed.</Text>
      <TouchableOpacity>
        <View style={{ height: 60, width: 358, backgroundColor: "#F5F5F5", marginTop: 40, borderRadius: 20 }}>
          <TextInput style={{ fontSize: 16, color: "#B9B9B9", marginHorizontal: 30, marginTop: 20 }}
            placeholder="Enter username"
            onChangeText={Text => setText(Text)}
            defaultValue={text}></TextInput>
        </View>

        <View style={{ height: 60, width: 358, backgroundColor: "#F5F5F5", marginTop: 10, borderRadius: 20, justifyContent: "center" }}>
          <TextInput style={{ fontSize: 16, color: "#B9B9B9", marginHorizontal: 30}}
            placeholder="Password"
            secureTextEntry={passIcon}
            onChangeText={Text => setPassword(Text)}
            defaultValue={Password}></TextInput>
          <TouchableOpacity
          style={{position:"absolute",right:24}}
           onPress={() => {
              setPassIcon(!passIcon)
            }}>

{ passIcon ? 
  <Entypo name="eye-with-line" size={24} color="black" />
  : <AntDesign name="eye" size={24} color="black"  />
  }
          </TouchableOpacity>

        </View>

        <Text style={{ fontSize: 14, marginTop: 10, marginLeft: 200, color: "#656565", alignItems: "center" }}>Recover Password</Text>
      </TouchableOpacity>
      <View style={{ height: 60, width: "60%", backgroundColor: "#000000", marginTop: 26, borderRadius: 16, flexDirection: "row", alignItems: "center", paddingHorizontal: 8, justifyContent: "space-evenly" }}>


        <TouchableOpacity
          style={{ flex: 1, height: 59, width: "50%", borderRadius: 10, justifyContent: "center", alignItems: "center" }}
          onPress={() => {
            navigation.navigate("List")

          }}>
          <Text style={{ color: "white" }}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 40, width: "90%", alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: "30%", height: 1, backgroundColor: '#B9B9B9' }}></View>
        <Text style={{ fontSize: 14, color: "#656565", marginHorizontal: 8 }}>Or Continue with</Text>
        <View style={{ width: "30%", height: 1, backgroundColor: '#B9B9B9' }}></View>

      </View>

      <TouchableOpacity>
        <Image
          style={{ height: 55, width: 256, marginTop: 40, justifyContent: "center", alignItems: "center" }}
          source={require('../assets/images/aj4.png')}></Image>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 50 }}><Text style={{ fontSize: 14, color: "#656565" }}>Not a member?</Text>

          <Text style={{ fontSize: 14, color: "#01B5EE" }}>Register here</Text>
        </View>
      </TouchableOpacity>


    </SafeAreaView>
  )
}

export default Details