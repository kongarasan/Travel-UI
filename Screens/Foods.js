import { useState } from "react";
import { View, SafeAreaView, FlatList, Text, Image, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { BlurView } from "@react-native-community/blur";
import LocationCard from "../components/LocationCard";

import { COLORS, NFTData, assets, SHADOWS, FONTS } from '../constants';
import { NFTcard, HomeHeader, FocusedStatesBar } from '../components';
const Foods = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", backgroundColor: 'white' }}>
      <View style={{ marginRight: 20, marginTop: 0, flexDirection: "row" }}>
        <Image style={{ height: 48, width: 48 }}
          source={require('../assets/images/person03.png')}></Image>
        <Text style={{ fontSize: 20, marginTop: 12, marginLeft: 10 }}>Hi,Maria</Text>
        <TouchableOpacity>
          <Image
            style={{ height: 35, width: 35, marginLeft: 180, marginTop: 5 }}
            source={require('../assets/images/bell.png')}></Image>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>

  )
}
export default Foods;


