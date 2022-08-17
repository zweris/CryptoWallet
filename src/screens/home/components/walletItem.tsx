import {Currency} from 'enums/enums';
import {Wallet} from 'models/wallet';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const WalletItem = (props: {wallet: Wallet; navigation: any}) => {
  const {wallet, navigation} = props;

  const handleOnPress = () => {
    navigation.navigate('Wallet', {wallet});
  };

  const content = (
    <View>
      <TouchableOpacity onPress={handleOnPress}>
        <View>
          <Image source={wallet.icon} />
        </View>
        <Text>{wallet.name}</Text>
        <Text>{`${wallet.amount} ${wallet.shortName}`}</Text>
        <Text>{`0 ${Currency.USD}`}</Text>
      </TouchableOpacity>
    </View>
  );

  return content;
};
