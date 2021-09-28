import React from 'react'
import styled from 'styled-components'
import { CoinTicker } from './coin-ticker'

const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-column-gap: 20px;
`

export const Ticker = () => {
  return (
    <Wrapper>
      <CoinTicker />
      <CoinTicker />
    </Wrapper>
  )
}
