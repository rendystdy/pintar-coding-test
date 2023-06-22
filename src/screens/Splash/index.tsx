/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { View } from 'react-native';

import { NavigationHelper } from '@helpers';
import styles from './style';
import { Text } from '@components';
function Splash() {

	useEffect(() => {

		// save timeoutId to clear the timeout when the component re-renders
		const tm = setTimeout(() => {
			NavigationHelper.reset('Home');
		}, 3000);

		// clear timeout on re-render to avoid memory leaks
		return () => {
			clearTimeout(tm);
		};
	}, []);

	return (
		<View style={ styles.container }>
			<Text style={ styles.text }>
				Pintar Coding Test
			</Text>
		</View>
	);
}

export default Splash;
