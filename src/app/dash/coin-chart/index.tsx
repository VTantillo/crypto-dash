import React from 'react'
import styled from 'styled-components'
import { Card } from '../../../components/card'

const Wrapper = styled(Card)`
  height: 100%;
`

export const CoinChart = () => {
  return (
    <Wrapper>
      <h3>Coin Chart</h3>
    </Wrapper>
  )
}
