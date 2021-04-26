<template>
    <div>
        <ul>
            <router-link to="/movie" tag="li" active-class="active">
            <i class="iconfont icon-shouye"></i>
            <span>电影</span>
            </router-link>
            <router-link to="/cinema" tag="li" active-class="active">
            <i class="iconfont icon-ziliao"></i>
            <span>影院</span>
            </router-link>
            <router-link to="/center" tag="li" active-class="active">
            <i class="iconfont icon-tongzhi"></i>
            <span>我的</span>
            </router-link>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
div{
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 50px;
    background-color: white;
    border-top: 1px solid #eee;
    ul{
        display: flex;
        li{
            flex: 1;
            line-height: 50px;
            text-align: center;
            position: relative;
            i{
                font-size: 20px;
                color: #797d82;
            }
            span{
                margin-left: 4px;
                font-size: 14px;
                color: #797d82;
            }
        }
    }
}
.active{
    i{
        color: #ff5f16;
    }
    span{
        color: #ff5f16;
    }
}
</style>
