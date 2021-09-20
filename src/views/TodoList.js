import { Box, FlatList, Heading } from 'native-base';
import React, { useEffect, useState } from 'react';
import { RefreshControl } from 'react-native';
import TodoCard from '../components/TodoCard';
import TodoInput from '../components/TodoInput';
import { addUserTodo, deleteUserTodo, getUserTodos, updateUserTodo } from '../config/server';

function TodoList() {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState('');
	const [loading, setLoading] = useState(false);
	const [wait, setWait] = useState(false);

	async function loadTodos() {
		setLoading(true);
		const response = await getUserTodos();
		setTodos(response ? response.todos : []);
		setLoading(false);
	}

	async function handleSubmit() {
		if (input.length < 1) return;
		setWait(true);
		await addUserTodo({ todo: input, status: 0 });
		setInput('');
		setWait(false);
	}

	async function handleChange(data, id) {
		setWait(true);
		await updateUserTodo({ status: data }, id);
		setWait(false);
	}

	async function handleDelete(id) {
		setWait(true);
		await deleteUserTodo(id);
		setWait(false);
	}

	useEffect(() => {
		loadTodos();
	}, [wait]);
	return (
		<Box bg={'gray.200'} flex={1}>
			<Box mb={140}>
				{todos.length < 1 ? (
					<Heading color={'gray.400'} textAlign='center' mt={3}>
						You got nothing left to do
					</Heading>
				) : (
					<FlatList
						data={todos}
						keyExtractor={(item) => item.id.toString()}
						renderItem={({ item }) => (
							<TodoCard
								item={item}
								onChange={() => handleChange(!item.status, item.id)}
								onDelete={() => handleDelete(item.id)}
							/>
						)}
						refreshControl={<RefreshControl refreshing={loading} onRefresh={loadTodos} />}
						px={6}
					/>
				)}
			</Box>
			<TodoInput inputValue={input} handleInput={setInput} onPress={handleSubmit} />
		</Box>
	);
}

export default TodoList;
