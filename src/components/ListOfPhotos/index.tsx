import {
  Text, View, FlatList, Image, TouchableOpacity, ActivityIndicator,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@helpers';
import { PhotoInterface } from '@interfaces';
import styles from './style';
import { Modal } from '@components';
import { Actions } from '@store';
import { Colors } from '@constant';

interface IItem {
  item: PhotoInterface.ResultsEntity;
}

const ListOfPhotos = () => {
  const listOfPhotos = useAppSelector(state => state.photoReducer.listOfPhotos);
  const currentKeyword = useAppSelector(state => state.photoReducer.current_keyword);
  const currentPage = useAppSelector(state => state.photoReducer.current_page);
  const loading = useAppSelector(state => state.photoReducer.loading);
  const loadingLoadMore = useAppSelector(state => state.photoReducer.loadingLoadMore);
  const getPhotoLoadMoreDispatch = useAppDispatch(Actions.photoAction.getPhotoByQuery);
  // const [page, setPage] = useState(currentPage);

  const [modalVisible, setModalVisible] = useState(false);
  const [urlImage, setUrlImage] = useState('');

  // useEffect(() => {
  //   if (currentPage !== page) {
  //     handleLoadMore();
  //     console.log('use', page);
  //   }
  //   console.log('use', page);
  // }, [page]);

  const renderItem = ({ item }: IItem) => {
    return (
      <TouchableOpacity
        onPress={ () => onPressItem(item.urls.thumb) }
        style={ styles.wrapper }>
        <Image
          source={ { uri: item.urls.thumb } }
          style={ styles.img } />
        <View>
          <Text style={ styles.title }>{ item?.tags[0]?.title }</Text>
          <Text style={ styles.author }>Author: { item.user.username }</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const onPressItem = (url: string) => {
    setUrlImage(url);
    setModalVisible(true);
  };

  const handleLoadMore = () => {
    const payload = {
      query: currentKeyword,
      page: currentPage + 1,
      isLoadMore: true,
    };

    console.log('payload', payload);
    return getPhotoLoadMoreDispatch(payload);
  };

  const renderFooter = () => {
    if (listOfPhotos.length <= 0) {
      return null;
    }
    if (loadingLoadMore) {
      return (
        <ActivityIndicator
          size={ 'small' }
          color={ Colors.blue.default } />
      );
    }
    return (
      <TouchableOpacity
        style={ styles.loadMore }
        onPress={ () => {
          handleLoadMore();
          // console.log('onpress', page);
          // setPage(page + 1);
        } }>
        <Text style={ styles.textLoadMore }>Load More</Text>
      </TouchableOpacity>
    );
  };

  const renderLoading = () => {
    return (
      <ActivityIndicator
        size={ 'large' }
        color={ Colors.blue.default } />
    );
  };

  console.log('data', listOfPhotos.length);
  console.log('page', currentPage);

  return (
    <View style={ styles.container }>
      { loading ? renderLoading() : (
        <FlatList
          data={ listOfPhotos }
          keyExtractor={ (_, i) => i.toString() }
          renderItem={ renderItem }
          numColumns={ 2 }
          style={ { marginBottom: 60 } }
          ItemSeparatorComponent={ () => <View style={ { height: 12 } } /> }
          columnWrapperStyle={ { justifyContent: 'space-between' } }
          ListFooterComponent={ renderFooter }
        />
      ) }
      { modalVisible && (
        <Modal
          visible={ modalVisible }
          onPressBack={ () => setModalVisible(false) }
          uriImage={ urlImage } />
      ) }
    </View>
  );
};

export default ListOfPhotos;
