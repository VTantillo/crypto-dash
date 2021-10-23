export interface CryptoCurrency {
  id: number
  symbol: string
  name: string
  description: string
  logoUrl: string
  websiteUrl: string
}

export interface FiatCurrency {
  id: number
  symbol: string
  name: string
}

export interface User {
  firstName: string
  lastName: string
  settings: UserSettings
}

export interface UserSettings {
  alphaVantageKey: string
  nomicsKey: string
}
