import ajax from '../ajax'

const url = {
  getItem: '/category/',
  getList: '/category',
  postItem: '/category',
  putItem: '/category/',
  delItem: '/category/'
}

export default {
  getItem(id) {
    const uri = url.getItem + id
    return ajax.get(uri)
  },
  getList() {
    return ajax.get(url.getList)
  },
  postItem(obj) {
    return ajax.post(url.postItem, obj)
  },
  putItem(id, obj) {
    const uri = url.putItem + id
    return ajax.put(uri, obj)
  },
  delItem(id) {
    const uri = url.delItem + id
    return ajax.del(uri)
  }
}
