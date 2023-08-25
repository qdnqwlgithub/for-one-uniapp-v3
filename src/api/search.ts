/**
 * search页面的一些api
 */
import request from '@/config/axios'

export const getC2ListByC1Id = (c1Id) =>
  request.get({
    url: `/g_data/api/sale/good_usage_category/getForoneYCategoryByUsageId?usage_category_id=${c1Id}`
  })

export const getC3ListByC1IdAndC2Id = (c1Id, c2Id) =>
  request.get({
    url: `/g_data/api/sale/good_usage_category/getForoneXCategoryByUsageId`,
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
  return request.get({
    url: `/g_data/api/sale/goodsMainCategoryCombo/getForoneGoods`,
    params: realQeryWrapper
  })
}

export const collectGood = (goodId) =>
  request.post({
    url: `/api/onlyforone/collection/add`,
    params: {
      good_id: goodId
    }
  })

export const cancelCollectGood = (goodId) =>
  request.delete({
    url: `/api/onlyforone/collection/delete/${goodId}`,
    params: {
      good_id: goodId
    }
  })
