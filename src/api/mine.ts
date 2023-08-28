/**
 * mine页面的一些api
 */
const http = uni.$u.http
import { convertPage } from '@/utils/convert'

export const pageCollectGood = (queryWrapper) =>
  http.get('/api/onlyforone/collection/index', {
    params: convertPage(queryWrapper)
  })

export const pageCollectExample = (queryWrapper) =>
  http.post('/api/onlyforone/caseCollection/index', convertPage(queryWrapper))
