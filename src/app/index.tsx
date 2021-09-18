import React from 'react'
import { Location, Router } from '@reach/router'
import { Dashboard } from './dash'
import { Layout } from '../components/layout'
import { Portfolio } from './portfolio'
import { Research } from './research'
import { Settings } from './settings'

export const App = () => {
  return (
    <Location>
      {() => (
        <Layout>
          <Router>
            <Dashboard path="/" />
            <Portfolio path="/portfolio" />
            <Research path="/research" />
            <Settings path="/settings" />
          </Router>
        </Layout>
      )}
    </Location>
  )
}
