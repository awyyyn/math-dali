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
						{!next ? (
							<View style={{ gap: 20, marginTop: 20 }}>
								<Text style={[styles.rulesParagraph]}>
									To understand how to play the game and earn points. It is
									important to thoroughly read the rules and instructions before
									starting.
								</Text>
								<Text style={[styles.rulesParagraph]}>
									{`1. THE GAME WILL LET THE PLAYER RESPOND TO BASIC ALGEBRA QUESTIONS AT VARIOUS LEVEL OF DIFFICULTY TO SCORE POINTS. EACH LEVEL OF DIFFICULTY HAS A VARIOUS NUMBER OF SETS, AND EACH SET ARE COMPOSED OF FIVE (5) ALGEBRA
PROBLEMS.`}
								</Text>
							</View>
						) : (
							<Text style={[styles.rulesParagraph, { marginTop: 20 }]}>
								{`2.  Each level of the game has a different time limit according to the level of difficulties. 

- Beginner - 15 seconds 
- Intermediate - 30 seconds
- Expert - 45 seconds 

In order to earn points the player must complete solving the problem within the alloted time. The total score can be only be reveal after answering all the problems as well as the solution for every questions.
                                `}
							</Text>
						)}
					</View>
					<Button
						title={next ? "Home" : "Next"}
						color={next ? "" : ""}
						size="lg"
						buttonStyle={{ backgroundColor: "#335C67", marginBottom: 50 }}
						onPress={() => {
							if (next) {
								navigation.navigate("Home");
							} else {
								setNext(true);
							}
						}}
					/>
				</ScrollView>
			</ImageBackground>
		</Layout>
	);
}
