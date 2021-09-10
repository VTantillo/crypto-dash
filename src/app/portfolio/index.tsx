import { RouteComponentProps } from '@reach/router'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``

interface PortfolioProps extends RouteComponentProps {}
export const Portfolio = (props: PortfolioProps) => {
  return (
    <Wrapper>
      <h1>Portfolio</h1>
    </Wrapper>
  )
}
