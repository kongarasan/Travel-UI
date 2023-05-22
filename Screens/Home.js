import { useState } from "react";
import { View, SafeAreaView, FlatList, Text, Image, TouchableOpacity } from "react-native";




import { COLORS, NFTData, assets, SHADOWS, FONTS } from '../constants';
import { NFTcard, HomeHeader, FocusedStatesBar } from '../components';


const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", backgroundColor: 'white' }}>
      <View style={{ height: 409, width: 363, borderRadius: 32 ,backgroundColor:COLORS.blue,alignItems:"center",justifyContent:"center"}}>
      <Image style={{height:250, resizeMode:"contain"}}
      source={require('../assets/images/boy.png')}></Image>
       
      </View>

      <Text style={{ marginTop: 25, textAlign: "center", fontFamily: FONTS.bold, fontSize: 26 }}>Meet your Migration{'\n'}Guide here </Text>
      <Text style={{ marginTop: 25, marginHorizontal: 20, textAlign: "center", color: COLORS.gray }}>All-in-one Application to help students who migrate for higher studies and people who travel </Text>
      <View style={{ height: 75, width: "90%", backgroundColor: "#F5F5F5", marginTop: 26, borderRadius: 16, flexDirection: "row", alignItems: "center", paddingHorizontal: 8, justifyContent: "space-evenly" }}>

        <TouchableOpacity
          style={{ flex: 1, height: 59, width: "50%", backgroundColor: "white", borderRadius: 10, justifyContent: "center", alignItems: "center" }}
          onPress={() => {
            navigation.navigate("Details")

          }}>
          <Text>Register</Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={{ flex: 1, height: 59, width: "50%", borderRadius: 10, justifyContent: "center", alignItems: "center" }}
          onPress={() => {
            navigation.navigate("Details")

          }}>
          <Text>Sign-up</Text>

        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Home