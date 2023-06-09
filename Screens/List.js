import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from
	"react-navigation-material-bottom-tabs";

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
	User: {
	screen: Profile,
	navigationOptions: {
		tabBarLabel: "User",
		tabBarIcon: (tabInfo) => (
		<Ionicons
			name="md-person-circle-outline"
			size={tabInfo.focused ? 26 : 20}
			color={tabInfo.tintColor}
		/>
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

