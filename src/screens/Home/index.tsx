import { Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/AntDesign';

import { Button, Container, HeaderWithSearch, ListOfPhotos } from '@components';
import { Colors } from '@constant';
import styles from './style';
import { NavigationHelper, useAppDispatch, useAppSelector } from '@helpers';
import { Actions } from '@store';

const Home = () => {
	const getPhotoByQueryDispatch = useAppDispatch(Actions.photoAction.getPhotoByQuery);
	const listOfPhotos = useAppSelector(state => state.photoReducer.listOfPhotos);

	useEffect(() => {
		// getPhotos();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getPhotos = () => {
		// const payload = {
		// 	query: 'Office',
		// 	page: 1,
		// };

		// getPhotoByQueryDispatch(payload);
	};

	return (
		<Container
			noPadding
			noScroll
			contentContainerStyle={ { backgroundColor: Colors.white.default } }
		>
			<HeaderWithSearch />
			<ListOfPhotos />
		</Container>
	);
};

export default Home;
