import { useState } from "react";
import { View, SafeAreaView, FlatList, Text, Image, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { BlurView } from "@react-native-community/blur";
import LocationCard from "../components/LocationCard";
import ClothTypes from "../components/ClothTypes";
import { Modal, Pressable, KeyboardAvoidingView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Lottie from 'lottie-react-native';

import { COLORS, NFTData, assets, SHADOWS, FONTS } from '../constants';
import { NFTcard, HomeHeader, FocusedStatesBar } from '../components';
const Laundary = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const [type, setClothTypes] = useState(true)
    const [modelView, setModelView] = useState(true)
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
                            <Text style={{ fontSize: 20, color: "#FFFFFF", marginTop: 14, marginHorizontal: 18, textAlign: 'center' }}>Wash and Iron</Text>

                        </View>
                        <Image style={{ height: 93, width: 118, marginHorizontal: 19, marginTop: 25 }} source={require('../assets/images/washiron.png')}></Image>
                    </View>
                    <View style={{ height: 170, width: 170, backgroundColor: "#B7E2F0", borderRadius: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Text style={{ fontSize: 20, color: "#FFFFFF", marginTop: 14, marginHorizontal: 18 }}>Dry Clean</Text>

                        </View>

                        <Image style={{ height: 80, width: 118, marginTop: 35, marginHorizontal: 53 }} source={require('../assets/images/dryclean.png')}></Image>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 24 }}>
                    <View style={{ height: 170, width: 170, backgroundColor: "#FE9789", borderRadius: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Text style={{ fontSize: 20, color: "#FFFFFF", marginTop: 14, marginHorizontal: 18 }}>Ironing</Text>

                        </View>
                        <Image style={{ height: 110, width: 80, marginTop: 12, marginHorizontal: 35, }} source={require('../assets/images/ironing.png')}></Image>
                    </View>
                    <View style={{ height: 170, width: 170, backgroundColor: "#F5C57F", borderRadius: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Text style={{ fontSize: 20, color: "#FFFFFF", marginTop: 12, marginHorizontal: 12 }}>Chemical Wash</Text>

                        </View>

                        <Image style={{ height: 90, width: 130, marginTop: 30, marginHorizontal: 30 }} source={require('../assets/images/chemicalwash.png')}></Image>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 18, marginTop: 32, marginHorizontal: 16 }}>Select the category</Text>
                    <Text style={{ fontSize: 18, marginTop: 32, marginHorizontal: 46 }}>Total:</Text>
                    <Text style={{ fontSize: 18, marginTop: 32, marginHorizontal: -40, color: "#319B3C" }}>₹180</Text>
                </View>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ marginTop: 22, height: 200, flexGrow: 0 }} >
                    <ClothTypes type="Tees" count="10" />
                    <ClothTypes type="Jeans" count="12" />
                    <ClothTypes type="Bedsheet" count="2" />
                    <ClothTypes type="Cotton" count="6" />

                </ScrollView>
                <Text style={{ fontSize: 18, marginTop: 20, marginHorizontal: 16 }}>Pick up estimate</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 18, marginTop: 32, marginHorizontal: 16, color: "#656565" }}>May 05, 2023</Text>
                    <Text style={{ fontSize: 18, marginTop: 32, marginHorizontal: 52, color: "#656565" }}>8:00 - 8:30 a.m.</Text>

                </View>
                <Text style={{ fontSize: 18, marginTop: 32, marginHorizontal: 16 }}>Delivered by</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 18, marginTop: 32, marginHorizontal: 16, color: "#656565" }}>2-3 working days</Text>
                    <BouncyCheckbox
                        size={25}
                        fillColor="black"
                        unfillColor="#FFFFFF"
                        iconStyle={{ borderColor: "red" }}
                        innerIconStyle={{ borderWidth: 2 }}
                        onPress={(isChecked) => { }}
                        marginHorizontal={30}
                        marginTop={32}
                    />
                    <Text style={{ fontSize: 18, marginTop: 32, color: "#656565", marginHorizontal: -40 }}>Tomorrow ₹(50)</Text>
                </View>
                <TouchableOpacity
                    onPress={() => { setModalVisible(true) }}
                    style={{ height: 50, width: 220, backgroundColor: "black", borderRadius: 10, marginTop: 24, marginHorizontal: 90, flexDirection: 'row' }}>

                    <Text
                        style={{ color: "white", fontSize: 20, marginTop: 12, marginHorizontal: 50 }}>Place Order</Text>
                </TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {

                        setModalVisible(!modalVisible);
                    }}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 22,
                    }}>
                        {modelView == true ? <View style={{
                            margin: 20,
                            backgroundColor: 'white',
                            borderRadius: 20,
                            paddingVertical: 35,
                            paddingHorizontal: 20,
                            alignItems: 'center',
                            shadowColor: '#000',
                            height: 289,
                            width: 326,
                        }}>
                        <Image  style={{height:59,width:78}}source={require('../assets/images/undraw.png')}></Image>
                            <Text style={{ fontSize: 20 ,marginTop:40 }}>Book laundry service on</Text>
                            <Text style={{ fontSize: 20 ,color:'#98A3F4'  }}> May05,2023 at 8:00-8:30 a.m</Text>

                            <View style={{ flexDirection: 'row', marginTop:20, alignItems: 'center', justifyContent: "space-between", width: '100%' }}>
                                <Pressable
                                    style={{
                                        borderRadius: 20,
                                        padding: 10,
                                        elevation: 2,
                                        backgroundColor: '#F5F5F5',
                                        height: 52,
                                        width: "45%",
                                        Right: 8

                                    }}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 6, color: "#B5B5B5" }}>Cancel</Text>
                                </Pressable>
                                <Pressable
                                    style={{
                                        borderRadius: 20,
                                        padding: 10,
                                        elevation: 2,
                                        backgroundColor: '#000000',
                                        height: 52,
                                        width: "45%"
                                    }}
                                    onPress={() => {
                                        setModelView(false)

                                    }}>
                                    <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 6, color: "white" }}>Book</Text>
                                </Pressable>

                            </View>
                        </View> : <View style={{
                            margin: 20,
                            backgroundColor: 'white',
                            borderRadius: 20,
                            paddingVertical: 35,
                            paddingHorizontal: 20,
                            alignItems: 'center',
                            shadowColor: '#000',
                            height: 289,
                            width: 326,
                        }}>
                            <Lottie style={{ height: 97, width: 97 }}
                                source={require('../assets/images/completed.json')} autoPlay loop
                            ></Lottie>
                            <Text style={{ fontSize: 18 }}>Booking completed</Text>
                            <Text style={{ justifyContent: 'center', textAlign: 'center', marginTop: 15 }}>A QR for your booking will be on {'\n'}your activity page</Text>
                            <TouchableOpacity style={{ height: 54, width: 150, backgroundColor: 'black', borderRadius: 10, marginTop: 20 }}
                                onPress={() => {
                                    setModalVisible(!modalVisible)
                                    setModelView(true)
                                }}>
                                <Text style={{ textAlign: 'center', marginTop: 14, fontSize: 18, color: 'white' }}>Okay</Text>
                            </TouchableOpacity>
                        </View>
                        }

                    </View>
                </Modal>
            </ScrollView>
        </SafeAreaView>

    )
}
export default Laundary;


