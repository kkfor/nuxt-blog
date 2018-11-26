export default (times, format = 'yyyy.MM.dd hh:mm:ss') => {
  const time = Date.parse(times)
  if (!time) return null

  const date = new Date(time)

  const ele = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
  }

  // 匹配年替换
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  // 匹配 天|小时|分钟|秒 替换
  for (let i in ele) {
    if (new RegExp(`(${i})`).test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? ele[i] : ('00' + ele[i]).substr((ele[i] + '').length))
    }
  }

  return format

}