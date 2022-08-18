import {useWalletContext} from 'components/walletContext';
import {ImageStorage} from 'helpers/imageStorage';
import {Utils} from 'helpers/utils';
import {Wallet} from 'models/wallet';
import React, {useCallback, useEffect} from 'react';
import {View, Text, Image, RefreshControl, ScrollView} from 'react-native';
import {Theme} from 'theme/theme';
import {WalletItem} from './components/walletItem';

export const HomeScreen = ({navigation}: {navigation: any}) => {
  const walletContext = useWalletContext();
  const [refreshing, setRefreshing] = React.useState(false);

  const loadWallets = useCallback(async () => {
    walletContext.fetchWallets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    loadWallets().then(() => setRefreshing(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadWallets();
    });

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const calculateTotal = () => {
    let result = 0;
    walletContext.wallets.forEach(
      (wallet: Wallet) =>
        (result += Utils.calculateWalletValue(
          wallet.amount,
          wallet.convertRate,
          false,
        )),
    );
    return result;
  };

  const content = (
    <ScrollView
      contentContainerStyle={[Theme.container]}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View>
        <Text style={Theme.titleTotal}>Total</Text>
        <View style={[Theme.width90pct, Theme.flexSpaceBetweenRow]}>
          <Image source={ImageStorage.usd} />
          <Text style={Theme.titleAmount}>{calculateTotal().toFixed(2)}</Text>
          <Text style={Theme.titleTotalCurrency}>USD</Text>
        </View>
      </View>
      <Text style={Theme.titleTotal}>Wallets</Text>
      <View>
        {walletContext.wallets.map((wallet: Wallet) => (
          <View key={`wallet-${wallet.shortName}`}>
            <WalletItem navigation={navigation} wallet={wallet} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
  return content;
};
