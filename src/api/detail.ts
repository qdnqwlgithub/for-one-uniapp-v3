/**
 * detail页面的一些api
 */
const http = uni.$u.http

export const getGoodsDetailByIdAndUsageCategoryId = (id, usageCategoryOd) =>
  http.get('/g_data/api/sale/goodsMainCategoryCombo/detail', {
    params: {
      usage_category_id: usageCategoryOd,
      id
    }
  })
