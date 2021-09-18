import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.colors.accent};
`

export const Ticker = () => {
  return (
    <Wrapper>
      <h3>Ticker</h3>
    </Wrapper>
  )
}
