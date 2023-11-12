import { Stack, TextInput } from "@react-native-material/core";
import React, { useState } from "react";
import { Dimensions, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { supabase, supabaseAdmin } from "../../lib/supabase";
import { useNavigation } from "@react-navigation/native";
import { Input, Button } from "@rneui/themed";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native";

export default function EditAdmin({ route }) {
	const { email, school_id, school_name, id } = route.params;
	const navigation = useNavigation();
	console.log(id);
	const [form, setForm] = useState({
		email,
		school_id,
		school_name,
	});
	const [showPass, setShowPass] = useState(false);
	const [editEmail, setEditEmail] = useState(email);
	const [editSchoolId, setEditSchoolId] = useState(school_id);
	const [editSchoolName, setEditSchoolName] = useState(school_name);
	const [updating, setUpdating] = useState(false);
	const [newPass, setNewPass] = useState("");

	const [formErr, setFormErr] = useState({
		school_id: "",
		email: "",
		school_name: "",
	});

	const validation = () => {
		if (editSchoolId == "") {
			setFormErr((err) => ({ ...err, school_id: "Required School ID" }));
		} else {
			setFormErr((err) => ({ ...err, school_id: "" }));
		}
		if (String(editSchoolId).length < 6) {
			setFormErr((err) => ({ ...err, school_id: "Invalid School ID" }));
		} else {
			setFormErr((err) => ({ ...err, school_id: "" }));
		}
		if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(editEmail)) {
			setFormErr((err) => ({ ...err, email: "Invalid Email" }));
		} else {
			setFormErr((err) => ({ ...err, email: "" }));
		}
		if (editEmail == "") {
			setFormErr((err) => ({ ...err, email: "Required Email" }));
		} else {
			setFormErr((err) => ({ ...err, email: "" }));
		}
		if (editSchoolName == "") {
			setFormErr((err) => ({ ...err, school_name: "Required School Name" }));
		} else {
			setFormErr((err) => ({ ...err, school_name: "" }));
		}
	};

	return (
		<SafeAreaView>
			<ScrollView
				contentContainerStyle={{
					padding: 30,
					justifyContent: "center",
					alignItems: "center",
				}}>
				<Stack spacing={50} direction="column" minW={"100%"}>
					<View>
						<Input
							label="Email"
							errorMessage={formErr.email && formErr.email}
							value={editEmail}
							onChangeText={(text) => setEditEmail(text)}
						/>
					</View>
					{/* <TextInput
						label="Email"
						value={editEmail}
						onChangeText={(text) => setEditEmail(text)}
						variant="standard"
						color="#00667E"
						helperText={formErr.email && formErr.email}
					/> */}
					<View>
						<Input
							label="School Name"
							value={editSchoolName}
							onChangeText={(text) => setEditSchoolName(text)}
							errorMessage={formErr.school_name && formErr.school_name}
						/>
					</View>
					{/* <TextInput
						label="School Name"
						value={editSchoolName}
						onChangeText={(text) => setEditSchoolName(text)}
						variant="standard"
						color="#00667E"
						helperText={formErr.school_name && formErr.school_name}
					/> */}

					<View>
						<Input
							label="School ID"
							errorMessage={formErr.school_id && formErr.school_id}
							onChangeText={(text) => {
								if (/^\d+$/.test(text) || !text) {
									setEditSchoolId(text);
								}
							}}
							keyboardType="decimal-pad"
							maxLength={6}
							value={editSchoolId}
						/>
					</View>
					{/* <TextInput
						label="School ID"
						color="#00667E"
						value={editSchoolId}
						maxLength={6}
						// style}
						helperText={formErr.school_id && formErr.school_id}
						onChangeText={(text) => {
							if (/^\d+$/.test(text) || !text) {
								setEditSchoolId(text);
							}
						}}
						variant="standard"
						keyboardType="decimal-pad"
					/> */}

					<View>
						<Input
							// style={{ width: "100%", backgroundColor: "red" }}
							inputContainerStyle={{ width: "100%" }}
							onChangeText={(text) => setNewPass(text)}
							errorMessage={formErr.password && formErr.password}
							value={newPass}
							label="Password"
							secureTextEntry={!showPass}
							rightIcon={() => (
								<TouchableOpacity onPress={() => setShowPass((p) => !p)}>
									<FontAwesome5Icon
										name={!showPass ? "eye-slash" : "eye"}
										size={20}
										color="#344E41"
									/>
								</TouchableOpacity>
							)}
						/>
					</View>

					<Button
						onPress={async () => {
							validation();

							setUpdating(true);
							if (editSchoolId != school_id) {
								const { data } = await supabase
									.from("administrator")
									.select("school_id");
								console.log(data);
								console.log("================================================");
								const isExist = data.find(
									(item) => item.school_id == editSchoolId
								);
								console.log(isExist);
								if (isExist) {
									setFormErr((p) => ({
										...p,
										school_id: "School ID is not valid",
									}));
									setUpdating(false);
									return;
								}
							}

							if (
								formErr.school_id ||
								formErr.email ||
								formErr.school_name ||
								editSchoolId.length < 6 ||
								!editSchoolId ||
								!editEmail ||
								!editSchoolName
							) {
								setUpdating(false);
								return;
							}
							// let userData;
							// let userError

							if (email != editEmail) {
								const { data, error } = await supabaseAdmin.updateUserById(id, {
									email: editEmail,
								});
								if (error) {
									setUpdating(false);
									alert(error.message);
									return console.log(error.message);
								}

								console.log(
									"___________________________________________________ UPDATE EMAIl"
								);
								console.log(data);
							}

							if (newPass != "") {
								const { error: userError, data } =
									await supabaseAdmin.updateUserById(id, {
										password: newPass,
									});

								if (userError) {
									alert(userError.message);
									setUpdating(false);
									return console.log(userError.message);
								}

								console.log(
									"___________________________________________________ UPDATE PASSWORD________________________"
								);
								console.log(data);
							}

							const { data, error } = await supabase
								.from("administrator")
								.update({
									email: editEmail,
									school_id: editSchoolId,
									school_name: editSchoolName,
								})
								.eq("id", id);

							if (error) {
								alert(error.message);
								setUpdating(false);
								return console.log(error.message);
							}
							setUpdating(false);

							navigation.navigate("subAdmin");
						}}
						loading={updating}
						disableElevation={updating}
						style={{
							backgroundColor: updating ? "#00667E80" : "#00667E",
						}}
						// loadingIndicator="Updating Admin Data..."
						title={updating ? "Updating" : "Update"}
					/>
				</Stack>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	input: {
		backgroundColor: "#FFF",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		width: "100%",
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		padding: 5,
		paddingHorizontal: 10,
		elevation: 3,
	},
});
