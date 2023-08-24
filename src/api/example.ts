/**
 * example页面的一些api
 */
import request from '@/config/axios'

export const pageExample = (queryWrapper) =>
  request.get({ url: '/api/onlyforone/cases/list', params: queryWrapper })
