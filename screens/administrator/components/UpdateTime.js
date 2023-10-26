import { useEffect, useState } from "react";
import { View, Text, Dimensions } from "react-native";
import { Dialog, Input } from "react-native-elements";
import styles from "../styles";
import { supabase } from "../../../lib/supabase";

export default function UpdateTime({ isOpen, handleClose, time, id }) {
	// const { session }
	const [inputTime, setTime] = useState("");
	const [loading, setLoading] = useState(false);

	console.log(inputTime);

	return (
		<Dialog isVisible={isOpen} onBackdropPress={handleClose}>
			<Text
				style={{
					fontSize: (Dimensions.get("window").fontScale = 15),
					marginVertical: 15,
				}}>
				Enter time in seconds
			</Text>
			<Input
				style={{ textAlign: "center", fontSize: 30, letterSpacing: 30 }}
				keyboardType="decimal-pad"
				value={inputTime}
				onChangeText={(txt) => setTime(Number(txt))}
			/>
			<Dialog.Actions>
				<Dialog.Button
					title={"Update"}
					titleStyle={{ color: "#FFF" }}
					buttonStyle={[
						styles.button,
						{
							backgroundColor: "#004E64",
						},
					]}
					loading={loading}
					onPress={async () => {
						setLoading(true);
						const { data, error } = await supabase
							.from("category")
							.update({ time: inputTime })
							.eq("id", id);
						if (error) {
							alert(error.message);
							return;
						}
						setLoading(false);
						handleClose();
						console.log(data);
					}}
				/>
				<Dialog.Button
					title={"Cancel"}
					type="outline"
					titleStyle={{ color: "#FFF" }}
					buttonStyle={[styles.button, { backgroundColor: "#F00" }]}
					onPress={handleClose}
				/>
			</Dialog.Actions>
		</Dialog>
	);
}
