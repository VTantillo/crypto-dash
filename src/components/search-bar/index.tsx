import React from 'react'
import styled from 'styled-components'
import { HiOutlineSearch } from 'react-icons/hi'

const Wrapper = styled.div`
  height: 48px;
  width: 224px;
  border-radius: 16px;
  background-color: ${(props) => props.theme.colors.searchBarBackground};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SearchText = styled.input`
  margin-left: 16px;
  background-color: ${(props) => props.theme.colors.searchBarBackground};
  border: none;
  color: white;
  &:focus-visible {
    border: none;
    outline: none;
  }
`
interface SearchButtonProps {
  onClick?: () => void
}
const SearchButton = styled(HiOutlineSearch)<SearchButtonProps>`
  margin-right: 16px;
  height: 16;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.activeNavLinkIcon};
  }
`

export const SearchBar = () => {
  return (
    <Wrapper>
      <SearchText placeholder="Search..." />

      <SearchButton />
    </Wrapper>
  )
}
