import React, {useCallback, useContext, useMemo, useState} from 'react';
import {
  bankerWallet,
  bitcoinWallet,
  etherWallet,
  paxDollarWallet,
  Wallet,
} from 'models/wallet';
import {createContext} from 'react';
import {Utils} from 'helpers/utils';
import {Currency} from 'enums/enums';
import update, {Spec} from 'immutability-helper';
import {CurrencyExchange} from 'models/api/currencyExchange';

type WalletProviderProps = {children: React.ReactNode};

const WalletContext = createContext<
  | {
      wallets: Wallet[];
      fetchWallets:() => void;
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
  const [wallets, setWallets] = useState<Wallet[]>([]);

  const fetchWalletsWithRates = async (): Promise<Wallet[]> => {
    const initWallets = [
      bitcoinWallet,
      etherWallet,
      paxDollarWallet,
      bankerWallet,
    ];
    const currencyExchangePromises = initWallets.map((wallet: Wallet) =>
      Utils.getCurrencyExchangeRate(wallet.currencyCode, Currency.USD),
    );

    const currencyExchanges = await Promise.all(currencyExchangePromises);
    initWallets.forEach((wallet_1: Wallet, walletIndex: number) => {
      const currencyExchangeIndex = currencyExchanges.findIndex(
        (item: CurrencyExchange) => item.currencyFrom === wallet_1.currencyCode,
      );
      initWallets[walletIndex].convertRate =
        currencyExchanges[currencyExchangeIndex].last;
    });
    return initWallets;
  };

  const fetchWallet = async (wallet: Wallet) => {
    const currencyExchange = await Utils.getCurrencyExchangeRate(
      wallet.currencyCode,
      Currency.USD,
    );
    const walletIndex = wallets.findIndex(
      (item: Wallet) => item.currencyCode === wallet.currencyCode,
    );
    const updateObj: Spec<Wallet[]> = {};
    updateObj[walletIndex] = {
      convertRate: {$set: currencyExchange.last},
    };

    const updatedWallets = update(wallets, updateObj);
    setWallets(updatedWallets);
  };

  const fetchWallets = useCallback(async () => {
    const result = await fetchWalletsWithRates();
    setWallets(result);
  }, []);

  const contextValue = useMemo(
    () => ({
      wallets,
      fetchWallets,
    }),
    [wallets, fetchWallets],
  );

  return (
    <WalletContext.Provider value={contextValue}>
      {children}
    </WalletContext.Provider>
  );
};
