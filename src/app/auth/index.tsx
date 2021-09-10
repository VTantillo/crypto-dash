import { RouteComponentProps, Router } from '@reach/router'
import React from 'react'
import { Login } from './login'

interface AuthProps extends RouteComponentProps {}
export const Auth = (props: AuthProps) => {
  return (
    <Router>
      <Login default path="/" />
    </Router>
  )
}
