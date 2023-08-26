/**
 * mine页面的一些api
 */
import request from '@/config/axios'

export const pageCollectGood = (queryWrapper) =>
  request.get({ url: '/api/onlyforone/collection/index' })

export const pageCollectExample = (queryWrapper) =>
  request.post({ url: '/api/onlyforone/caseCollection/index' })
