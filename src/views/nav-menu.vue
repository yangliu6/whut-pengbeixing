<template>
  <div class="nav-container">
    <div class="logo" @click="push({name: 'home'})"><span>朋辈行</span></div>
    <div class="user-info">
      <img class="avatar" src="" alt="">
      <div class="text-info">
        <div class="nickname">MrHou</div>
        <div class="identity-and-college">在读|管理学院</div>
      </div>
    </div>
    <div class="menu">
      <div>——菜单——</div>
      <nav>
        <router-link class="link" :to="{name: 'home'}">首页</router-link>
        <router-link class="link" :to="{name: 'explore'}">发现</router-link>
        <router-link class="link" :to="{name: 'recruit'}">招聘</router-link>
        <router-link class="link" :to="{name: 'alumni-information'}">校友信息</router-link>
      </nav>
    </div>
    <div class="person-center">
      <div>——个人——</div>
      <nav>
        <router-link class="link" :to="{name: 'activities'}">动态</router-link>
        <router-link class="link" :to="{name: 'notifications'}">消息</router-link>
        <router-link class="link" :to="{name: 'follow'}">关注</router-link>
        <router-link class="link" :to="{name: 'contact-us'}">联系我们</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
  import icon from '@/components/icon.vue'
  export default {
    components: {
      icon
    }
  }

</script>

<style lang="scss" scoped>
  @import '@/styles/vars.scss';
  .nav-container {
    width: 200px;
    height: 100%;
    min-height: 700px;
    background-color: $color-darkBlue;
    color: $color-grey;
    display: flex;
    flex-direction: column;
    .logo{
      flex: 0 0 50px;
      background-color: $color-theme;
      color: $color-white;
      font-size: 1.5em;
      line-height: 1em;
      display: flex;
      justify-content: center;
      align-items: center;
      & span{
        cursor: pointer;
      }
    }
    .user-info{
      flex: 0 0 150px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .avatar{
        height: 3em;
        width: 3em;
        border-radius: 50%;
        background-color: #fff;
      }
      .text-info{
        margin-top: 15px;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
    .menu, .person-center{
      flex: 0 0 230px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & nav{
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .link{
          color: $color-grey;
          font-size: 1em;
          padding-top: 15px;
          text-decoration: none;
        }
      }
    }
  }

</style>
