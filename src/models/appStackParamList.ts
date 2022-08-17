import {Wallet} from './wallet';

export type AppStackParamList = {
  Home: undefined;
  Wallet: {wallet: Wallet};
};
