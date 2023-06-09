import { useState } from "react";
import { View, SafeAreaView, FlatList, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { BlurView } from "@react-native-community/blur";


import { COLORS, NFTData, assets, SHADOWS, FONTS } from '../constants';
import { NFTcard, HomeHeader, FocusedStatesBar } from '../components';
const TimeSlot =({color, onClick, time,setTime})=> {

  return (
    <TouchableOpacity 
    onPress={()=>{
      setTime(time)
      onClick()}
      }
    style={{ height: 40, width: 100,marginHorizontal:12, backgroundColor:color, borderRadius: 10,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize: 16,color:"#5F5F5F",marginTop:4}}>{time}</Text>
    </TouchableOpacity>
     
  )
}

export default TimeSlot