import React from 'react'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import { tickerCryptoState } from '../../../states'
import { CoinTicker } from './coin-ticker'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  overflow-x: auto;
  gap: 16px;
  ::-webkit-scrollbar {
    display: none;
  }
`

export const Ticker = () => {
  const tickerCoins = useRecoilValue(tickerCryptoState)
  return (
    <Wrapper>
      {tickerCoins.map((c) => {
        return <CoinTicker coin={c} />
      })}
    </Wrapper>
  )
}
