import { Colors } from '@constant';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#151515',
	},
	text: {
		fontSize: 24,
		color: Colors.white.default,
		textAlign: 'center',
		fontWeight: '700',
		letterSpacing: 1,
	},
});

export default styles;
