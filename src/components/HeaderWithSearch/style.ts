import { Colors } from '@constant';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		padding: 8,
	},
	textInputContainer: {
		// borderWidth: 1,
		// borderColor: Colors.gray.default,
		// borderRadius: 6,
		width: '90%',
		paddingHorizontal: 8,
		backgroundColor: Colors.gray.light,
	},
	wrapperInput: {
		borderRadius: 6,
		borderWidth: 1,
		borderColor: Colors.gray.default,
		padding: 12,
		alignItems: 'center',
		flexDirection: 'row',
	},
});

export default styles;
