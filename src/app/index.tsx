import { Location, Router } from '@reach/router'
import React from 'react'
import styled from 'styled-components'
import { Layout } from '../components/layout'
import { Dashboard } from './dash'
import { Portfolio } from './portfolio'
import { Research } from './research'
import { Settings } from './settings'

const LayoutRouter = styled(Router)`
  grid-area: content;
`

export const App = () => {
  return (
    <Location>
      {() => (
        <Layout>
          <LayoutRouter>
            <Dashboard path="/" />
            <Portfolio path="/portfolio" />
            <Research path="/research" />
            <Settings path="/settings" />
          </LayoutRouter>
        </Layout>
      )}
    </Location>
  )
}
