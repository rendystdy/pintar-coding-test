import { Dispatch } from 'redux';

import { Dispatches, Endpoints } from '@constant';
import { PhotoInterface } from '@interfaces';
import { API } from '@helpers';
import env from '../../../env';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

export default {
	getPhotoByQuery: (payload: PhotoInterface.IPayloadPhotos) => (dispatch: Dispatch) => {
		dispatch({
			type: payload.isLoadMore ? Dispatches.LOADING_PHOTO_LOAD_MORE : Dispatches.LOADING_PHOTO,
			payload: true,
		});
		API.get<PhotoInterface.ISearchPhotoResponse>(`${Endpoints.GET_SEARCH_PHOTO()}`, {
			query: payload.query,
			page: payload.page,
			client_id: env.client_id,
			per_page: 10,
		})
			.then(response => {
        
				// if (payload.isLoadMore) {
				// 	const payloadRes = {
				// 		...response,
				// 		current_keyword: payload.query,
				// 		page: payload.page,
				// 	};
				// 	dispatch({
				// 		type: Dispatches.LOAD_MORE,
				// 		payload: payloadRes ?? {},
				// 	});
				// }
				const payloadRes = {
					...response,
					current_keyword: payload.query,
					page: payload.page,
				};
				dispatch({
					type: payload.isLoadMore ? Dispatches.LOAD_MORE : Dispatches.GET_PHOTO_BY_QUERY,
					payload: payloadRes ?? {},
				});
			})
			.catch(() => {
				// todo handle error
				Toast.show({
					type: 'error',
					text1: 'Error',
					text2: 'Oops, sorry, we are experiencing some problem',
				});
			})
			.finally(() => {
				dispatch({
					type: payload.isLoadMore ? Dispatches.LOADING_PHOTO_LOAD_MORE : Dispatches.LOADING_PHOTO,
					payload: false,
				});
			});
	},
};
