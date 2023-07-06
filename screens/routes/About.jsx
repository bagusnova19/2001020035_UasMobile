import { View, Linking } from "react-native";
import { Text } from "react-native-paper";

export function About() {
	const handleLinkPress = async () => {
		const supported = await Linking.canOpenURL(
			"https://www.app-privacy-policy.com/live.php?token=dgfz9njrWb6lyy7SCcnN9Utt9jpIw9lA"
		);
		if (supported) {
			await Linking.openURL(
				"https://www.app-privacy-policy.com/live.php?token=dgfz9njrWb6lyy7SCcnN9Utt9jpIw9lA"
			);
		}
	};

	return (
		<View className="flex-1 bg-white p-4 justify-center">
			<Text className="text-2xl font-bold mb-4">Simple Todo List</Text>
			<Text className="text-base mb-4">
				This app allows you to create and manage your daily tasks easily. Keep
				track of what needs to be done and stay organized.
			</Text>

			<Text className="text-base mb-4">
				By using our app, you hereby consent to our Privacy Policy and agree to
				its Terms and Conditions.
			</Text>
      
			<Text onPress={handleLinkPress} style={{ color: "blue" }}>
				Privacy Policy
			</Text>
		</View>
	);
}
