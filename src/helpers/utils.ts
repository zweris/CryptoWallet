import {Currency} from 'enums/enums';
import {Wallet} from 'models/wallet';
import {ApiService} from './apiService';

export class Utils {
  private static currencyExchangeRateUrl =
    'https://spectrocoin.com/scapi/ticker/';

  public static convertWalletToCurrency = async (
    apiService: ApiService,
    wallet: Wallet,
    convertTo: Currency,
  ) => {
    const url = `${this.currencyExchangeRateUrl}/${wallet.currencyCode}/${convertTo}`;
    try {
      const currency = await (await apiService.getExchangeCurrency(url)).data;
      const rate = currency.last;
      return wallet.amount / rate;
    } catch (error) {
      ApiService.handleException(error);
      return 0;
    }
  };
}
