import { PAGE_INFO } from '../util/constants'

export const usePageInfo = (route: string) => {
  switch (route) {
    case PAGE_INFO.dashboard.path:
      return PAGE_INFO.dashboard
    case PAGE_INFO.portfolio.path:
      return PAGE_INFO.portfolio
    case PAGE_INFO.research.path:
      return PAGE_INFO.research
    case PAGE_INFO.settings.path:
      return PAGE_INFO.settings
    default:
      return null
  }
}
