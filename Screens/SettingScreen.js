import React from "react";
import { useState } from 'react';
import { Text, View, Switch, SafeAreaView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const SettingScreen = () => {
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled(previousState => !previousState);

	return (
		<SafeAreaView>
			<Text style={{ marginHorizontal: 30, marginTop: 20, fontSize: 26 }}>settings</Text>
			<View style={{ height: 45, width: '90%', backgroundColor: 'white', flexDirection: 'row', marginTop: 30, marginHorizontal: 20, borderRadius: 20 }}>
				<Ionicons name="notifications" size={24} color="black" style={{ marginTop: 10, marginHorizontal: 15 }} />
				<Text style={{ marginTop: 10, fontSize: 18, color: "#656565" }}>Notifications</Text>
				<Switch style={{marginHorizontal:120,marginTop:8}}
					trackColor={{ false: '#767577', true: '#656565' }}
					thumbColor={isEnabled ? '#DAEFED' : '#f4f3f4'}
					ios_backgroundColor="#3e3e3e"
					onValueChange={toggleSwitch}
					value={isEnabled}
				/>
			</View>
			
			<TouchableOpacity style={{ height: 45, width: '90%', backgroundColor: 'white', flexDirection: 'row', marginTop: 14, marginHorizontal: 20, borderRadius: 20 }}>
			<FontAwesome name="language" size={24} color="black"  style={{marginTop:10,marginHorizontal:15}}/>
			<Text style={{ marginTop: 10, fontSize: 18, color: "#656565" }}>Select Language</Text>
			</TouchableOpacity>
			<TouchableOpacity style={{ height: 45, width: '90%', backgroundColor: 'white', flexDirection: 'row', marginTop: 14, marginHorizontal: 20, borderRadius: 20 }}>
			<Ionicons name="ios-people-outline" size={24} color="black"   style={{marginTop:10,marginHorizontal:15}}/>
			<Text style={{ marginTop: 10, fontSize: 18, color: "#656565" }}>About Us</Text>
			</TouchableOpacity>



			<TouchableOpacity style={{ height: 45, width: '90%', backgroundColor: 'white', flexDirection: 'row', marginTop: 14, marginHorizontal: 20, borderRadius: 20 }}>
			<MaterialIcons name="contact-support" size={26} color="black" style={{marginTop:10,marginHorizontal:15}}/>
			<Text style={{ marginTop: 10, fontSize: 18, color: "#656565" }}>Help & Support</Text>
			</TouchableOpacity>
		</SafeAreaView>

	);
};

export default SettingScreen;
