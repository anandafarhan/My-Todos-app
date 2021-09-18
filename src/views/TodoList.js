import { Box, ScrollView } from 'native-base';
import React from 'react';
import TodoCard from '../components/TodoCard';
import TodoInput from '../components/TodoInput';

function TodoList() {
	return (
		<Box bg={'gray.100'} flex={1} justifyContent='center'>
			<Box mb={140}>
				<ScrollView px={6}>
					<TodoCard />
					<TodoCard />
					<TodoCard />
					<TodoCard />
					<TodoCard />
					<TodoCard />
					<TodoCard />
					<TodoCard />
					<TodoCard />
					<TodoCard />
					<TodoCard />
					<TodoCard />
					<TodoCard />
					<TodoCard />
					<TodoCard />
				</ScrollView>
			</Box>
			<TodoInput />
		</Box>
	);
}

export default TodoList;
