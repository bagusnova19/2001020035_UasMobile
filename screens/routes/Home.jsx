import { useFocusEffect } from "@react-navigation/native";
import { useState, useCallback } from "react";
import { View, FlatList } from "react-native";
import { List, FAB, ActivityIndicator } from "react-native-paper";

export function Home({ navigation }) {
	const [todoLists, setTodoLists] = useState([]);
	const [isLoading, setLoading] = useState(true);

	const renderTodoList = ({ item, index }) => (
		<List.Item
			key={index}
			title={item.title}
			left={() => <List.Icon icon="format-list-checkbox" />}
			right={() => item.completed ? <List.Icon icon="check" /> : null}
			className="mb-2 py-4"
			onPress={() => {navigation.navigate("Edit Todo List", { id: item.id })}}
		/>
	);

	async function getTodos() {
		try {
			setLoading(true);
			const todoData = await fetch("https://ich-todo-api.fly.dev/todos");
			const todoJson = await todoData.json();
			const todoListData = todoJson.sort((a, b) => a.id - b.id);

			setTodoLists(todoListData);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	}

	useFocusEffect(
		useCallback(() => {
			getTodos();

			return () => {
				setTodoLists([]);
			};
		}, [])
	);

	return (
		<View className="flex-1 bg-white p-4" style={{ paddingTop: 100 }}>
			{isLoading ? (
				<ActivityIndicator animating={true} color="red" />
			) : (
				<FlatList
					data={todoLists}
					renderItem={renderTodoList}
					keyExtractor={(_, index) => index.toString()}					
				/>
			)}
			<FAB
				icon="plus"
				className="bg-indigo-200 absolute right-8 bottom-8"
				onPress={() => navigation.navigate("Add Todo List")}
			/>
		</View>
	);
}
