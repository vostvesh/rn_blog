import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import { Provider } from './src/context/BlogContext';

const Stack = createStackNavigator();

export default function App() {
	return (
		<Provider>
			<NavigationContainer>
				<Stack.Navigator initialRouteName='Index'>
					<Stack.Screen name='Index' component={IndexScreen} options={{ title: 'Blogs' }} />
					<Stack.Screen name='Show' component={ShowScreen} options={{ title: 'Show' }} />
					<Stack.Screen name='Create' component={CreateScreen} options={{ title: 'Create' }} />
					<Stack.Screen name='Edit' component={EditScreen} options={{ title: 'Edit' }} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}
