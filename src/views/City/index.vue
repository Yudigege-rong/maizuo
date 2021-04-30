<template>
    <div class="page-city">
        <div class="header">
            <router-link to="/cinema" tag="div" class="header_left"><i>X</i></router-link>
            <div class="header_title">当前城市 - 北京</div>
        </div>
        <div class="hot-city">
            <div class="city-index-title">热门城市</div>
            <ul class="city-index-detail">
                <li class="city-item-detail" v-for="item in hotList" :key="item.cityId">
                    <div class="city-item-text">{{item.name}}</div>
                </li>
            </ul>
        </div>
        <mt-index-list>
            <mt-index-section :index="city.index" v-for="city in cityList" :key="city.index">
                <div v-for="data in city.list" :key="data.cityId">
                    <mt-cell :title="data.name"></mt-cell>
                </div>
            </mt-index-section>
        </mt-index-list>
    </div>
</template>

<script>
import { getCity } from '@/API/city'
export default {
  name: 'city',
  data () {
    return {
      cityList: [],
      hotList: []
    }
  },
  mounted () {
    getCity().then((res) => {
      console.log(res.data.data.cities)
      var cities = res.data.data.cities
      var { newCityList, hotListArr } = this.getCityList(cities)
      this.cityList = newCityList
      this.hotList = hotListArr
    })
  },
  methods: {
    getCityList (cities) {
      var cityListArr = []
      var hotListArr = []
      for (var i = 65; i < 91; i++) {
        cityListArr.push(String.fromCharCode(i))
      }
      //  console.log(cityListArr)
      var newCityList = []
      for (var j = 0; j < cityListArr.length; j++) {
        const arr = cities.filter((item) => item.pinyin.substring(0, 1).toUpperCase() === cityListArr[j])
        // console.log(arr)
        if (arr.length > 0) {
          newCityList.push({
            index: cityListArr[j],
            list: arr
          })
        }
      }
      console.log(newCityList)
      for (var k = 0; k < cities.length; k++) {
        if (cities[k].isHot === 1) {
          hotListArr.push(cities[k])
        }
      }
      // console.log(hotListArr)
      return {
        newCityList,
        hotListArr
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page-city{
    display: flex;
    flex-direction: column;
    height: 100%;
    .header{
        position: relative;
        height: 44px;
        width: 100%;
        overflow: hidden;
        margin: 0;
        padding: 0;
        z-index: 300;
        background-color: #fff;
        & > div{
            float: left;
            height: 44px;
        }
        &_left{
            width: 14%;
            display: flex;
            -webkit-box-pack: start;
            justify-content: flex-start;
            -webkit-box-align: center;
            align-items: center;
            i{
                display: block;
                font-size: 19px;
                margin-left: 10px;
                color: #191a1b;
            }
        }
        .header_title{
            width: 72%;
            text-align: center;
            font-size: 17px;
            display: flex;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;
            color: #191a1b;
        }
    }
    .city-index-title{
        font-size: 13px;
        color: #797d82;
        margin-bottom: 10px;
    }
    .city-index-detail{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .city-item-detail{
            width: 33.33%;
            text-align: center;
            padding-bottom: 15px;
            box-sizing: border-box;
            float: left;
            .city-item-text{
                height: 30px;
                line-height: 30px;
                background-color: #f4f4f4;
                border-radius: 3px;
                box-sizing: border-box;
                margin: 0 7.5px;
                font-size: 14px;
                color: #191a1b;
            }
        }
    }
}
.hot-city{
    padding: 15px;
}
</style>
