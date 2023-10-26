import { View, Text } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import { useContext } from "react";
import { SettingsContext } from "../context/AppContext";
import { useNavigation } from "@react-navigation/native";

export default function Logout() {
	const navigation = useNavigation();
	const { logout } = useContext(SettingsContext);
	const [delay, setDelay] = useState(false);

	return (
		<TouchableOpacity
			onPress={() => {
				setDelay(true);
				logout();
				setTimeout(() => {
					navigation.navigate("Onboarding");
					setDelay(false);
				}, 2000);
			}}
			style={{
				display: "flex",
				marginRight: 10,
				flexDirection: "row",
				gap: 5,
			}}>
			<Text style={{ color: "#ff686b" }}>
				{delay ? "Loading..." : "Log out"}
			</Text>
			<Icon name="logout" color="#ff686b" />
		</TouchableOpacity>
	);
}
