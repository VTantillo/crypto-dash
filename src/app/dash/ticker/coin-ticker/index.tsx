import React from 'react'
import styled from 'styled-components'
import { CryptoCurrency } from '../../../../models'

const Wrapper = styled.div`
  min-width: 240px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const CoinCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 24px;
  height: 100%;
  width: 100%;
  margin-top: 32px;
  background-color: ${(props) => props.theme.colors.cardBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CoinIcon = styled.img`
  height: 64px;
  width: 64px;
  background-color: ${(props) => props.theme.colors.cardBackground};
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  margin-top: -32px;
`

interface CoinTickerProps {
  coin: CryptoCurrency
}
export const CoinTicker = (props: CoinTickerProps) => {
  return (
    <Wrapper>
      <CoinCard>
        <CoinIcon src={props.coin.logoUrl} />
        <h4>{props.coin.name}</h4>
      </CoinCard>
    </Wrapper>
  )
}
