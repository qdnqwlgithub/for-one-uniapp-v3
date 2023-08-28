/**
 * search页面的一些api
 */
const http = uni.$u.http

export const getC2ListByC1Id = (c1Id) =>
  http.get(`/g_data/api/sale/good_usage_category/getForoneYCategoryByUsageId?usage_category_id=${c1Id}`)

export const getC3ListByC1IdAndC2Id = (c1Id, c2Id) =>
  http.get(`/g_data/api/sale/good_usage_category/getForoneXCategoryByUsageId`, {
    params: {
      usage_category_id: c1Id,
      y_category_id: c2Id
    }
  })

export const pageGood = (queryWrapper) => {
  let realQeryWrapper = {}
  realQeryWrapper.usage_category_id = queryWrapper.c1Id
  if (queryWrapper.c2Id) {
    realQeryWrapper.y_category_id = queryWrapper.c2Id
  }
  if (queryWrapper.c2Id) {
    realQeryWrapper.x_category_id = queryWrapper.c3Id
  }
  if (queryWrapper.pageSize) {
    realQeryWrapper.page_size = queryWrapper.pageSize
  }
  if (queryWrapper.pageNumber) {
    realQeryWrapper.page = queryWrapper.pageNumber
  }
  return http.get(`/g_data/api/sale/goodsMainCategoryCombo/getForoneGoods`, {
    params: realQeryWrapper
  })
}

export const collectGood = (goodId) =>
  http.post(`/api/onlyforone/collection/add`, { good_id: goodId })

export const cancelCollectGood = (goodId) =>
  http.delete(`/api/onlyforone/collection/delete/${goodId}`, {
    params: {
      good_id: goodId
    }
  })
