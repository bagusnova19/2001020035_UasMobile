import { Appbar, Menu, PaperProvider } from "react-native-paper";
import { useState } from "react";
import Constants from "expo-constants";

function MenuOption({ navHandler }) {
	const [visible, setVisible] = useState(false);

	return (
		<Menu
			visible={visible}
			onDismiss={() => setVisible(false)}
			anchor={
				<Appbar.Action
					color="white"
					icon="dots-vertical"
					onPress={() => setVisible(true)}
				/>
			}
		>
			<Menu.Item
				onPress={() => {
					navHandler();
					setVisible(false);
				}}
				title="About"
			/>
		</Menu>
	);
}

export function CustomHeader({ navigation, route }) {
	return (
		<PaperProvider>
			<Appbar.Header
				className="bg-slate-800"
				statusBarHeight={Constants.statusBarHeight}
			>
				<Appbar.Content color="white" title={
          route.name === "Home" ? "My Todo Lists" : route.name
        } />
				{route.name === "Home" ? (
					<MenuOption navHandler={() => navigation.navigate("About")} />
				) : null}
			</Appbar.Header>
		</PaperProvider>
	);
}
