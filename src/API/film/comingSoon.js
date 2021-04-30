import { request } from '../request'
export function getComingSoon () {
  return request({
    url: '/gateway?cityId=310100&pageNum=1&pageSize=10&type=2&k=7869099',
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16188124773610242134835201","bc":"310100"}',
      'X-Host': 'mall.film-ticket.film.list'
    }
  })
}
