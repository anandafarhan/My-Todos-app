import React, { useState, useEffect } from 'react';
import { Box, Button, ScrollView } from 'native-base';
import MemoCard from '../components/MemoCard';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

function Vault() {
	const [lock, setLock] = useState(false);

	useEffect(() => {
		return () => {
			setLock(false);
		};
	}, []);
	return !lock ? (
		<Box flex={1} bg={'gray.100'} justifyContent='center' px={6}>
			<CustomInput placeholder='Insert Security Pin' mb={5} />
			<CustomButton title='Submit' onPress={() => setLock(true)} />
		</Box>
	) : (
		<Box bg={'gray.100'} flex={1} justifyContent='center'>
			<Box mb={70}>
				<ScrollView px={6}>
					<MemoCard />
					<MemoCard />
					<MemoCard />
					<MemoCard />
					<MemoCard />
					<MemoCard />
				</ScrollView>
				<Button
					colorScheme='primary'
					borderRadius={25}
					w={50}
					h={50}
					_text={{ fontSize: 30 }}
					position='absolute'
					bottom={1}
					right={4}
				>
					+
				</Button>
			</Box>
		</Box>
	);
}

export default Vault;
