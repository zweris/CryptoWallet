import {Currency} from 'enums/enums';
import {ImageSourcePropType} from 'react-native';

export class Wallet {
  name!: string;
  shortName!: string;
  currencyCode!: Currency;
  amount!: number;
  convertRate!: number;
  icon!: ImageSourcePropType;
}
