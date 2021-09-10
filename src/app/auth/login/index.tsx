import { RouteComponentProps } from '@reach/router'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``

interface LoginProps extends RouteComponentProps {}
export const Login = (props: LoginProps) => {
  return (
    <Wrapper>
      <h1>Login Page</h1>
    </Wrapper>
  )
}
