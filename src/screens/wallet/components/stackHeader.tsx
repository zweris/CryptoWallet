import {StackHeaderProps} from '@react-navigation/stack';
import {ImageStorage} from 'helpers/imageStorage';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Theme} from 'theme/theme';

export const StackHeader = ({props}: {props: StackHeaderProps}) => {
  const component = (
    <View style={Theme.stackHeaderContainer}>
      <View style={Theme.stackHeaderBackContainer}>
        <TouchableOpacity
          style={Theme.stackHeaderBack}
          onPress={() => props.navigation.goBack()}>
          <Image source={ImageStorage.arrowBack} />
        </TouchableOpacity>
      </View>
      <Text style={Theme.stackHeaderTitle}>{props.options.title || ''}</Text>
    </View>
  );

  return component;
};
