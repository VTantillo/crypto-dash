import React from 'react'
import styled from 'styled-components'
import { SearchBar } from '../search-bar'
import { RiNotification3Line, RiUser4Line } from 'react-icons/ri'
import { useLocation } from '@reach/router'
import { usePageInfo } from '../../hooks'

const Wrapper = styled.div`
  grid-area: header;
  display: grid;
  grid-template-columns: 9fr 3fr;
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Controls = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Notifications = styled.div`
  width: 48px;
  height: 48px;
  border: 1px solid rgba(217, 203, 255, 0.4);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NotificationIcon = styled(RiNotification3Line)`
  height: 24px;
  width: 24px;
`

const AvatarIcon = styled(RiUser4Line)`
  height: 24px;
  width: 24px;
`

const Avatar = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(217, 203, 255, 0.4);
  border-radius: 50%;
`

interface HeaderProps {}
export const Header = (props: HeaderProps) => {
  const location = useLocation()
  const pageInfo = usePageInfo(location.pathname)

  return (
    <Wrapper>
      <Title>
        <h2>{pageInfo?.title}</h2>
      </Title>
      <Controls>
        <SearchBar />
        <Notifications>
          <NotificationIcon />
        </Notifications>

        <Avatar>
          <AvatarIcon />
        </Avatar>
      </Controls>
    </Wrapper>
  )
}
