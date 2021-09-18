import React from 'react'
import { AiOutlinePieChart } from 'react-icons/ai'
import { BsBriefcase } from 'react-icons/bs'
import { RiHome5Line, RiLogoutCircleLine, RiSettingsLine } from 'react-icons/ri'
import styled from 'styled-components'
import { useLocation, navigate } from '@reach/router'
import { SIZES } from '../../constants'

const Wrapper = styled.div`
  grid-area: sidenav;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

interface SideNavProps {}
export const SideNav = (props: SideNavProps) => {
  const location = useLocation()

  return (
    <Wrapper>
      <LinkWrapper isActive={location.pathname === '/'}>
        <DashboardIcon
          onClick={async () => {
            navigate('/')
          }}
        />
      </LinkWrapper>

      <LinkWrapper isActive={location.pathname === '/research'}>
        <ResearchIcon
          onClick={async () => {
            navigate('/research')
          }}
        />
      </LinkWrapper>

      <LinkWrapper isActive={location.pathname === '/portfolio'}>
        <PortfolioIcon
          onClick={async () => {
            navigate('/portfolio')
          }}
        />
      </LinkWrapper>

      <LinkWrapper isActive={location.pathname === '/settings'}>
        <SettingsIcon
          onClick={async () => {
            navigate('/settings')
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
