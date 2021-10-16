import React from 'react'
import styled from 'styled-components'
import { Card } from '../../../components/card'

const Wrapper = styled(Card)`
  height: 100%;
`

export const News = () => {
  return (
    <Wrapper>
      <h3>Crypto News</h3>
    </Wrapper>
  )
}
