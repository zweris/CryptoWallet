import {useWalletContext} from 'components/walletContext';
import {ImageStorage} from 'helpers/imageStorage';
import {Wallet} from 'models/wallet';
import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {WalletItem} from './components/walletItem';

export const HomeScreen = ({navigation}: {navigation: any}) => {
  const walletContext = useWalletContext();

  console.log('render');

  useEffect(() => {
    const loadData = async () => {
      walletContext?.fetchWalletRates();
    };

    const unsubscribe = navigation.addListener('focus', () => {
      loadData();
    });

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const calculateTotal = () => {
    let result = 0;
    walletContext?.wallets.forEach(
      (wallet: Wallet) => (result += wallet.amount / wallet.convertRate),
    );
    return result;
  };

  const content = (
    <View>
      <View>
        <Image source={ImageStorage.usd} />
        <Text>Total</Text>
        <Text>{calculateTotal()} USD</Text>
      </View>
      <View>
        {walletContext?.wallets.map((wallet: Wallet) => (
          <View key={`wallet-${wallet.shortName}`}>
            <WalletItem navigation={navigation} wallet={wallet} />
          </View>
        ))}
      </View>
    </View>
  );
  return content;
};
