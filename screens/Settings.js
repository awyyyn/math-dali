import {
	View,
	Pressable,
	TouchableOpacity,
	ImageBackground,
	Dimensions,
} from "react-native";
import { useContext, useEffect, useState } from "react";
import Layout from "./Layout";
import styles from "./styles";
import { SettingsContext } from "../context/AppContext";
import { Button, Icon, Text } from "@rneui/themed";
import { NavButton } from "../components";
import { TouchableHighlight } from "react-native-gesture-handler";
import { supabase } from "../lib/supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, StackActions } from "@react-navigation/native";

export default function Settings() {
	const navigation = useNavigation();

	const [pressed, setPressed] = useState(false);

	const { playSound, session, logout, mute, setIsLaunched } =
		useContext(SettingsContext);
	// console.log(session);
	const handleMute = async () => {
		playSound(!mute);
	};

	const icon = mute ? "volume-off" : "volume-up";

	return (
		<Layout>
			<ImageBackground
				style={[
					{
						alignItems: "center",
						justifyContent: "space-around",
						height: Dimensions.get("screen").height,
					},
					styles.homeContainer,
				]}
				imageStyle={{ objectFit: "fill" }}
				source={require("../assets/screens.png")}>
				<Text h3 style={{ color: "#004E64" }}>
					Volume {mute ? "Off" : "On"}
				</Text>
				{/* <TouchableHighlight onPressIn={() => setPressed(true)} onPressOut={() => setPressed(false)} style={{backgroundColor: 'transparent'}} containerStyle={{backgroundColor: 'transparent'}}>  */}
				<Icon
					name={icon}
					solid
					size={150}
					onPress={handleMute}
					color={mute ? "#004E64" : "#25A18E"}
					raised
					disabledStyle
					underlayColor="#FFFFFF01"
				/>
				{/* </TouchableHighlight> */}
				<View style={{ width: "70%", rowGap: 10 }}>
					<Button
						type="solid"
						buttonStyle={{ backgroundColor: "#25A18E" }}
						containerStyle={{ width: "100%" }}
						title={session.session ? "Dashboard" : "Sign in"}
						onPress={() =>
							navigation.navigate(session.session ? "Administrator" : "Sign in")
						}
					/>

					<Button
						type="clear"
						containerStyle={{ width: "100%" }}
						buttonStyle={{ backgroundColor: "#004E64" }}
						title={"Reset School Preference"}
						titleStyle={{ color: "#FFFFFF" }}
						onPress={async () => {
							await AsyncStorage.setItem("appLaunched", "");
							await AsyncStorage.multiRemove([
								"schoolId",
								"schoolName",
								"role",
							]);
							setIsLaunched("");
							navigation.dispatch({
								...StackActions.replace("Onboarding"),
							});
						}}
					/>
					<Button
						type="clear"
						containerStyle={{ width: "100%" }}
						title={"Home"}
						titleStyle={{ color: "#004E64" }}
						onPress={() => navigation.navigate("Home")}
					/>
				</View>
			</ImageBackground>
		</Layout>
	);
}
