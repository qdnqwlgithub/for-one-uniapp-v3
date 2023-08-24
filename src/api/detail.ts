/**
 * detail页面的一些api
 */
import request from '@/config/axios'

export const getGoodsDetailByIdAndUsageCategoryId = (id, usage_category_id) =>
  request.get({
    url: '/g_data/api/sale/goodsMainCategoryCombo/detail',
    params: {
      usage_category_id,
      id
    }
  })
