import { useState } from "react";
import { View, SafeAreaView, FlatList, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { BlurView } from "@react-native-community/blur";


import { COLORS, NFTData, assets, SHADOWS, FONTS } from '../constants';
import { NFTcard, HomeHeader, FocusedStatesBar } from '../components';
const LocationCard = ({Image}) => {
  return (
    <ImageBackground
    source={Image}
    style={styles.imageStyle}
    imageStyle={{borderRadius:10}}
  >
    <View style={styles.blurWrap}>
      <ImageBackground
        source={Image}
        blurRadius={Platform.OS === 'ios' ? 8 : 3}
        style={styles.blurImageStyle}
      >
        {/*Your content goes here*/}
      <View style={{width:"100%",height:50,     backgroundColor:"rgba(255, 255, 255, 0.4)"}}></View>
      </ImageBackground>
    </View>
    <Ionicons name="heart-circle-outline" size={28} color="white" style={{top:12,right:15,position:'absolute'}}/>
    <Text style={{position:'absolute',bottom:18,fontSize:18,color:"white",left:10}}>Sleeping Lake </Text>
    <Text style={{position:'absolute',bottom:2,fontSize:12,color:"white",left:10}}>Kollam, Ooty-600032 </Text>
     <View style={{ height:32, width: 32, backgroundColor: "#F5F5F5", borderRadius: 8,position:'absolute',bottom:10,left:180,justifyContent:'center',alignItems:'center'}}>
      <Text style={{alignItems:'center',fontSize:10}}>4.3 Km</Text>
     </View>
  </ImageBackground>
  )
}

export default LocationCard


const styles = StyleSheet.create({
    blurWrap: {
      height: 50,//Here we need to specify the height of blurred part
      overflow: 'hidden',
      width: '100%',
      position: 'absolute',
      borderBottomLeftRadius:10,
      borderBottomRightRadius:10,
      bottom: 0,
      backgroundColor:"rgba(255, 255, 255, 0.4)",
      borderRadius:10
    },
    imageStyle: { 
      height: 240,
      width: 220,
      marginHorizontal:12,
      borderRadius:10
    }, 
    blurImageStyle: {
      height: 240,
      width: 220,
      position: 'absolute',
      bottom: 0,
      justifyContent: 'flex-end',
      backgroundColor:"rgba(255, 255, 255, 0.4)",
      borderRadius:10
  
    }
  });
  
