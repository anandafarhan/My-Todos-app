import { Box, Button, ScrollView } from 'native-base';
import React from 'react';
import MemoCard from '../components/MemoCard';

function Memo() {
	return (
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

export default Memo;
