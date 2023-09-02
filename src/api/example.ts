/**
 * example页面的一些api
 */
const http = uni.$u.http

// 为什么不用get？
export const pageExample = (queryWrapper) => {
  let realQeryWrapper = {}
  realQeryWrapper.style_category_id = queryWrapper.styleSelectedIdsArray
  realQeryWrapper.space_category_id = queryWrapper.spaceSelectedIdsArray
  realQeryWrapper.keyword = queryWrapper.keyword
  if (queryWrapper.pageSize) {
    realQeryWrapper.page_size = queryWrapper.pageSize
  }
  if (queryWrapper.pageNumber) {
    realQeryWrapper.page = queryWrapper.pageNumber
  }
  return http.post('/api/onlyforone/cases/list', realQeryWrapper)
}

export const getExampleById = (id) =>
  http.get(`/api/onlyforone/cases/detail/${id}`)

export const switchStatus = (exampleId, status) => {
  return http.post(`/api/onlyforone/caseCollection/status/${exampleId}`, {
    status: status
  })
}

export const listSpaceOptions = () =>
  http.get(`/api/onlyforone/caseSpaceCategory/list`)

export const listStyleOptions = () =>
  http.get(`/api/onlyforone/caseStyleCategory/list`)
