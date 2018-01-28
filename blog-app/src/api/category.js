import request from '@/request'

export function getAllCategorys() {
  return request({
    url: '/categorys',
    method: 'get',
  })
}

export function getCategory(id) {
  return request({
    url: `/categorys/${id}`,
    method: 'get',
  })
}