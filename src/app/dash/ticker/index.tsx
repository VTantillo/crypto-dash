import React from 'react'
import styled from 'styled-components'
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
  return (
    <Wrapper>
      <CoinTicker />
      <CoinTicker />
      <CoinTicker />
      <CoinTicker />
      <CoinTicker />
      <CoinTicker />
      <CoinTicker />
      <CoinTicker />
      <CoinTicker />
      <CoinTicker />
      <CoinTicker />
      <CoinTicker />
      <CoinTicker />
      <CoinTicker />
    </Wrapper>
  )
}
