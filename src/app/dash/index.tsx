import { RouteComponentProps } from '@reach/router'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``

interface DashboardProps extends RouteComponentProps {}
export const Dashboard = (props: DashboardProps) => {
  return (
    <Wrapper>
      <h1>Dashboard</h1>
    </Wrapper>
  )
}
