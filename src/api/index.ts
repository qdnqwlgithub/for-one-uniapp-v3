import request from '@/config/axios'

export const getBannerList = () =>
  request.get({ url: '/api/onlyforone/banner/index' })
