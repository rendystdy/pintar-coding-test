import { Text, View, TextInput } from 'react-native';
import React, { useState, useCallback } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import _ from 'lodash';

import styles from './style';
import { Colors } from '@constant';
import { useAppDispatch } from '@helpers';
import { Actions } from '@store';

const HeaderWithSearch = () => {
  const getPhotoByQueryDispatch = useAppDispatch(Actions.photoAction.getPhotoByQuery);
  const [value, setValue] = useState<string>('');
  let timeout: any;

  const fakeDelay = (ms: number) => new Promise((res: any) => setTimeout(res, ms));
  const debounce = (cb: (text: string) => void, allwaysCall: (text: string) => void, ms: number) => {
    return (text: string) => {
      allwaysCall(text);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb(text);
      }, ms);
    };
  };

  const onChange = (text: string) => {
    setValue(text);
  };

  const getPhotoByQuery = async (text: string) => {
    await fakeDelay(2000);

    const payload = {
      query: text,
      page: 1,
    };
    console.log('get');
    return getPhotoByQueryDispatch(payload);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debaounceSearchPhoto = useCallback(debounce(getPhotoByQuery, onChange, 500), []);

  return (
    <View style={ styles.container }>
      <View style={ styles.wrapperInput }>
        <Icon
          name='search'
          size={ 24 }
          style={ { marginRight: 8 } }
        />
        <TextInput
          value={ value }
          placeholder='Search images...'
          onChangeText={ debaounceSearchPhoto }
          style={ styles.textInputContainer }
          placeholderTextColor={ Colors.black.default }
        />
      </View>
    </View>
  );
};

export default HeaderWithSearch;
