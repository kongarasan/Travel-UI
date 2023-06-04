import { useState } from "react";
import { View, SafeAreaView, FlatList, Text, Image, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { BlurView } from "@react-native-community/blur";
import LocationCard from "../components/LocationCard";

import { COLORS, NFTData, assets, SHADOWS, FONTS } from '../constants';
import { NFTcard, HomeHeader, FocusedStatesBar } from '../components';
const Laundary = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ marginRight: 20, marginTop: 0, flexDirection: "row", marginLeft: 20 }}>
                    <Image style={{ height: 48, width: 48 }}
                        source={require('../assets/images/person03.png')}></Image>
                    <Text style={{ fontSize: 20, marginTop: 12, marginLeft: 10 }}>Hi,Maria</Text>
                    <TouchableOpacity>
                        <Image
                            style={{ height: 35, width: 35, marginLeft: 180, marginTop: 5 }}
                            source={require('../assets/images/bell.png')}></Image>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 26, textAlign: 'center', marginTop: 33 }}>Book a slot for your
                </Text>
                <Text style={{ fontSize: 26, textAlign: 'center', color: "#98A3F4" }}> Laundry Service 🧺
                </Text>


                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 24 }}>
                    <View style={{ height: 170, width: 170, backgroundColor: "#FFDE84", borderRadius: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Text style={{ fontSize: 20, color: "#FFFFFF", marginTop: 14, marginHorizontal: 18,textAlign:'center' }}>Wash and Iron</Text>

                        </View>
                        <Image style={{ height: 93, width: 118,marginHorizontal:19,marginTop:25 }} source={require('../assets/images/washiron.png')}></Image>
                    </View>
                    <View style={{ height: 170, width: 170, backgroundColor: "#B7E2F0", borderRadius: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Text style={{ fontSize: 20, color: "#FFFFFF", marginTop: 14, marginHorizontal: 18 }}>Dry Clean</Text>

                        </View>

                        <Image style={{ height: 80, width: 118, marginTop: 35,marginHorizontal:53}} source={require('../assets/images/dryclean.png')}></Image>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 24 }}>
                    <View style={{ height: 170, width: 170, backgroundColor: "#FE9789", borderRadius: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Text style={{ fontSize: 20, color: "#FFFFFF", marginTop: 14, marginHorizontal: 18 }}>Ironing</Text>

                        </View>
                        <Image style={{ height: 110, width: 80,marginTop:12,marginHorizontal:35,}} source={require('../assets/images/ironing.png')}></Image>
                    </View>
                    <View style={{ height: 170, width: 170, backgroundColor: "#F5C57F", borderRadius: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Text style={{ fontSize: 20, color: "#FFFFFF", marginTop: 12, marginHorizontal: 12 }}>Chemical Wash</Text>

                        </View>

                        <Image style={{ height: 90, width: 130, marginTop: 30,marginHorizontal:30 }} source={require('../assets/images/chemicalwash.png')}></Image>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}
export default Laundary;


