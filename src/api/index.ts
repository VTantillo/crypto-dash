import { NomicsKey } from '../env'
import axios from 'axios'

const baseUrl = 'https://api.nomics.com/v1'

const addRoute = (route: string): string => {
  return baseUrl + `${route}?key=${NomicsKey}`
}

export const nomicsApi = {
  getCurrenciesTicker: async (params: { ids?: string[]; page?: number; perPage?: number }) => {
    let url = addRoute('/currencies/ticker')
    url = url + '&status=active'
    url = url + '&interval=1d'
    url = url + `${params.perPage ? '&per-page=' + params.perPage : '&per-page=50'}`
    url = url + `${params.page ? '&page=' + params.page : '&page=1'}`
    const result = await axios(url)
    return result.data
  },
}
