import * as _ from 'lodash'

export const convertPage = (queryWarpper) => {
  let r = _.cloneDeep(queryWarpper)
  r.page_size = queryWarpper.pageSize
  delete r.pageSize
  r.page = queryWarpper.pageNumber
  delete r.pageNumber
  return r
}
