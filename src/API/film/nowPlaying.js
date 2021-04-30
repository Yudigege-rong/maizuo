import { request } from '../request'
export function getNowPlaying () {
  return request({
    url: '/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=1679928',
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16188124773610242134835201"}',
      'X-Host': 'mall.film-ticket.film.list'
    }
  })
}
