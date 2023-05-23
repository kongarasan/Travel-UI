import { useState } from "react";
import { View, SafeAreaView, FlatList, Text, Image, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { BlurView } from "@react-native-community/blur";
import LocationCard from "../components/LocationCard";

import { COLORS, NFTData, assets, SHADOWS, FONTS } from '../constants';
import { NFTcard, HomeHeader, FocusedStatesBar } from '../components';
const Page1 = ({ navigation }) => {
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
      <Text style={{ fontSize: 16, marginTop: 20, marginRight: 250 }}>Our Services</Text>

      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 85 }}>
        <TouchableOpacity style={{ justifyContent: "center", flexDirection: "row" }}>
          <View style={{ height: 60, width: "90%", backgroundColor: "#F5F5F5", marginTop: 20, borderRadius: 20, flexDirection: "row", alignItems: "center" }}>
            <Image style={{ height: 60, width: "40%", borderRadius: 8, marginTop: 5 }} source={require('../assets/images/cab.png')}></Image>
            <View>
              <Text style={{ color: "#939498", fontSize: 12, marginTop: 5 }}>Rental Servies</Text>
              <Text style={{ fontFamily: FONTS.bold, fontSize: 16, marginTop: 2 }}>Cab/Bus</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ height: 60, width: "100%", backgroundColor: "#F5F5F5", marginTop: 20, borderRadius: 20, flexDirection: "row", alignItems: "center" }}>
            <Image style={{ height: 60, width: "40%", borderRadius: 8, marginTop: 5 }} source={require('../assets/images/hostels.png')}></Image>
            <View>
              <Text style={{ color: "#939498", fontSize: 12, marginTop: 5 }}>Hostels Servies</Text>
              <Text style={{ fontFamily: FONTS.bold, fontSize: 16, marginTop: 2 }}>Hostel/PG</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 85 }}>
        <TouchableOpacity style={{ justifyContent: "center", flexDirection: "row" }}>
          <View style={{ height: 60, width: "90%", backgroundColor: "#F5F5F5", marginTop: 20, borderRadius: 20, flexDirection: "row", alignItems: "center" }}>
            <Image style={{ height: 60, width: "40%", borderRadius: 8, marginTop: 5 }} source={require('../assets/images/food.png')}></Image>
            <View>
              <Text style={{ color: "#939498", fontSize: 12, marginTop: 5 }}>Food Servies</Text>
              <Text style={{ fontFamily: FONTS.bold, fontSize: 16, marginTop: 2 }}>Foods</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ height: 60, width: "100%", backgroundColor: "#F5F5F5", marginTop: 20, borderRadius: 20, flexDirection: "row", alignItems: "center" }}>
            <Image style={{ height: 60, width: "40%", borderRadius: 8, marginTop: 5 }} source={require('../assets/images/laundry.png')}></Image>
            <View>
              <Text style={{ color: "#939498", fontSize: 12, marginTop: 5 }}>Laundry Servies</Text>
              <Text style={{ fontFamily: FONTS.bold, fontSize: 16, marginTop: 2 }}>Laundry</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <LinearGradient colors={['#E79CAF', '#D254B1', '#0126E4', '#00C0EF']}
        style={{ height: 120, width: "90%", marginTop: 20, borderRadius: 20 }}>
        <Text style={{ fontSize: 16, color: "#FFFFFF", marginTop: 20, marginLeft: 20 }}>Wallet</Text>
        <Text style={{ fontSize: 16, color: "#FFFFFF", marginTop: 10, marginLeft: 20 }}>Available Balance</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 16, color: "#FFFFFF", marginTop: 10, marginLeft: 20 }}>$ 2000</Text>
          <TouchableOpacity>
            <View style={{ height: 45, width: "70%", backgroundColor: "#FEB1A7", marginLeft: 150, borderRadius: 20 }}>
              <Text style={{ color: "#FFFFFF", marginTop: 15, fontSize: 16, position: "absolute", paddingHorizontal: 35 }}>Add</Text>
            </View>



          </TouchableOpacity>
        </View>


      </LinearGradient>
      <View style={{ flexDirection: "row", paddingHorizontal: 20, marginTop: 20, alignItems: "center" }}>
        <Text style={{ fontSize: 16, paddingRight: 100 }}>Nearby Tourists places</Text>
        <Text style={{ fontSize: 16, color: "#939498", paddingRight: 5 }}>see all</Text>
        <AntDesign name="arrowright" size={24} color="#939498" />
      </View>
      {/* <View style={{ height:240, borderRadius: 10 ,marginTop:15}}>
        <Image style={{height:240,width:220,}}source={require('../assets/images/lake.png')} ></Image>
        <Ionicons name="heart-circle-outline" size={28} color="white" style={{top:12,right:15,position:'absolute'}}/>
       

       
       
     </View> */}
     <ScrollView horizontal={true} style={{marginTop:16}} >
      <LocationCard Image={assets.lake}/>
      <LocationCard Image={assets.lake2}/>
      <LocationCard Image={assets.lake}/>
      <LocationCard  Image={assets.lake2}/>

     </ScrollView>




    </SafeAreaView>

  )
}
export default Page1;


