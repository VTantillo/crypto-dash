import React from 'react'
import { AiOutlinePieChart } from 'react-icons/ai'
import { BsBriefcase } from 'react-icons/bs'
import { RiHome5Line, RiLogoutCircleLine, RiSettingsLine } from 'react-icons/ri'
import styled from 'styled-components'

const Wrapper = styled.div``

interface SideNavProps {}
export const SideNav = (props: SideNavProps) => {
  return (
    <Wrapper>
      <RiHome5Line />
      <AiOutlinePieChart />
      <BsBriefcase />
      <RiSettingsLine />
      <RiLogoutCircleLine />
    </Wrapper>
  )
}
