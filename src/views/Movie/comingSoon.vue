<template>
    <div class="content">
        <Loading v-if="isLoading"></Loading>
        <ul>
            <li v-for="data in datalist" :key="data.filmId">
                <img :src="data.poster" alt="">
                <div class="movie_details">
                    <div class="movie_details_movieId">
                        <span class="name">{{data.name}}</span>
                        <span class="item">{{data.filmType.name}}</span>
                    </div>
                    <div class="movie_details_pingfen">
                        <span>{{data.grade ? '观众评分' : '&nbsp;'}}</span>
                        <span class="number">{{data.grade}}</span>
                    </div>
                    <div class="movie_details_star">
                        <span>主演：{{data.actors | actorFilter}}</span>
                    </div>
                    <div class="movie_details_time">
                        <span>{{data.nation}}</span>
                    </div>
                </div>
                <div class="movie_buy">购票</div>
            </li>
        </ul>
    </div>
</template>

<script>
import { getComingSoon } from '@/API/film/comingSoon'
export default {
  name: 'comingSoon',
  data () {
    return {
      datalist: [],
      isLoading: true,
      prevCityId: -1
    }
  },
  mounted () {
    var cityId = this.$store.state.city.id
    if (this.prevCityId === cityId) {
      return
    }
    this.isLoading = true
    getComingSoon(cityId).then((res) => {
      this.datalist = res.data.data.films
      this.isLoading = false
      this.prevCityId = cityId
    })
  }
}
</script>

<style lang="scss" scoped>
.content{
    margin-top: 50px;
    padding-bottom: 60px;
}
ul{
    li{
        display: flex;
        padding: 10px;
        overflow: hidden;
        align-items: center;
        border-bottom: 1px solid #eee;
        img{
            float: left;
            width: 66px;
        }
        span{
            font-size: 13px;
            margin-top: 4px;
            color: #797d82;
        }
        .movie_details{
            position: relative;
            float: left;
            width: calc(100% - 116px);
            padding: 0 10px;
            .movie_details_movieId{
                sapn{
                    display: inline-block;
                    vertical-align: middle;
                }
                .name{
                    max-width: calc(100% - 25px);
                    color: #191a1b;
                    font-size: 16px;
                    height: 22px;
                    line-height: 22px;
                    margin-right: 5px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .item{
                    font-size: 9px;
                    color: #fff;
                    background-color: #d2d6dc;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 2px;
                    border-radius: 2px;
                }
            }
            .movie_details_pingfen{
                visibility: visible;
                .number{
                    color: #ffb232;
                    font-size: 14px;
                }
            }
        }
        .movie_buy{
            line-height: 25px;
            float: left;
            top: 34px;
            height: 25px;
            width: 50px;
            color: #ff5f16;
            font-size: 13px;
            text-align: center;
            border-radius: 2px;
            float: right;
            border: 1px solid #ff5f16;
        }
    }
}
</style>
