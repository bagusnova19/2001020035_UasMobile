import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();

export function BottomMenu({ menuList }) {
	return (
		<Tab.Navigator initialRouteName="Home">
			{menuList.map((menu, index) => (
				<Tab.Screen
					key={index}
					name={menu.name}
					component={menu.component}
					options={{
						tabBarIcon: menu.icon,
					}}
				/>
			))}
		</Tab.Navigator>
	);
}
