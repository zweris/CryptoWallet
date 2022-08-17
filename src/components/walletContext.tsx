import React, {useCallback, useContext, useMemo, useState} from 'react';
import {ImageStorage} from 'helpers/imageStorage';
import {Wallet} from 'models/wallet';
import {createContext} from 'react';
import {Utils} from 'helpers/utils';
import {Currency} from 'enums/enums';

const bitcoin: Wallet = {
  name: 'Bitcoin',
  shortName: 'BTC',
  currencyCode: Currency.BTC,
  amount: 0.31244124,
  convertRate: 1,
  icon: ImageStorage.btc,
};
const ether: Wallet = {
  name: 'Ether',
  shortName: 'ETH',
  currencyCode: Currency.ETH,
  amount: 0.327834478541236547,
  convertRate: 1,
  icon: ImageStorage.eth,
};
const paxDollar: Wallet = {
  name: 'Pax Dollar',
  shortName: 'PAX',
  currencyCode: Currency.USDP,
  amount: 0.32,
  convertRate: 1,
  icon: ImageStorage.pax,
};
const banker: Wallet = {
  name: 'Banker',
  shortName: 'BNK',
  currencyCode: Currency.BNK,
  amount: 131231567,
  convertRate: 1,
  icon: ImageStorage.bnk,
};

type WalletProviderProps = {children: React.ReactNode};

const WalletContext = createContext<
  | {
      wallets: Wallet[];
      fetchWalletRates: () => void;
    }
  | undefined
>(undefined);

export const useWalletContext = () => {
  const context = useContext(WalletContext);

  if (context === undefined) {
    throw new Error(
      `${useWalletContext.name} was used outside of its Provider`,
    );
  }

  return context;
};

export const WalletProvider = ({children}: WalletProviderProps) => {
  const [wallets, setWallets] = useState<Wallet[]>([
    bitcoin,
    ether,
    paxDollar,
    banker,
  ]);

  const fetchWalletRates = useCallback(() => {
    const ratesPromises = wallets.map((wallet: Wallet) =>
      Utils.getCurrencyExchangeRate(wallet.currencyCode, Currency.USD),
    );
    Promise.all(ratesPromises).then(response => console.log(response[0]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contextValue = useMemo(
    () => ({
      wallets,
      fetchWalletRates,
    }),
    [wallets, fetchWalletRates],
  );

  return (
    <WalletContext.Provider value={contextValue}>
      {children}
    </WalletContext.Provider>
  );
};
