/**
 * example页面的一些api
 */
import request from '@/config/axios'

// 为什么不用get？
export const pageExample = (queryWrapper) => {
  let realQeryWrapper = {}
  realQeryWrapper.style_category_id = queryWrapper.styleCategoryIdList
  realQeryWrapper.space_category_id = queryWrapper.spaceCategoryIdList
  if (queryWrapper.pageSize) {
    realQeryWrapper.page_size = queryWrapper.pageSize
  }
  if (queryWrapper.pageNumber) {
    realQeryWrapper.page = queryWrapper.pageNumber
  }
  return request.post({
    url: '/api/onlyforone/cases/list',
    params: realQeryWrapper
  })
}
