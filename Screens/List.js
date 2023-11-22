import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from
	"react-navigation-material-bottom-tabs";
	import { Feather,FontAwesome } from '@expo/vector-icons'; 

import Page1 from "./Page1";
import Profile from "./Profile";
import SettingScreen from "./SettingScreen";
import HomeDashboard from "./HomeDashboard";


const TabNavigator = createMaterialBottomTabNavigator(
{
	HomeDashboard: {
	screen: HomeDashboard,
	navigationOptions: {
		tabBarLabel: "Home",
		tabBarIcon: (tabInfo) => (
		<Ionicons
			name="md-home"
			size={tabInfo.focused ? 26 : 20}
			color={tabInfo.tintColor}
		/>
		),
	},
	},
	FavList: {
		screen: Profile,
		navigationOptions: {
			tabBarLabel: "Lists",
			tabBarIcon: (tabInfo) => (
				<Feather name="list" size={24} color="black" />
			),
		},
		},
	User: {
	screen: Profile,
	navigationOptions: {
		tabBarLabel: "Profile",
		tabBarIcon: (tabInfo) => (
			<FontAwesome name="user" size={tabInfo.focused ? 26 : 20} color={tabInfo.tintColor} />
		),
	},
	},
	Setting: {
	screen: SettingScreen,
	navigationOptions: {
		tabBarLabel: "Setting",
		tabBarIcon: (tabInfo) => (
		<Ionicons
			name="md-settings-outline"
			size={tabInfo.focused ? 26 : 20}
			color={tabInfo.tintColor}
		/>
		),
	},
	},
},
{
	initialRouteName: "HomeDashboard",
	barStyle: { backgroundColor: "#ffffff" },
}
);

const Navigator = createAppContainer(TabNavigator);

export default function List() {
return (
	<Navigator>
	<HomeDashboard />
	</Navigator>
);
}

