import { Colors } from '@constant';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		padding: 8,
	},
	wrapper: {
		width: '48%',
		borderWidth: 1,
		borderColor: Colors.gray.default,
		padding: 8,
	},
	img: {
		width: '100%',
		height: 100,
		marginBottom: 8,
	},
	title: {
		fontSize: 18,
		fontWeight: '700',
		letterSpacing: 1,
	},
	author: {
		fontSize: 10,
		letterSpacing: 1,
	},
	loadMore: {
		alignSelf: 'center',
		backgroundColor: Colors.gray.default,
		padding: 12,
		marginBottom: 40,
		marginTop: 20,
		borderRadius: 8,
	},
	textLoadMore: {
		color: Colors.white.default,
		letterSpacing: 1,
	},
});

export default styles;
