import {ImageSourcePropType} from 'react-native';

export class Wallet {
  name!: string;
  shortName!: string;
  currencyCode!: string;
  amount!: number;
  icon!: ImageSourcePropType;
}
