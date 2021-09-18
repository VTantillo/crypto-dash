import React from 'react'
import styled from 'styled-components'
import { Card } from '../../../components/card'
const Wrapper = styled(Card)`
  height: 100%;
`

export const MyAssets = () => {
  return (
    <Wrapper>
      <h3>My Assets</h3>
    </Wrapper>
  )
}
