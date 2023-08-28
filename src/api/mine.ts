/**
 * mine页面的一些api
 */
import request from '@/config/axios'
import { convertPage } from '@/utils/convert'

export const pageCollectGood = (queryWrapper) =>
  request.get({
    url: '/api/onlyforone/collection/index',
    params: convertPage(queryWrapper)
  })

export const pageCollectExample = (queryWrapper) =>
  request.post({
    url: '/api/onlyforone/caseCollection/index',
    params: convertPage(queryWrapper)
  })
