import { useState } from "react";
import { View } from "react-native";
import { TextInput, Switch, Button, Text } from "react-native-paper";

export function AddTodoList({ navigation }) {
	const [title, setTitle] = useState("");
	const [completed, setCompleted] = useState(false);

	const handleAddTodo = async () => {
		const todoData = {
			title: title,
			completed: completed,
		};

		const res = await fetch("https://ich-todo-api.fly.dev/todos", {
			method: "POST",
			body: JSON.stringify(todoData),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		})
			.then((response) => {
				return response.status;
			})
			.catch((error) => {
				console.error(error);
			});

		if (res !== 500) {
			navigation.navigate("Home");
		}
	};

	return (
		<View className="flex-1 p-4" style={{ paddingTop: 140 }}>
			<TextInput
				mode="outlined"
				label="Title"
				value={title}
				onChangeText={setTitle}
				className="mb-4"
			/>
			<View className="flex-row items-center mb-4">
				<Switch value={completed} onValueChange={setCompleted} />
				<Text className="ml-2">Completed</Text>
			</View>
			<Button
				mode="contained"
				onPress={async () => await handleAddTodo()}
				className="w-full"
			>
				Add Todo
			</Button>
		</View>
	);
}
