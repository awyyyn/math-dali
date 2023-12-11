import { View, Dimensions, ImageBackground } from "react-native";
import { Button, Skeleton, Text } from "@rneui/themed";
import Layout from "./Layout";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";
import {
	beginnerLevel1,
	expertLevel1,
	intermediateLevel1,
} from "./defaultQuestions";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { numOfSets } from "../lib/helpers";
import styles from "./styles";
import { Stack } from "@react-native-material/core";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Levels({ route, navigation }) {
	const { category, color } = route.params;
	const level1 =
		category === "Beginner"
			? beginnerLevel1
			: category === "Intermediate"
			? intermediateLevel1
			: expertLevel1;
	const [levels, setLevels] = useState([level1]);
	const [loading, setLoading] = useState(false);
	const [refresh, setRefresh] = useState(false);
	const [c, setC] = useState(0);
	const seconds =
		category == "Beginner" ? 15 : category == "Intermediate" ? 30 : 45;

	// console.log()

	async function getData(refresh) {
		const code = await AsyncStorage.getItem("schoolId");
		if (refresh) {
			setRefresh(true);
		} else {
			setLoading(true);
		}
		const { data, error } = await supabase
			.from("category")
			.select(`*, questions( *, options(*) )`)
			.match({ category, school_id: code });

		console.log(data, "category");

		// console.log(data, "DASDAS");

		const shuffledArray = level1.sort(() => Math.random() - 0.5);
		const level1RandomFiveItems = shuffledArray.slice(0, 5);

		// eq("category", category);
		if (error) {
			setLevels([level1RandomFiveItems]);
			// alert(error.message);
			setRefresh(false);
			setLoading(false);
			return;
		}

		// console.log("sad");

		const newSet = data
			?.filter((a) => {
				return a?.questions.length >= 5;
			})
			?.map((i) => {
				return i.questions
					.filter((aa) => aa.is_active == true)
					?.flatMap((k) => {
						return {
							id: i.id,
							time: i.time,
							level: i.level,
							question: k.question,
							solution: k.solution,
							answer: k.answer,
							is_active: k.is_active,
							options: k.options.filter((optionD) => {
								return {
									option: optionD.option,
								};
							}),
						};
					});
			});

		// console.log(newSet);

		// const randomized = newSet.map((item) => {
		//     return item.sort((a, b) => 0.5 - Math.random())
		// });

		// const shuffuleItems = newSet.
		const newArrShuffledItems = newSet.map((i) => {
			const shuffle = i?.sort(() => Math.random() - 0.5);
			// return shuffle?.slice(0, 5);
			return shuffle;
		});

		// console.log("NEWW", newArrShuffledItems[);

		setLevels([level1RandomFiveItems, ...newArrShuffledItems]);

		if (refresh) {
			setRefresh(false);
		} else {
			setLoading(false);
		}

		// const resultData = setB.filter(item => item.is_active == true)

		// setLevels(level => ([...level, resultData]))
	}

	useEffect(() => {
		getData("");
	}, [c]);

	// console.log(levels.length);

	return (
		<ImageBackground
			style={[styles.bgImage]}
			source={require("../assets/screens.png")}
			imageStyle={{ /* opacity: 0.3, */ objectFit: "fill" }}>
			{/* <ScrollView contentContainerStyle={{}}> */}
			<Text
				h3
				style={{
					alignSelf: "center",
					marginTop: 75,
					marginBottom: 20,
					color: "#004E64",
				}}>
				{category} Level
			</Text>
			<View
				style={{
					height: (Dimensions.get("window").height = "80%"),
					alignItems: "center",
					width: "100%",
				}}>
				<ScrollView
					refreshControl={
						<RefreshControl
							refreshing={refresh}
							onRefresh={() => getData("refresh")}
						/>
					}>
					{loading ? (
						<>
							<Stack spacing={20} mt={7} w={Dimensions.get("window").width}>
								{["1", "2", "3", "4", "5"]?.map((i) => (
									<Skeleton
										key={i}
										height={40}
										skeletonStyle={{ backgroundColor: "#A3B18A" }}
										width={"100%"}
									/>
								))}
							</Stack>
						</>
					) : (
						levels?.map((level, i) => {
							console.log(level, "LEVEL");
							return (
								<Button
									key={i}
									containerStyle={{
										width: (Dimensions.get("window").width = 250),
										marginVertical: 10,
										display: level?.length >= 5 ? "flex" : "none",
									}}
									buttonStyle={{ backgroundColor: color }}
									onPress={() => {
										if (i == 0) {
											navigation.navigate("Quiz", {
												data: level,
												seconds: seconds,
											});
											setC((p) => p + 1);
										} else {
											navigation.navigate("Quiz2", {
												data: level,
												seconds: level[0]?.level > 1 ? level[0]?.time : seconds,
											});
											setC((p) => p + 1);
										}
									}}
									title={`Set ${
										i == 0 ? "A" : numOfSets[levels[i - 1][0]?.level]
									}`}
								/>
							);
						})
					)}
				</ScrollView>
			</View>
		</ImageBackground>
	);
}
