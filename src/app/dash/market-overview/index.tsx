import React from 'react'
import styled from 'styled-components'
import { Card } from '../../../components/card'

const Wrapper = styled(Card)`
  height: 100%;
`

export const MarketOverview = () => {
  return (
    <Wrapper>
      <h3>Market Overview</h3>
    </Wrapper>
  )
}
