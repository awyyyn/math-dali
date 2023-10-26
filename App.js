import Onboard from "./screens/Onboard";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Rules from "./screens/Rules";
import Start from "./screens/Start";
import Settings from "./screens/Settings";

import AppContext, { SettingsContext } from "./context/AppContext";
import Signin from "./screens/auth/Signin";
import Administrator from "./screens/administrator/Administrator";
import SetScreen from "./screens/administrator/SetScreen";
import Logout from "./components/Logout";
import EditData from "./screens/administrator/EditData";
import AddQuestion from "./screens/administrator/AddQuestion";
import { Provider } from "@react-native-material/core";
import Quiz from "./screens/Quiz";
import Levels from "./screens/Levels";
import { StatusBar } from "expo-status-bar";
import ForgotPassword from "./screens/auth/ForgotPassword";
import AsyncStorage from "@react-native-async-storage/async-storage";
import EditAdmin from "./screens/administrator/EditAdmin";
import CreateAdmin from "./screens/administrator/CreateAdmin";

const nestedAdminScreen = {
	presentation: "modal",
	headerShown: true,
};

const headerStyles = {
	headerTitleStyle: {
		color: "#FFF",
	},
	headerStyle: {
		backgroundColor: "#335C67",
	},
	headerTintColor: "#FFF",
};

const Stack = createStackNavigator();

export default function App() {
	return (
		<AppContext>
			<Provider>
				<StatusBar
					animated
					networkActivityIndicatorVisible
					style="light"
					backgroundColor="#004E64"
				/>
				<NavigationContainer>
					<Screeens />
				</NavigationContainer>
			</Provider>
		</AppContext>
	);
}

const Screeens = ({}) => {
	// console.log()
	const { session, isLaunched, setIsLaunched } = useContext(SettingsContext);
	// const [isLaunched, setIsLaunched] = useState(false)

	// console.log("CONTEXT", session)

	useEffect(() => {
		(async function () {
			try {
				const appData = await AsyncStorage.getItem("appLaunched");
				if (appData != null || appData != undefined) {
					setIsLaunched(appData);
				}
			} catch (error) {
				alert(error?.message);
			}
		})();

		return () => {
			setIsLaunched(true);
		};
	}, []);

	return (
		<Stack.Navigator
			initialRouteName={!isLaunched ? "Onboarding" : "Home"}
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name="Home" component={Home} />
			{!isLaunched && <Stack.Screen name="Onboarding" component={Onboard} />}
			<Stack.Screen name="Rules" component={Rules} />
			<Stack.Screen name="Start" component={Start} />
			<Stack.Screen name="Settings" component={Settings} />
			{/* <Stack.Screen name='Addquestion' component={Addquestion}   /> */
			/* <Stack.Screen name='Beginner' component={Beginner}   />
      <Stack.Screen name='Level' component={Level}   />
      <Stack.Screen name='Intermediate' component={Intermediate}   />
      <Stack.Screen name='IntermediateLevel' component={IntermediateLevel}   />
      <Stack.Screen name='Expert' component={Expert}   />
      <Stack.Screen name='ExpertLevel' component={ExpertLevel}   /> */}
			<Stack.Screen name="Levels" component={Levels} />
			<Stack.Screen name="Quiz" component={Quiz} />
			{!session?.session && <Stack.Screen name="Sign in" component={Signin} />}
			<Stack.Screen name="forgotPassword" component={ForgotPassword} />
			<Stack.Screen
				name="Edit Admin"
				options={{
					headerShown: true,
					...headerStyles,
				}}
				component={EditAdmin}
			/>
			<Stack.Screen
				name="Create Admin"
				options={{
					headerShown: true,
					...headerStyles,
				}}
				component={CreateAdmin}
			/>

			<Stack.Screen
				name="AddQuestion"
				component={AddQuestion}
				options={{ ...nestedAdminScreen, ...headerStyles }}
			/>

			<Stack.Screen
				name="SetScreen"
				component={SetScreen}
				options={{
					headerShown: true,
					...headerStyles,
					headerBackTitleStyle: { color: "#FFF" },
				}}
			/>

			<Stack.Screen
				name="Administrator"
				component={Administrator}
				options={{
					headerShown: true,
					headerRight: () => <Logout />,
					headerLeft: null,
					...headerStyles,
				}}
			/>

			<Stack.Screen
				name="EditData"
				options={{ ...nestedAdminScreen, ...headerStyles }}
				component={EditData}
			/>
		</Stack.Navigator>
	);
};

// {
//   "build": {
//     "preview": {
//       "android": {
//         "buildType": "apk"
//       }
//     },
//     "preview2": {
//       "android": {
//         "gradleCommand": ":app:assembleRelease"
//       }
//     },
//     "preview3": {
//       "developmentClient": true
//     },
//     "production": {}
//   }
// }
