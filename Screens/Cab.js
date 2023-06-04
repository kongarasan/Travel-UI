

import { useState } from "react";
import { View, SafeAreaView, FlatList, Text, Image, TouchableOpacity, ScrollView, Modal, Pressable, StyleSheet, KeyboardAvoidingView } from "react-native";




import { COLORS, NFTData, assets, SHADOWS, FONTS } from '../constants';
import { NFTcard, HomeHeader, FocusedStatesBar } from '../components';
import { FontAwesome, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import DateCard from "../components/DateCard";
import TimeSlot from "../components/TimeSlot";
import { Dropdown } from 'react-native-element-dropdown';
import Lottie from 'lottie-react-native';
import MapView from 'react-native-maps';
const Cab = () => {
  return (
    <MapView style={{justifyContent:"center",alignItems:'center'}} >
  initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
</MapView>
  )
}

export default Cab