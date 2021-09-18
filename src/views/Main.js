import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import Login from './Login';
import Register from './Register';
import TodoList from './TodoList';
import Memo from './Memo';
import Vault from './Vault';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

function Main() {
	return (
		<Tab.Navigator
			initialRouteName='Login'
			sceneContainerStyle={{
				backgroundColor: '#FFFFFF',
			}}
			screenOptions={({ route }) => ({
				headerTitleStyle: { color: '#78D3FA' },
				tabBarActiveTintColor: '#78D3FA',
				tabBarInactiveTintColor: '#8E8E8E',
				tabBarHideOnKeyboard: true,
				tabBarLabelStyle: { fontSize: 13 },
				tabBarStyle: {
					height: 65,
					position: 'absolute',
				},
				tabBarIcon: ({ focused, color, size }) => {
					switch (route.name) {
						case 'Todo':
							return <Ionicons name={focused ? 'md-list' : 'md-list-outline'} size={size} color={color} />;

						case 'Memo':
							return (
								<FontAwesome name={focused ? 'sticky-note' : 'sticky-note-o'} size={size} color={color} />
							);

						case 'Vault':
							return (
								<MaterialCommunityIcons
									name={focused ? 'safe-square' : 'safe-square-outline'}
									size={size}
									color={color}
								/>
							);

						case 'Profile':
							return <FontAwesome name={focused ? 'user' : 'user-o'} size={size} color={color} />;

						default:
							return <FontAwesome name={focused ? 'user' : 'user-o'} size={size} color={color} />;
					}
				},
			})}
		>
			<Tab.Screen name='Todo' component={TodoList} options={{ title: 'TODO' }} />
			<Tab.Screen name='Memo' component={Memo} options={{ title: 'MEMO' }} />
			<Tab.Screen name='Vault' component={Vault} options={{ title: 'VAULT' }} />
			<Tab.Screen name='Profile' component={Profile} options={{ title: 'PROFILE' }} />
		</Tab.Navigator>
	);
}

export default Main;
