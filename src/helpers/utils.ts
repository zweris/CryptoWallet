import {Currency} from 'enums/enums';
import {CurrencyExchange} from 'models/api/currencyExchange';

export class Utils {
  private static currencyExchangeRateUrl =
    'https://spectrocoin.com/scapi/ticker/';

  public static getCurrencyExchangeRate = async (
    convertFrom: Currency,
    convertTo: Currency,
  ): Promise<CurrencyExchange> => {
    const url = `${this.currencyExchangeRateUrl}/${convertFrom}/${convertTo}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await (response.json() as unknown as Promise<CurrencyExchange>);
  };

  public static calculateWalletValue = (
    amount: number,
    rate: number,
    isBaseCurrency: boolean,
  ) => {
    const result = isBaseCurrency ? amount * rate : amount / rate;
    return result;
  };
}
