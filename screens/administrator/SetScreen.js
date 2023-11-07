import {
	TouchableOpacity,
	Image,
	View,
	ImageBackground,
	Dimensions,
	BackHandler,
} from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	RectButton,
	RefreshControl,
	ScrollView,
	Switch,
} from "react-native-gesture-handler";
import styles from "./styles";
import { CommonActions, StackActions } from "@react-navigation/native";
import { Dialog, Icon, Text } from "@rneui/themed";
import { useEffect, useCallback } from "react";
import Table, { Section, StaticCell, Cell } from "react-native-js-tableview";
import AddButton from "./components/AddButton";
import { supabase } from "../../lib/supabase";
import TableHeader from "./components/TableHeader";
import TableFooter from "./components/TableFooter";
import DeleteDialog from "./components/DeleteDialog";
import EditDialog from "./components/EditDialog";
import SkeletonQuestion from "./components/SkeletonQuestion";
import { Snackbar, Stack } from "@react-native-material/core";
import { SettingsContext } from "../../context/AppContext";
import UpdateTime from "./components/UpdateTime";

export default function SetScreen({ route, navigation }) {
	const {
		setNumber,
		value,
		isTrue,
		category,
		snackBar,
		q,
		schoolId,
		schoolName,
	} = route.params;
	const [loading, setLoading] = useState(isTrue);
	const { session, schoolInfo } = useContext(SettingsContext);
	const [refresh, setRefresh] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [notif, setNotif] = useState("");
	const [numberOfQuestions, setNumberOfQuestions] = useState(0);
	const [timeModal, setTimeModal] = useState(false);
	const [activeQuestions, setActiveQuestions] = useState();
	const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false);
	const [question, setQuestion] = useState({
		id: "",
		question: "",
		solution: "",
		answer: "",
		is_active: "",
	});
	const [toUpdateCategory, setToUpdateCategory] = useState({
		category,
		schoolId,
		seconds: "",
		id: "",
	});

	const handleAddQuestion = () => {
		if (numberOfQuestions == 100) {
			setNotif("You can only add 7 questions per set!");
			setTimeout(() => {
				setNotif("");
			}, 3000);
		} else {
			navigation.navigate("AddQuestion", {
				category,
				setNumber,
				value,
				isTrue,
				snackBar,
				schoolId,
				schoolName,
			});
		}
	};

	async function getData() {
		const { data, error } = await supabase
			.from("category")
			.select(`*, questions(*, options(*))`)
			.match({
				level: setNumber,
				school_id: Number(schoolId),
				category,
			})
			.single();

		if (error) {
			console.log(error);
		}

		setToUpdateCategory((pre) => ({
			...pre,
			seconds: data?.time,
			id: data?.id,
		}));

		setQuestions(
			data?.questions.sort((a, b) => {
				const timestampA = new Date(a.created_at);
				const timestampB = new Date(b.created_at);

				return timestampA - timestampB;
			})
		);
		// console.log(data);
		// setQuestions()

		setActiveQuestions(
			data?.questions.filter((q) => q.is_active == true).length
		);

		setNumberOfQuestions(data?.questions.length);

		setLoading(false);
	}

	const getRealTime = useCallback(() => {
		const backAction = () => {
			navigation.dispatch(StackActions.pop(1));
			return true;
		};

		const backHandler = BackHandler.addEventListener(
			"hardwareBackPress",
			backAction
		);

		const subscribe = supabase
			.channel("any")
			.on(
				"postgres_changes",
				{ event: "*", schema: "public", table: "questions" },
				(payload) => {
					getData();
				}
			)
			.subscribe();
		// .on('postgres_changes', {event: 'INSERT', schema: 'public', table: 'questions'}, (payload => getData()))
		return () => {
			subscribe.unsubscribe();
			backHandler.remove();
		};
	}, []);

	useEffect(() => {
		getData();
		getRealTime();
	}, [timeModal]);

	useEffect(() => {
		navigation.setOptions({
			title: `${category} ` + value, // Initial title
		});

		getData();
	}, [setNumber, value]);

	useEffect(() => {
		setNotif(snackBar);

		setTimeout(() => {
			setNotif("");
			navigation.dispatch(CommonActions.setParams({ snackBar: "" }));
		}, 3000);
	}, [snackBar]);

	const handleRefresh = () => {
		setRefresh(true);
		getData();
		setRefresh(false);
	};

	const handleSwitch = async (e, id, value) => {
		// console.log(value);
		console.log(value, "VALUE");
		// console.log(e);
		if (activeQuestions == 5 && value == true) {
			setNotif("Minimum Active Question is 5!");
			setTimeout(() => {
				setNotif("");
			}, 3000);
		} else {
			if (value == true) {
				setActiveQuestions((p) => p - 1);
			} else {
				setActiveQuestions((p) => p + 1);
			}
			setQuestions((prev) =>
				prev
					.map((question) => {
						if (question.id === id) {
							return {
								...question,
								is_active: !value,
								// Toggle is_active
							};
						} else {
							return question;
						}
					})
					.sort((a, b) => {
						const timestampA = new Date(a.created_at);
						const timestampB = new Date(b.created_at);
						return timestampA - timestampB;
					})
			);

			await supabase
				.from("questions")
				.update({ is_active: !value })
				.eq("id", id);
		}
	};

	const handleDialog = useCallback(
		(type, q) => {
			setQuestion({
				id: q.id,
				question: q.question,
				solution: q.solution,
				answer: q.answer,
				is_active: q.is_active,
			});

			if (type == "edit") {
				navigation.navigate("EditData", {
					question: q,
					category,
					setNumber,
					value,
					isTrue,
					snackBar,
				});
			} else {
				setIsOpenDeleteDialog(true);
			}
		},
		[question.id]
	);

	const handleDelete = () => {
		setNotif("Question deleted successfully!");
		setTimeout(() => {
			setNotif("");
		}, 3000);
	};

	return (
		<>
			<ImageBackground
				source={require("../../assets/bg.jpg")}
				imageStyle={{ opacity: 0.1, height: Dimensions.get("screen").height }}>
				{notif && (
					<Snackbar
						elevation={10}
						message={notif}
						style={{
							zIndex: 99,
							position: "absolute",
							start: 80,
							end: 16,
							top: 16,
							backgroundColor: "#004E64",
						}}
					/>
				)}
				{loading ? (
					<>
						<View style={{ paddingVertical: 15, paddingHorizontal: 20 }}>
							<SkeletonQuestion />
						</View>
					</>
				) : (
					<>
						<View style={{ paddingVertical: 15, paddingHorizontal: 20 }}>
							<View
								style={[styles.row, styles.flexCenter, styles.spaceBetween]}>
								<Text h1>{value}</Text>
								<AddButton
									value="Add Question"
									handleClick={handleAddQuestion}
								/>
							</View>
							<Stack direction="row" justify="between" mt={10}>
								<Text style={{ fontSize: 20 }}>Active Question</Text>
								<Text style={{ fontSize: 20 }}>
									{activeQuestions}/{numberOfQuestions}
								</Text>
							</Stack>

							<Stack mt={2} direction="row" justify="between">
								<Text style={{ fontSize: 20 }}>Time {/* (seconds) */}</Text>
								<TouchableOpacity
									onPress={() => {
										console.log("update time");
										setTimeModal(true);
									}}>
									<Text style={{ fontSize: 20 }}>
										{toUpdateCategory.seconds}`s
									</Text>
								</TouchableOpacity>
							</Stack>
						</View>

						<ScrollView
							contentContainerStyle={{
								paddingVertical: 15,
								paddingHorizontal: 20,
								paddingBottom: 140,
							}}
							refreshControl={
								<RefreshControl
									refreshing={refresh}
									onRefresh={handleRefresh}
								/>
							}>
							{!questions ? (
								<>
									<Image
										style={{ width: "100%", height: 400, marginTop: "10%" }}
										source={require("../../assets/no-data.png")}
									/>
									{/* <Text>No Data</Text> */}
								</>
							) : (
								<View>
									{questions?.map((question, i) => (
										<Table
											key={question.id}
											style={{
												backgroundColor: "transparent",
												marginVertical: 20,
											}}>
											<Cell
												key={i + 5}
												style={{
													display: "flex",
													flexDirection: "row",
													marginBottom: -20,
													justifyContent: "space-between",
												}}>
												<View style={[styles.row, styles.flexCenter]}>
													<Text>On/Off</Text>
													<Switch
														value={question.is_active}
														onChange={(e) => {
															handleSwitch(e, question.id, question.is_active);
														}}
													/>
												</View>
												<TouchableOpacity
													style={[styles.row, styles.flexCenter]}
													onPress={() => handleDialog("edit", question)}>
													<Text>Edit</Text>
													<Icon name="edit" color="#61C364" />
													{/* <Switch  />   */}
												</TouchableOpacity>
												<TouchableOpacity
													style={[styles.row, styles.flexCenter]}
													onPress={() => handleDialog("delete", question)}>
													<Text>Delete</Text>
													<Icon name="delete" color="#FF0000" />
													{/* <Switch  />   */}
												</TouchableOpacity>
											</Cell>

											<Section
												mode="grouped"
												key={i + 1}
												header={question.question}
												headerComponent={
													<TableHeader
														key={i + 2}
														question={question.question}
														number={i + 1}
													/>
												}
												footerComponent={
													<TableFooter
														key={i + 3}
														solution={question.solution}
													/>
												}>
												{question.options?.map(({ option, id }, k) => (
													<StaticCell
														key={k}
														title={`${
															k == 0
																? "a."
																: k == 1
																? "b."
																: k == 2
																? "c."
																: "d."
														} ${option}`}
														accessory={`${
															option == question.answer ? "checkmark" : ""
														}`}
													/>
												))}
											</Section>
										</Table>
									))}
								</View>
							)}
						</ScrollView>
					</>
				)}

				{/* DIALOG */}
				<DeleteDialog
					deleteDialog={handleDelete}
					isOpen={isOpenDeleteDialog}
					handleClose={() => setIsOpenDeleteDialog(false)}
					id={question.id}
				/>
				<UpdateTime
					isOpen={timeModal}
					handleClose={() => setTimeModal(false)}
					id={toUpdateCategory.id}
					time={toUpdateCategory.seconds}
				/>
			</ImageBackground>
		</>
	);
}
