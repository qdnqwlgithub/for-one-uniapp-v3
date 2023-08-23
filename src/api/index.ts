/**
 * index页面的一些api
 */
import request from '@/config/axios'

export const getBannerList = () =>
  request.get({ url: '/api/onlyforone/banner/index' })

export const getCaseListOfIndex = () =>
  request.get({ url: '/api/onlyforone/cases/index' })

export const getUnionListOfIndex = () =>
  request.get({ url: '/api/onlyforone/businessPartner/index' })
