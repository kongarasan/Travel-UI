import { useState } from "react";
import { View, SafeAreaView, FlatList, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { BlurView } from "@react-native-community/blur";


import { COLORS, NFTData, assets, SHADOWS, FONTS } from '../constants';
import { NFTcard, HomeHeader, FocusedStatesBar } from '../components';
const ClothTypes =({ type,count,color})=> {
  return (
    <View style={{paddingTop:10}}>

    <TouchableOpacity 
     
    style={{ height: 170, width:90,marginHorizontal:12, backgroundColor:"#FFFFFF", borderRadius: 50,justifyContent:'flex-start',alignItems:'center'}}>
      <View style={{backgroundColor:"#98A3F4",width:32,height:32,borderRadius:16,top:-10, position:'absolute', zIndex:50}}>
     <Text style={{fontSize:32,color:"white",textAlign: 'center',marginTop:-5}}>+</Text>
</View>
      <View style={{backgroundColor:'#F2F6FF',width:90,height:100,borderRadius:50}}>
        <Text style={{fontSize: 16,marginTop:36,marginHorizontal:36}}>{count}</Text>
      </View>
      <Text style={{fontSize: 16,marginTop:4,color:"#656565"}}>{type}</Text>
    </TouchableOpacity>
    </View>

  )
}

export default ClothTypes