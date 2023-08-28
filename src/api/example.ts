/**
 * example页面的一些api
 */
const http = uni.$u.http

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
  return http.post('/api/onlyforone/cases/list',realQeryWrapper)
}

export const getExampleById = (id) =>
  http.get(`/api/onlyforone/cases/detail/${id}`)

export const switchStatus = (exampleId, status) => {

  return http.post(`/api/onlyforone/caseCollection/status/${exampleId}`, {
    status: status
  })
}
