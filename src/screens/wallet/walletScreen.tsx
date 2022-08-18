import {ImageStorage} from 'helpers/imageStorage';
import {Utils} from 'helpers/utils';
import {usdWallet, Wallet} from 'models/wallet';
import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ConvertField} from './components/convertField';

export const WalletScreen = (props: {wallet: Wallet; navigation: any}) => {
  const {wallet, navigation} = props;
  const [convertValue, setConvertValue] = useState({
    convertFromAmount: '0',
    convertToAmount: '0',
    isBaseCurrency: false,
  });

  const handleConvertFieldValueChange = (value: string) => {
    const calculatedValue = Utils.calculateWalletValue(
      parseFloat(value),
      wallet.convertRate,
      convertValue.isBaseCurrency,
    ).toString();
    setConvertValue({
      convertFromAmount: convertValue.isBaseCurrency ? calculatedValue : value,
      convertToAmount: convertValue.isBaseCurrency ? value : calculatedValue,
      isBaseCurrency: convertValue.isBaseCurrency,
    });
  };

  const handleConvertFieldSwap = () => {
    const {convertFromAmount, convertToAmount, isBaseCurrency} = convertValue;
    setConvertValue({
      convertFromAmount: convertFromAmount,
      convertToAmount: convertToAmount,
      isBaseCurrency: !isBaseCurrency,
    });
  };

  useEffect(() => {
    navigation.setOptions({
      title: wallet.name,
    });
    setConvertValue({
      convertFromAmount: wallet.amount.toString(),
      convertToAmount: Utils.calculateWalletValue(
        wallet.amount,
        wallet.convertRate,
        false,
      ).toString(),
      isBaseCurrency: false,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const content = (
    <View>
      <View>
        <View>
          <Image source={ImageStorage.convertIllustration} />
        </View>
        <View>
          <Text>Pay amount</Text>
          <ConvertField
            icon={convertValue.isBaseCurrency ? usdWallet.icon : wallet.icon}
            value={
              convertValue.isBaseCurrency
                ? convertValue.convertToAmount
                : convertValue.convertFromAmount
            }
            title={
              convertValue.isBaseCurrency
                ? usdWallet.shortName
                : wallet.shortName
            }
            onChange={handleConvertFieldValueChange}
          />
        </View>
        <View>
          <TouchableOpacity onPress={handleConvertFieldSwap}>
            <Image source={ImageStorage.convert} />
          </TouchableOpacity>
        </View>
        <View>
          <Text>Receive amount</Text>
          <ConvertField
            icon={convertValue.isBaseCurrency ? wallet.icon : usdWallet.icon}
            value={
              convertValue.isBaseCurrency
                ? convertValue.convertFromAmount
                : convertValue.convertToAmount
            }
            title={
              convertValue.isBaseCurrency
                ? wallet.shortName
                : usdWallet.shortName
            }
            onChange={handleConvertFieldValueChange}
            disable={true}
          />
        </View>
      </View>
    </View>
  );

  return content;
};
