import {Currency} from 'enums/enums';
import {ImageStorage} from 'helpers/imageStorage';
import {Wallet} from 'models/wallet';
import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {ConvertField} from './components/convertField';

const usd: Wallet = {
  name: 'United States Dollar',
  shortName: 'USD',
  currencyCode: Currency.USD,
  amount: 0,
  convertRate: 1,
  icon: ImageStorage.usd,
};

export const WalletScreen = (props: {wallet: Wallet; navigation: any}) => {
  const {wallet, navigation} = props;
  //const [email, setEmail] = useState('');

  useEffect(() => {
    navigation.setOptions({
      title: wallet.name,
    });
  }, [navigation, wallet]);

  const content = (
    <View>
      <View>
        <View>
          <Image source={ImageStorage.convertIllustration} />
        </View>
        <View>
          <Text>Pay amount</Text>
          <ConvertField wallet={wallet} />
        </View>
        <View>
          <Image source={ImageStorage.convert} />
        </View>
        <View>
          <Text>Receive amount</Text>
          <ConvertField wallet={usd} />
        </View>
      </View>
    </View>
  );

  return content;
};
