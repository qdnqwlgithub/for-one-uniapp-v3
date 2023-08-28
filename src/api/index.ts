/**
 * index页面的一些api
 */
const http = uni.$u.http

export const getBannerList = () => http.get('/api/onlyforone/banner/index')

export const getCaseListOfIndex = () => http.get('/api/onlyforone/cases/index')

export const getUnionListOfIndex = () =>
  http.get('/api/onlyforone/businessPartner/index')

export const getCategoryList = () => http.get('/api/onlyforone/routes/index')
