<template>
    <div class="page-city">
        <div class="header">
            <div class="header_left"><i>X</i></div>
            <div class="header_title">当前城市 - 北京</div>
        </div>
        <div class="hot-city">
            <div class="city-index-title">热门城市</div>
            <ul class="city-index-detail">
                <li class="city-item-detail">
                    <div class="city-item-text">上海</div>
                </li>
            </ul>
        </div>
    </div>
</template>

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
