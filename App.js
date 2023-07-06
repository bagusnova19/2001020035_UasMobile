import { StatusBar } from "expo-status-bar";
import { Home } from "./screens/routes/Home";
import { AddTodoList } from "./screens/routes/AddTodoList";
import { EditTodoList } from "./screens/routes/EditTodoList";
import { About } from "./screens/routes/About";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CustomHeader } from "./screens/components/CustomHeader";

const Stack = createNativeStackNavigator();

const menuStack = [
	{
		name: "Home",
		component: Home,
	},
	{
		name: "Add Todo List",
		component: AddTodoList,
	},
	{
		name: "Edit Todo List",
		component: EditTodoList,
	},
	{
		name: "About",
		component: About,
	},
];

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar style="light" />
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{ header: (props) => <CustomHeader {...props} /> }}
			>
				{menuStack.map((menu, index) => (
					<Stack.Screen
						key={index}
						name={menu.name}
						component={menu.component}
						options={menu.options}
					/>
				))}
			</Stack.Navigator>
		</NavigationContainer>
	);
}
