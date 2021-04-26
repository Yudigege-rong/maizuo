<template>
    <div class="navbar fixed">
        <ul>
            <router-link class="nav_left" tag="li" to="/city">
                <span>北京</span>
            </router-link>
            <li class="nav_center">影院</li>
            <li class="nav_right">搜索</li>
        </ul>
        <div id="cinema_content">
            <div class="cinema_nav">
                <ul>
                    <li>
                        <span>全城</span>
                    </li>
                    <li>
                        <span>APP订票</span>
                    </li>
                    <li>
                        <span>最近去过</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.navbar{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: white;
    line-height: 50px;
    z-index: 1000;
    ul{
        display: flex;
        justify-content: space-between;
        .nav_center{
            flex: 1;
            text-align: center;
        }
        .nav_left{
            margin-left: 15px;
            display: flex;
            span{
                display: inline-block;
                font-size: 13px;
                max-width: 58px;
                height: 50px;
                line-height: 50px;
                text-align: center;
                overflow: hidden;
                -o-text-overflow: ellipsis;
                text-overflow: ellipsis;
                white-space: nowrap;
                padding-right: 5px;
                color: #191a1b;
            }
        }
        .nav_right{
            margin-right: 15px;
            padding-left: 18px;
            font-size: 13px;
        }
    }
}
#cinema_content{
    width: 100%;
    height: 50px;
    position: fixed;
    top: 50px;
    .cinema_nav{
        width: 100%;
        height: 100%;
        z-index: 2;
        background-color: white;
        ul{
            display: flex;
            height: 100%;
            justify-content: space-between;
            align-items: center;
            li{
                flex: 1;
                text-align: center;
                span{
                    font-size: 14px;
                    color: #191a1b;
                }
            }
        }
    }
}
.fixed{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
}
</style>
