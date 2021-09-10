import React from 'react'
import styled from 'styled-components'
import { HiOutlineSearch } from 'react-icons/hi'

const Wrapper = styled.div``

export const SearchBar = () => {
  return (
    <Wrapper>
      Search
      <HiOutlineSearch />
    </Wrapper>
  )
}
