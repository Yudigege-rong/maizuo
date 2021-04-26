<template>
    <div>
      <div class="mz-center">
        <div class="main">
          <div class="avatar">
            <div class="login">立即登录</div>
          </div>
          <ul class="order">
            <li>
              <div>电影订单</div>
            </li>
            <li>
              <div>商品订单</div>
            </li>
          </ul>
          <div class="card">
            <span>卖座券</span>
          </div>
          <div class="card">
            <span>组合红包</span>
          </div>
          <div class="card">
            <span>余额</span>
          </div>
          <div class="card">
            <span>设置</span>
          </div>
        </div>
      </div>
      <Tabbar></Tabbar>
    </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
export default {
  name: 'Center',
  components: {
    Tabbar
  }
}
</script>

<style lang="scss" scoped>
div{
  .mz-center{
    height: 100%;
  }
  .main{
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    font-size: 15px;
    background-color: #f4f4f4;
    margin-bottom: 59px;
    .avatar{
      text-align: center;
      margin-top: -44px;
      height: 200px;
      padding-left: 22px;
      padding-top: 64px;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      color: #999;
      box-sizing: border-box;
      .login{
        font-size: 16px;
      }
    }
    .order{
      width: 100%;
      margin: 0 auto;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      text-align: center;
      font-size: 13px;
      padding: 0;
      height: 79px;
      background-color: #fff;
      margin-bottom: 10px;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      li{
        position: relative;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        list-style: none;
        & > div{
          color: #797d82;
          margin-top: 5px;
        }
      }
    }
    .card{
      background-color: #fff;
      padding: 0 15px;
      height: 49px;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      position: relative;
      span{
        margin-left: 15px;
        color: #191a1b;
        -webkit-box-flex: 1;
        flex: 1;
      }
    }
  }
}
</style>
