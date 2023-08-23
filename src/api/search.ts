/**
 * search页面的一些api
 */
import request from '@/config/axios'

export const getC2ListByC1Id = (c1Id) =>
  request.get({
    url: `/g_data/api/sale/good_usage_category/getForoneYCategoryByUsageId?usage_category_id=${c1Id}`
  })
