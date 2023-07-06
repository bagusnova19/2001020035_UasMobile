import * as React from "react";
import { AppRegistry } from "react-native";
import { PaperProvider } from "react-native-paper";
import { name as appName } from "./app.json";
import App from "App";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function Main() {
	return (
		<PaperProvider
			settings={{
				icon: (props) => <FontAwesome5 {...props} />,
			}}
		>
			<App />
		</PaperProvider>
	);
}

AppRegistry.registerComponent(appName, () => Main);
