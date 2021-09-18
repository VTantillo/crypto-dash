import { navigate, useLocation } from '@reach/router'
import React from 'react'
import { AiOutlinePieChart } from 'react-icons/ai'
import { BsBriefcase } from 'react-icons/bs'
import { RiHome5Line, RiLogoutCircleLine, RiSettingsLine } from 'react-icons/ri'
import styled from 'styled-components'
import { PAGE_INFO, SIZES } from '../../util/constants'

const Wrapper = styled.div`
  grid-area: sidenav;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-right-color: ${(props) => props.theme.colors.navLinkIcon};
  box-shadow: inset -2px 0px 0px ${(props) => props.theme.colors.navLinkIcon};
`

interface SideNavProps {}
export const SideNav = (props: SideNavProps) => {
  const location = useLocation()

  return (
    <Wrapper>
      <LinkWrapper isActive={location.pathname === PAGE_INFO.dashboard.path}>
        <DashboardIcon
          onClick={async () => {
            navigate(PAGE_INFO.dashboard.path)
          }}
        />
      </LinkWrapper>

      <LinkWrapper isActive={location.pathname === PAGE_INFO.research.path}>
        <ResearchIcon
          onClick={async () => {
            navigate(PAGE_INFO.research.path)
          }}
        />
      </LinkWrapper>

      <LinkWrapper isActive={location.pathname === PAGE_INFO.portfolio.path}>
        <PortfolioIcon
          onClick={async () => {
            navigate(PAGE_INFO.portfolio.path)
          }}
        />
      </LinkWrapper>

      <LinkWrapper isActive={location.pathname === PAGE_INFO.settings.path}>
        <SettingsIcon
          onClick={async () => {
            navigate(PAGE_INFO.settings.path)
          }}
        />
      </LinkWrapper>

      <LinkWrapper isActive={location.pathname === '/logout'}>
        <LogoutIcon
          onClick={async () => {
            console.log("Eventually I'll log out and reset the things")
          }}
        />
      </LinkWrapper>
    </Wrapper>
  )
}

interface LinkWrapperProps {
  isActive: boolean
}
const LinkWrapper = styled.div<LinkWrapperProps>`
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.activeNavLinkBackground : 'inherit'};
  color: ${(props) =>
    props.isActive ? props.theme.colors.activeNavLinkIcon : props.theme.colors.navLinkIcon};
  border-radius: 13px;
  height: ${SIZES.navLink};
  width: ${SIZES.navLink};
  display: flex;
  justify-content: center;
  align-items: center;
`

interface IconProps {
  onClick: () => void
}
const DashboardIcon = styled(RiHome5Line)<IconProps>`
  height: ${SIZES.navLinkIcon};
  width: ${SIZES.navLinkIcon};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.activeNavLinkIcon};
  }
`

const ResearchIcon = styled(AiOutlinePieChart)<IconProps>`
  height: ${SIZES.navLinkIcon};
  width: ${SIZES.navLinkIcon};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.activeNavLinkIcon};
  }
`

const PortfolioIcon = styled(BsBriefcase)<IconProps>`
  height: ${SIZES.navLinkIcon};
  width: ${SIZES.navLinkIcon};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.activeNavLinkIcon};
  }
`

const SettingsIcon = styled(RiSettingsLine)<IconProps>`
  height: ${SIZES.navLinkIcon};
  width: ${SIZES.navLinkIcon};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.activeNavLinkIcon};
  }
`

const LogoutIcon = styled(RiLogoutCircleLine)<IconProps>`
  height: ${SIZES.navLinkIcon};
  width: ${SIZES.navLinkIcon};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.activeNavLinkIcon};
  }
`
