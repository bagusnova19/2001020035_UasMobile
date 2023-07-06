import { Menu } from "react-native-paper";

export function MoreMenu({ handleVisible }) {
	return (
		<Menu visible={handleVisible} onDismiss={handleVisible} on>
			<Menu.Item title="About" />
			<Menu.Item title="Privacy Policy" />
		</Menu>
	);
}
