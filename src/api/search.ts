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
