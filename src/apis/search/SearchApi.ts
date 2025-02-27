import { AxiosInstance } from 'axios'

import instance from '@/configs/axios/instance'

export class SearchApi {
  axios: AxiosInstance = instance
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios
  }

  get = async (params: any): Promise<{ result: any[] }> => {
    const { data } = await this.axios({
      method: 'GET',
      url: `/api/search`,
      params,
    })
    return data
  }
}

const searchApi = new SearchApi()

export default searchApi
