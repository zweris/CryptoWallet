import {Currency} from 'enums/enums';
import {ImageStorage} from 'helpers/imageStorage';
import {ImageSourcePropType} from 'react-native';

export class Wallet {
  name!: string;
  shortName!: string;
  currencyCode!: Currency;
  amount!: number;
  convertRate!: number;
  icon!: ImageSourcePropType;
}

export const bitcoinWallet: Wallet = {
  name: 'Bitcoin',
  shortName: 'BTC',
  currencyCode: Currency.BTC,
  amount: 0.31244124,
  convertRate: 1,
  icon: ImageStorage.btc,
};

export const etherWallet: Wallet = {
  name: 'Ether',
  shortName: 'ETH',
  currencyCode: Currency.ETH,
  amount: 0.327834478541236547,
  convertRate: 1,
  icon: ImageStorage.eth,
};

export const paxDollarWallet: Wallet = {
  name: 'Pax Dollar',
  shortName: 'PAX',
  currencyCode: Currency.USDP,
  amount: 0.32,
  convertRate: 1,
  icon: ImageStorage.pax,
};

export const bankerWallet: Wallet = {
  name: 'Banker',
  shortName: 'BNK',
  currencyCode: Currency.BNK,
  amount: 131231567,
  convertRate: 1,
  icon: ImageStorage.bnk,
};

export const usdWallet: Wallet = {
  name: 'United States Dollar',
  shortName: 'USD',
  currencyCode: Currency.USD,
  amount: 0,
  convertRate: 1,
  icon: ImageStorage.usd,
};
