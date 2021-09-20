import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Box } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppContextProvider } from './src/context/AppContext';
import { theme } from './src/style/themes';
import Register from './src/views/Register';
import Login from './src/views/Login';
import DevMode from './src/views/DevMode';
import Main from './src/views/Main';
import AddMemo from './src/views/AddMemo';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NativeBaseProvider theme={theme}>
			<AppContextProvider>
				<StatusBar backgroundColor='#FFF' />
				<NavigationContainer>
					<Box bg={'gray.100'} flex={1} alignContent='center' justifyContent='center'>
						<Stack.Navigator
							initialRouteName='Login'
							screenOptions={{
								headerTitleStyle: { color: '#78D3FA' },
								headerShown: false,
							}}
						>
							<Stack.Screen name='Main' component={Main} />
							<Stack.Screen name='AddMemo' component={AddMemo} />
							<Stack.Screen name='DevMode' component={DevMode} />
							<Stack.Screen name='Register' component={Register} />
							<Stack.Screen name='Login' component={Login} />
						</Stack.Navigator>
					</Box>
				</NavigationContainer>
			</AppContextProvider>
		</NativeBaseProvider>
	);
}
