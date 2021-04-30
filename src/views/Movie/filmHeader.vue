<template>
    <div>
        <ul>
            <router-link to="/movie/nowPlaying" tag="li" active-class="active">正在热映</router-link>
            <router-link to="/movie/comingSoon" tag="li" active-class="active">即将上映</router-link>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
div{
    width: 100%;
    height: 50px;
    ul{
        display: flex;
        li{
            flex: 1;
            height: 50px;
            line-height: 50px;
            text-align: center;
            background-color: white;
            text-decoration: none;
        }
    }
}
.active{
    color: orange;
    border-bottom: 2px solid orange;
}

.fixed{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 40px;
    background-color: black;
    z-index: 999;
}
</style>
