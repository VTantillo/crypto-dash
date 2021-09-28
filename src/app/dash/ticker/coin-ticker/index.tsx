import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 124px;
  background-color: ${(props) => props.theme.colors.cardBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 24px;
`

const CoinIcon = styled.div`
  height: 50px;
  width: 50px;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 50%;
`

interface CoinTickerProps {}
export const CoinTicker = (props: CoinTickerProps) => {
  return (
    <Wrapper>
      <CoinIcon />
      <h4>Ticker</h4>
    </Wrapper>
  )
}
