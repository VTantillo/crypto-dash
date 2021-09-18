import { RouteComponentProps } from '@reach/router'
import React from 'react'
import styled from 'styled-components'
import { CoinChart } from './coin-chart'
import { MarketOverview } from './market-overview'
import { MarketTrends } from './market-trends'
import { MyAssets } from './my-assets'
import { News } from './news'
import { Ticker } from './ticker'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 160px 1fr;
  height: 100%;
  grid-row-gap: 20px;
  padding: 20px;
`

const TopRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
`

const BottomRow = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 2fr;
  grid-column-gap: 20px;
`

interface DashboardProps extends RouteComponentProps {}
export const Dashboard = (props: DashboardProps) => {
  return (
    <Wrapper>
      <TopRow>
        <News />
        <CoinChart />
      </TopRow>
      <Ticker />
      <BottomRow>
        <MarketOverview />
        <MyAssets />
        <MarketTrends />
      </BottomRow>
    </Wrapper>
  )
}
