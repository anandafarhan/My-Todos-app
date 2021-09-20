import { Box, Button, FlatList, Heading, useToast } from 'native-base';
import React, { useContext, useEffect, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RefreshControl } from 'react-native';

import { AppContext } from '../context/AppContext';
import MemoModal from '../components/MemoModal';
import MemoCard from '../components/MemoCard';
import VaultAuth from './VaultAuth';
import {
	addUserMemo,
	updateUserMemo,
	deleteUserMemo,
	getUserVMemos,
	checkPin,
} from '../config/server';

function Vault({ navigation }) {
	const toast = useToast();
	const [state, dispatch] = useContext(AppContext);
	const [showModal, setShowModal] = useState(false);
	const [loading, setLoading] = useState(false);
	const [wait, setWait] = useState(false);
	const [memos, setMemos] = useState([]);
	const [pin, setPin] = useState('');
	const [formData, setFormData] = useState({
		title: '',
		memo: '',
		status: 1,
	});

	function closeModal() {
		setShowModal(false);
		setFormData({
			title: '',
			memo: '',
			status: 1,
		});
	}

	async function handleSubmit() {
		if (formData.title.length < 1 || formData.memo.length < 1)
			return toast.show({ title: 'Please complete any empty field' });
		setWait(true);
		await addUserMemo(formData);
		closeModal();
		setFormData({
			title: '',
			memo: '',
			status: 1,
		});
		setWait(false);
	}

	async function handleSubmitEdit() {
		if (formData.title.length < 1 || formData.memo.length < 1)
			return toast.show({ title: 'Please complete any empty field' });
		setWait(true);
		await updateUserMemo(formData, formData.eid);
		closeModal();
		setFormData({
			title: '',
			memo: '',
			status: 1,
		});
		setWait(false);
	}

	async function deleteMemo() {
		setWait(true);
		await deleteUserMemo(formData.eid);
		closeModal();
		setFormData({
			title: '',
			memo: '',
			status: 1,
		});
		setWait(false);
	}

	function editMemo(item) {
		setFormData({
			eid: item.id,
			title: item.title,
			memo: item.memo,
			status: 1,
		});
		setShowModal(true);
	}

	async function checkUserPin() {
		const response = await checkPin({ pin });
		if (response.status === 200) {
			toast.show({ title: 'Pin Authentication Success' });
			setPin('');
			return dispatch({ type: 'UNLOCK' });
		} else {
			toast.show({ title: response.data.errors ? response.data.errors : response.data.message });
		}
	}

	function lockVault() {
		dispatch({ type: 'LOCK' });
		toast.show({ title: 'Vault Locked' });
	}

	async function loadMemos() {
		setLoading(true);
		const response = await getUserVMemos();
		setMemos(response ? response.memos : []);
		setLoading(false);
	}

	useEffect(() => {
		loadMemos();
	}, [wait]);

	return state.isLocked ? (
		<VaultAuth pin={pin} setPin={setPin} onPress={checkUserPin} />
	) : (
		<Box bg={'gray.200'} flex={1}>
			<Box mb={70}>
				{memos.length < 1 ? (
					<Heading color={'gray.400'} textAlign='center' mt={3}>
						You have no secret apparently
					</Heading>
				) : (
					<FlatList
						data={memos}
						keyExtractor={(item) => item.id.toString()}
						renderItem={({ item }) => <MemoCard item={item} onPress={() => editMemo(item)} />}
						refreshControl={<RefreshControl refreshing={loading} onRefresh={loadMemos} />}
						px={6}
					/>
				)}
			</Box>
			<Button
				colorScheme='primary'
				_text={{ fontSize: 30 }}
				borderRadius={25}
				shadow={3}
				position='absolute'
				bottom={140}
				right={4}
				w={50}
				h={50}
				onPress={lockVault}
			>
				<MaterialCommunityIcons name='lock' size={20} color={'white'} />
			</Button>
			<Button
				colorScheme='primary'
				_text={{ fontSize: 30 }}
				borderRadius={25}
				shadow={3}
				position='absolute'
				bottom={75}
				right={4}
				w={50}
				h={50}
				onPress={() => setShowModal(true)}
			>
				+
			</Button>
			<MemoModal
				showModal={showModal}
				closeModal={closeModal}
				formData={formData}
				setFormData={setFormData}
				onPress={handleSubmit}
				onSave={handleSubmitEdit}
				onDelete={deleteMemo}
			/>
		</Box>
	);
}

export default Vault;
