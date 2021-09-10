import { RouteComponentProps } from '@reach/router'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``

interface SettingsProps extends RouteComponentProps {}
export const Settings = (props: SettingsProps) => {
  return (
    <Wrapper>
      <h1>Settings</h1>
    </Wrapper>
  )
}
