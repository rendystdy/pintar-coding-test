import {
  StyleSheet, Text, View, Modal, Image, TouchableWithoutFeedback,
} from 'react-native';
import React, { useState } from 'react';
import { Colors } from '@constant';

interface IModalProps {
  visible: boolean;
  onPressBack: () => void;
  uriImage: string;
}

const ModalViewImage: React.FC<IModalProps> = ({ visible, onPressBack, uriImage }) => {
  console.log('ur', uriImage);
  return (
    <View style={ styles.container }>
      <Modal
        animationType='fade'
        transparent
        visible={ visible }
        onRequestClose={ onPressBack }
      >
        <TouchableWithoutFeedback
          style={ { flex: 1 } }
          onPress={ onPressBack }>
          <View style={ styles.wrapper }>
            <Image
              source={ { uri: uriImage } }
              style={ styles.img }
              resizeMode='contain' />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default ModalViewImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: Colors.black.transparent,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
