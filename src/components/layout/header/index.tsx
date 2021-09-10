import React from 'react'
import styled from 'styled-components'
import { SearchBar } from '../../search-bar'
import { RiNotification3Line, RiUser4Line } from 'react-icons/ri'

const Wrapper = styled.div``

interface HeaderProps {}
export const Header = (props: HeaderProps) => {
  return (
    <Wrapper>
      <h1>Page Title</h1>
      <SearchBar />
      <RiNotification3Line />
      <RiUser4Line />
    </Wrapper>
  )
}
