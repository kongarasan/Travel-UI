import { useState } from "react";
import { View, SafeAreaView, FlatList, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { BlurView } from "@react-native-community/blur";


import { COLORS, NFTData, assets, SHADOWS, FONTS } from '../constants';
import { NFTcard, HomeHeader, FocusedStatesBar } from '../components';
const DateCard =({day, color, onClick , date})=> {
  return (
    <TouchableOpacity 
    onPress={()=>{onClick()}}
    style={{ height: 60, width: 60, backgroundColor: color, borderRadius: 10, marginHorizontal:12,justifyContent:'center',alignItems:'center' }}>
        <Text style={{fontSize: 16,color:"#5F5F5F",marginTop:4}}>{day}</Text>
        <Text style={{fontSize: 18,color:"#000000",marginTop:2}} >{date}</Text>

    </TouchableOpacity>
     
  )
}

export default DateCard