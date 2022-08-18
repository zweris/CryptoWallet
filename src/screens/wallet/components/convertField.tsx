import React from 'react';
import {Image, ImageSourcePropType, Text, TextInput, View} from 'react-native';

export const ConvertField = ({
  icon,
  value,
  title,
  disable,
  onChange,
}: {
  icon: ImageSourcePropType;
  value: string;
  title: string;
  disable?: boolean;
  onChange: (value: string) => void;
}) => {
  const content = (
    <View>
      <Image source={icon} />
      {disable && <Text>{value}</Text>}
      {!disable && (
        <TextInput
          value={value}
          placeholder="Enter amount to convert"
          keyboardType="numeric"
          onChangeText={(text: string) => onChange(text)}
        />
      )}
      <Text>{title}</Text>
    </View>
  );

  return content;
};
