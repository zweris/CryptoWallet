import {Wallet} from 'models/wallet';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export const ConvertField = ({wallet}: {wallet: Wallet}) => {
  const content = (
    <View>
      <Image source={wallet.icon} />
      <TextInput
        value={wallet.amount.toString()}
        placeholder="Enter amount to convert"
        keyboardType="numeric"
      />
      <Text>{wallet.shortName}</Text>
    </View>
  );

  return content;
};
