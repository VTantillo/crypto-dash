import React from 'react'
import { Location, Router } from '@reach/router'
import { Dashboard } from './dash'
import { Layout } from '../components/layout'
import { Portfolio } from './portfolio'
import { Research } from './research'
import { Settings } from './settings'

import styled from 'styled-components'

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
