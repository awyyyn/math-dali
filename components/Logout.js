import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dialog, Icon } from "react-native-elements";
import { useContext } from "react";
import { SettingsContext } from "../context/AppContext";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { supabase } from "../lib/supabase";

export default function Logout() {
	const navigation = useNavigation();
	const { setLogoutState, logoutState, session, setSession } =
		useContext(SettingsContext);
	const [delay, setDelay] = useState(false);
	console.log(logoutState);

	return (
		<>
			<TouchableOpacity
				onPress={async () => {
					setLogoutState(true);
					// if (session?.user?.email == "christian.dimasayao@gmail.com") {
					// 	navigation.navigate("Home");
					// 	setSession({ session: null });
					// 	await supabase.auth.signOut();
					// 	return;
					// }
					// setDelay(true);
					// setSession({ session: null });
					// await supabase.auth.signOut();
					// setTimeout(() => {
					// 	navigation.navigate("Onboarding");
					// 	setDelay(false);
					// }, 2000);
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
			<Dialog isVisible={logoutState} onDismiss={() => setLogoutState(false)}>
				{/* <Dialog.Title title="" /> */}
				<Text style={styles.logoutText}>Continue log out?</Text>
				<Dialog.Actions>
					<Dialog.Button
						title="Yes"
						buttonStyle={styles.buttons}
						titleStyle={{ color: "#ff686b" }}
						onPress={async () => {
							setLogoutState(false);
							navigation.navigate("Home");
							setSession({ session: null });
							await supabase.auth.signOut();
						}}
					/>
					<Dialog.Button
						title="No"
						onPress={() => setLogoutState(false)}
						buttonStyle={[styles.buttons]}
						titleStyle={{ color: "#004E64" }}
					/>
				</Dialog.Actions>
			</Dialog>
		</>
	);
}

const styles = StyleSheet.create({
	buttons: {
		minWidth: 70,
	},
	logoutText: {
		fontSize: 18,
		fontWeight: "bold",
		paddingTop: 10,
	},
});
