import { WindowLocation } from '@reach/router'
import React from 'react'
import styled from 'styled-components'
import { Header } from '../header'
import { SideNav } from '../side-nav'

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 100px 1fr;
  grid-template-areas:
    'sidenav header'
    'sidenav content';
`

const Content = styled.div`
  background-color: green;
  grid-area: content;
`

interface LayoutProps {
  children?: React.ReactElement
}
export const Layout = (props: LayoutProps) => {
  return (
    <Wrapper>
      <Header />
      <SideNav />
      <Content>{props.children}</Content>
    </Wrapper>
  )
}
