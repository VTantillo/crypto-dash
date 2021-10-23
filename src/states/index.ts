import { atom, selector } from 'recoil'
import { CryptoCurrency, FiatCurrency, UserSettings } from '../models'
import crypto from '../res/crypto-currencies.json'
import fiat from '../res/fiat-currencies.json'

export const userSettingsState = atom<UserSettings>({
  key: 'userSettingsState',
  default: {} as UserSettings,
})

export const fiatCurrenciesState = atom<FiatCurrency[]>({
  key: 'fiatCurrenciesState',
  default: fiat as FiatCurrency[],
})

export const cryptoCurrenciesState = atom<CryptoCurrency[]>({
  key: 'cryptoCurrenciesState',
  default: crypto as CryptoCurrency[],
})

export const userTickerCryptoSymbolsState = atom<string[]>({
  key: 'userTickerCryptoSymbolsState',
  default: [
    'ADA',
    'BAT',
    'BNB',
    'BTC',
    'BUSD',
    'DOGE',
    'DOT',
    'ETC',
    'LTC',
    'MATIC',
    'OST',
    'SOL',
    'XRP',
  ],
})

export const tickerCryptoState = selector<CryptoCurrency[]>({
  key: 'tickerCryptoState',
  get: ({ get }) => {
    const cryptoCurrencies = get(cryptoCurrenciesState)
    const userTickers = get(userTickerCryptoSymbolsState)

    return cryptoCurrencies.filter((c: CryptoCurrency) => {
      return userTickers.includes(c.symbol)
    })
  },
})
