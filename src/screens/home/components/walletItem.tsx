import {Currency} from 'enums/enums';
import {Utils} from 'helpers/utils';
import {Wallet} from 'models/wallet';
import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';

export const WalletItem = (props: {wallet: Wallet; navigation: any}) => {
  const {wallet, navigation} = props;

  const handleOnPress = () => {
    navigation.navigate('Wallet', {wallet});
  };

  const content = (
    <TouchableOpacity onPress={handleOnPress}>
      <View>
        <View>
          <Image source={wallet.icon} />
        </View>
        <Text>{wallet.name}</Text>
        <Text>{`${wallet.amount} ${wallet.shortName}`}</Text>
        <Text>{`${Utils.calculateWalletValue(
          wallet.amount,
          wallet.convertRate,
          false,
        ).toFixed(0)} ${Currency.USD}`}</Text>
      </View>
    </TouchableOpacity>
  );

  return content;
};
