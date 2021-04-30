<template>
    <div class="content">
        <ul>
            <li v-for="data in datalist" :key="data.cinemaId">
                <div class="cinemaList_left">
                    <span class="name">{{data.name}}</span>
                    <span class="address">{{data.address}}</span>
                </div>
                <div class="cinemaList_right">
                    <div>
                        <span>{{ parseFloat(data.lowPrice / 100) }}</span>
                        <span class="upon">起</span>
                    </div>
                    <strong>{{data.Distance.toFixed(2)}}km</strong>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { getCinema } from '@/API/cinema'
export default {
  name: 'cinemalist',
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    getCinema().then((res) => {
      console.log(res.data)
      this.datalist = res.data.data.cinemas
    })
  }
}
</script>

<style lang="scss" scoped>
.content{
    padding-top: 94px;
    padding-bottom: 50px;
    ul{
        list-style: none;
        li{
            height: 50px;
            position: relative;
            background-color: white;
            padding: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            .cinemaList_left{
                width: calc(100% - 65px);
                text-align: left;
                padding-right: 15px;
                float: left;
                span{
                    display: block;
                    max-width: 80%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .name{
                    color: #191a1b;
                    font-size: 15px;
                    line-height: 22px;
                }
                .address{
                    color: #797d82;
                    font-size: 12px;
                    margin-top: 5px;
                }
            }
            .cinemaList_right{
                width: 57px;
                text-align: center;
                float: right;
                margin-right: -5px;
                span{
                    font-size: 15px;
                    color: #ff5f16;
                    height: 0 !important;
                    display: inline-table !important;
                }
                .upon{
                    font-size: 11px;
                    padding-left: 3px;
                }
                strong{
                    display: block;
                    font-size: 11px;
                    color: #797d82;
                    margin-top: 5px;
                }
            }
        }
    }
}
</style>
