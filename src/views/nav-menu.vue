<template>
  <div class="nav-container">
    <div class="top">
      <div class="logo" @click="push({name: 'home'})">
        <span>朋辈行</span>
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
          <router-link class="link" :to="{name: 'activities', params: {id: ''}}">
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
          <router-link class="link" :to="{name: 'setting'}">
            <icon class="icon" name="shezhi"></icon>
            <span class="nav-item">个人设置</span>
          </router-link>
        </nav>
      </div>
    </div>

    <div class="additional-info">
      <nav>
        <router-link class="link" :to="{name: 'contact'}">
          <span class="nav-item">联系我们</span>
        </router-link>
        <router-link class="link" :to="{name: 'join'}">
          <span class="nav-item">加入我们</span>
        </router-link>
        <router-link class="link" :to="{name: 'terms'}">
          <span class="nav-item">隐私协议</span>
        </router-link>
      </nav>
      <div class="copyright">版权所有：武汉理工大学</div>
      <div class="copyright">Copyright © 2018</div>
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
    justify-content: space-between;
    &>.top{
      display: flex;
      flex-direction: column;
      &>.logo {
        flex: 0 0 60px;
        background-color: var(--color-theme);
        color: var(--color-white);
        font-size: 1.6em;
        line-height: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
        &>span {
          cursor: pointer;
        }
      }
      &> :matches(.menu, .person-center) {
        flex: 0 0 220px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &>nav {
          margin-top: 5px;
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
      &>.menu {
        margin-top: 20px;
      }
    }
    &>.additional-info {
      padding-bottom: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      &>nav {
        display: flex;
        justify-content: center;
        flex-flow: nowrap;
        &>.link {
          position: relative;
          color: var(--color-darkGrey);
          font-size: 0.8em;
          padding: 0 4px;
          text-decoration: none;
          &:not(:last-child)::after {
            content: "";
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: 1px;
            height: 1em;
            margin: auto 0;
            background-color: var(--color-darkGrey);
          }
          &:hover{
            color: var(--color-white);
          }
        }
      }
      &>.copyright {
        font-size: 0.8em;
        margin-top: 2px;
      }
    }
  }

</style>
