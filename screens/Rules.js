import { View, Text, ScrollView, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { Button } from "@rneui/themed";
import { useFonts } from "expo-font";
import Layout from "./Layout";

export default function Rules({ navigation }) {
	const [next, setNext] = React.useState(false);

	return (
		<Layout>
			<ImageBackground
				source={require("../assets/screens.png")}
				// imageStyle={{ opacity: 0.3 }}
				style={[styles.windowContainer, styles.between, styles.paddingBottom]}>
				<ScrollView
					showsHorizontalScrollIndicator={false}
					showsVerticalScrollIndicator={false}>
					<View style={[styles.rulesContainer, { marginTop: 30 }]}>
						<Text style={[styles.title, { color: "#335C67" }]}>
							Rules & Mechanics
						</Text>
						<View style={{ gap: 20, marginTop: 20 }}>
							<Text style={[styles.rulesParagraph]}>
								To understand how to play the game and earn points. It is
								important to thoroughly read the rules and instructions before
								starting.
							</Text>
							<Text style={[styles.rulesParagraph]}>
								The game will let the player respond to basic algebra questions
								at various level of difficulty to score points. Each level of
								difficulty has a various number of sets.The difficulty level of
								the game has a different time limit that the teachers has the
								access to set.
							</Text>
							<Text style={[styles.rulesParagraph]}>
								In order to earn points, the player must complete solving the
								problem within the alloted time. The total score can be only be
								reveal after answering all the problems as well as the solution
								for every questions.
							</Text>
							<Text style={[styles.rulesParagraph]}>
								Every questions in the Seat A per difficulty can be played by
								the player through offline mode with the time limit of 15
								seconds for the beginner level , 30 seconds for the intermediate
								level and 45 seconds for the expert level. The succeeding Sets
								that the teacher will add can only be played through online mode
								and the time limit will depend by the teachers' time preference.
							</Text>
						</View>
					</View>
					<Button
						title={"Home"}
						size="lg"
						buttonStyle={{ backgroundColor: "#335C67", marginBottom: 50 }}
						onPress={() => {
							navigation.navigate("Home");
						}}
					/>
				</ScrollView>
			</ImageBackground>
		</Layout>
	);
}
