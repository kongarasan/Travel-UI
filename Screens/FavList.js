import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";


const FavList = () => {
	return (
		<ScrollView>
			<SafeAreaView>
				<View style={{ marginLeft: 10, marginTop: 0, flexDirection: "row" }}>
					<Image style={{ height: 48, width: 48 }}
						source={require('../assets/images/person03.png')}></Image>
					<Text style={{ fontSize: 20, marginTop: 12, marginLeft: 10 }}>Hi,Maria</Text>

				</View>
				<Text style={{ fontSize: 18, marginTop: 30, marginLeft: 20 }}>Your Activity</Text>
				<View style={{ height: 206, width: 350, marginTop: 30, backgroundColor: "#FFFFFF", marginLeft: 20, borderRadius: 20 }}>
					<View style={{ height: 128, width: 334, marginTop: 8, marginLeft: 8, backgroundColor: "#FFDF87", borderRadius: 20 }}>
						<View style={{ flexDirection: "row", marginTop: 10 }}>
							<Text style={{ marginLeft: 14, color: "#FFFFFF", fontSize: 16 }}>Cab Details</Text>
							<View style={{ height: 21, width: 64, backgroundColor: "#DFDFDF", marginLeft: 156, borderRadius: 6 }}>
								<Text style={{ fontSize: 12, marginLeft: 4, marginTop: 4 }}>Premium</Text>
							</View>
						</View>
						<View style={{ flexDirection: 'row' }}>
							<Image style={{ height: 76, width: 76, marginTop: 16, marginLeft: 16 }} source={require('../assets/images/thomas.png')}></Image>
							<Text style={{ marginTop: 32, marginLeft: 18, color: 'white' }}>Thomas Wayne</Text>
							<View style={{ height: 40, width: 40, borderRadius: 10, backgroundColor: "#FFFFFF", marginTop: 42, alignContent: 'center', justifyContent: 'center', marginLeft: 70 }}>
								<Ionicons name="call" size={24} color="black" style={{ marginHorizontal: 8 }} />
							</View>
						</View>
					</View>
					<Text style={{ marginTop: 6, marginHorizontal: 15, color: '#656565', fontSize: 14 }}>Will arrive at 8:00 AM</Text>
					<View style={{ flexDirection: 'row' }}>
						<Text style={{ fontSize: 20, color: "#319B3C", marginHorizontal: 20, marginTop: 10 }}>₹180.00</Text>
						<TouchableOpacity style={{ height: 32, width: 132, backgroundColor: "#E2E2E2", marginTop: 8, borderRadius: 8, marginHorizontal: 90, justifyContent: 'center' }}>
							<Text style={{ textAlign: "center", fontSize: 16 }}>Cancel</Text>
						</TouchableOpacity>
					</View>
				</View>



				<View style={{ height: 206, width: 350, marginTop: 20, backgroundColor: "#FFFFFF", marginLeft: 20, borderRadius: 20 }}>
					<View style={{ height: 128, width: 334, marginTop: 8, marginLeft: 8, backgroundColor: "#369ABB", borderRadius: 20 }}>
						<View style={{ flexDirection: "row", marginTop: 10 }}>
							<Text style={{ marginLeft: 14, color: "#FFFFFF", fontSize: 16 }}>Laundry Servce</Text>

							<Text style={{ fontSize: 12, marginLeft: 110, color: "white", marginTop: 4 }}>Dry cleaning</Text>

						</View>
						<View style={{ flexDirection: 'row' }}>
							<Image style={{ height: 76, width: 76, marginTop: 16, marginLeft: 16 }} source={require('../assets/images/bruce.png')}></Image>
							<Text style={{ marginTop: 32, marginLeft: 18, color: 'white' }}>Bruce wayne</Text>
							<View style={{ height: 40, width: 40, borderRadius: 10, backgroundColor: "#FFFFFF", marginTop: 42, alignContent: 'center', justifyContent: 'center', marginLeft: 70 }}>
								<Ionicons name="call" size={24} color="black" style={{ marginHorizontal: 8 }} />
							</View>
						</View>
					</View>
					<Text style={{ marginTop: 6, marginHorizontal: 15, color: '#656565', fontSize: 14 }}>Will arrive at 8:00 AM</Text>
					<View style={{ flexDirection: 'row' }}>
						<Text style={{ fontSize: 20, color: "#319B3C", marginHorizontal: 20, marginTop: 10 }}>₹180.00</Text>
						<TouchableOpacity style={{ height: 32, width: 132, backgroundColor: "#E2E2E2", marginTop: 8, borderRadius: 8, marginHorizontal: 90, justifyContent: 'center' }}>
							<Text style={{ textAlign: "center", fontSize: 16 }}>Cancel</Text>
						</TouchableOpacity>
					</View>
				</View>
			</SafeAreaView>
		</ScrollView>


	);
};

export default FavList;