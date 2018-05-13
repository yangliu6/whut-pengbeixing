<template>
  <div class="nav-container">
    <div class="logo" @click="push({name: 'home'})">
      <span>朋辈行</span>
    </div>
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
        <router-link class="link" :to="{name: 'home'}">
          <icon class="icon" name="ai-home"></icon>
          <span class="nav-item">首页</span>
        </router-link>
        <router-link class="link" :to="{name: 'explore'}">
          <icon class="icon" name="faxian"></icon>
          <span class="nav-item">发现</span>
        </router-link>
        <router-link class="link" :to="{name: 'recruit'}">
          <icon class="icon" name="zhaopin"></icon>
          <span class="nav-item">招聘</span>
        </router-link>
        <router-link class="link" :to="{name: 'alumni-information'}">
          <icon class="icon" name="xiaoyouxinxi"></icon>
          <span class="nav-item">校友信息</span>
        </router-link>
      </nav>
    </div>
    <div class="person-center">
      <div>——个人——</div>
      <nav>
        <router-link class="link" :to="{name: 'activities'}">
          <icon class="icon" name="dongtai"></icon>
          <span class="nav-item">动态</span>
          <span class="badge">(3)</span>
        </router-link>
        <router-link class="link" :to="{name: 'notifications'}">
          <icon class="icon" name="icon-xiaoxi"></icon>
          <span class="nav-item">消息</span>
          <span class="badge">(3)</span>
        </router-link>
        <router-link class="link" :to="{name: 'follow'}">
          <icon class="icon" name="guanzhu"></icon>
          <span class="nav-item">关注</span>
        </router-link>
        <router-link class="link" :to="{name: 'contact-us'}">
          <icon class="icon" name="lianxiwomen"></icon>
          <span class="nav-item">联系我们</span>
        </router-link>
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

<style lang="postcss">
  @import '../styles/vars.css';
  .nav-container {
    width: 200px;
    height: 100%;
    min-height: 700px;
    background-color: var(--color-darkBlue);
    color: var(--color-darkGrey);
    display: flex;
    flex-direction: column;
    &>.logo {
      flex: 0 0 60px;
      background-color: var(--color-theme);
      color: var(--color-white);
      font-size: 1.5em;
      line-height: 1em;
      display: flex;
      justify-content: center;
      align-items: center;
      &>span {
        cursor: pointer;
      }
    }
    &>.user-info {
      flex: 0 0 150px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &>.avatar {
        height: 3em;
        width: 3em;
        border-radius: 50%;
        background-color: #fff;
      }
      &>.text-info {
        margin-top: 15px;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
    &> :matches(.menu, .person-center) {
      flex: 0 0 230px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &>nav {
        margin-top: 15px;
        position: relative;
        left: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        &>.link {
          color: var(--color-darkGrey);
          font-size: 1em;
          padding-top: 20px;
          text-decoration: none;
          & .icon {
            width: 1.2em;
            height: 1.2em;
            margin-right: 10px;
            color: var(--color-darkGrey);
          }
          &>.badge {
            color: var(--color-theme);
          }
          &:matches(:hover, :focus, :active) {
            &>:matches(.icon, .nav-item) {
              color: var(--color-white);
            }
          }
        }
      }
    }
  }

</style>
