import { request } from '../request'
export function getCinema (id) {
  return request({
    url: `/gateway?cityId=${id}&ticketFlag=1&k=343522`,
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16188124773610242134835201","bc":"110100"}',
      'X-Host': 'mall.film-ticket.cinema.list'
    }
  })
}
