import {ImageStorage} from 'helpers/imageStorage';
import {Wallet} from 'models/wallet';
import React from 'react';
import {View, Text, Image} from 'react-native';
import {WalletItem} from './components/walletItem';

export const HomeScreen = ({navigation}: {navigation: any}) => {
  const bitcoin: Wallet = {
    name: 'Bitcoin',
    shortName: 'BTC',
    currencyCode: 'BTC',
    amount: 0.31244124,
    icon: ImageStorage.btc,
  };
  const ether: Wallet = {
    name: 'Ether',
    shortName: 'ETH',
    currencyCode: 'ETH',
    amount: 0.327834478541236547,
    icon: ImageStorage.eth,
  };
  const paxDollar: Wallet = {
    name: 'Pax Dollar',
    shortName: 'PAX',
    currencyCode: 'USDP',
    amount: 0.32,
    icon: ImageStorage.pax,
  };
  const banker: Wallet = {
    name: 'Banker',
    shortName: 'BNK',
    currencyCode: 'BNK',
    amount: 131231567,
    icon: ImageStorage.bnk,
  };

  const wallets = [bitcoin, ether, paxDollar, banker];
  const content = (
    <View>
      <View>
        <Image source={ImageStorage.usd} />
        <Text>Total</Text>
        <Text>7029.06 USD</Text>
      </View>
      <View>
        {wallets.map((wallet: Wallet) => (
          <View key={`wallet-${wallet.shortName}`}>
            <WalletItem navigation={navigation} wallet={wallet} />
          </View>
        ))}
      </View>
    </View>
  );
  return content;
};
