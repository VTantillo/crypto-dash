import React from 'react'
import styled from 'styled-components'
import { Header } from './header'
import { SideNav } from './side-nav'

const Wrapper = styled.div``

interface LayoutProps {
  children?: React.ReactElement
}
export const Layout = (props: LayoutProps) => {
  return (
    <Wrapper>
      <Header />
      <SideNav />
      {props.children}
    </Wrapper>
  )
}
