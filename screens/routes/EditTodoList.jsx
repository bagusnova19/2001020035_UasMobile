import { useFocusEffect } from "@react-navigation/native";
import { useState, useCallback } from "react";
import { View } from "react-native";
import { TextInput, Switch, Button, Text } from "react-native-paper";

export function EditTodoList({ route, navigation }) {
	const { id } = route.params;
	const [title, setTitle] = useState("");
	const [completed, setCompleted] = useState(false);

	useFocusEffect(
		useCallback(() => {
			fetch(`https://ich-todo-api.fly.dev/todos/${id}`)
				.then((response) => response.json())
				.then((data) => {
					setTitle(data.title);
					setCompleted(data.completed);
				})
				.catch((error) => {
					console.error(error);
				});
		}, [id])
	);

	const handleUpdateTodo = async () => {
		const todoData = {
			title: title,
			completed: completed,
		};

		const res = await fetch(`https://ich-todo-api.fly.dev/todos/${id}`, {
			method: "PUT",
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

	const handleDeleteTodo = async () => {
		const res = await fetch(`https://ich-todo-api.fly.dev/todos/${id}`, {
			method: "DELETE",
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
				onPress={async () => await handleUpdateTodo()}
				className="w-full"
			>
				Update Todo
			</Button>
			<Button
				mode="outlined"
				onPress={async () => await handleDeleteTodo()}
				className="w-full mt-4"
			>
				Delete Todo
			</Button>
		</View>
	);
}
