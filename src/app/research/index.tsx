import { RouteComponentProps } from '@reach/router'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``

interface ResearchProps extends RouteComponentProps {}
export const Research = (props: ResearchProps) => {
  return (
    <Wrapper>
      <h1>Research</h1>
    </Wrapper>
  )
}
