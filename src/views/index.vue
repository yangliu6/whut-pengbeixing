<template>
  <div class="index">
    <aside>
      <nav-menu></nav-menu>
    </aside>

    <section>
      <header class="header">
        <div class="search">
          <el-input placeholder="输入关键词进行搜索" suffix-icon="el-icon-search"></el-input>
        </div>
        <div class="write-article">
          <el-button type="primary" icon="el-icon-edit-outline">提问</el-button>
        </div>
      </header>
      <main>
        <transition name="zoom" mode="out-in">
          <keep-alive :exclude="[]">
            <router-view :key="$route.path.replace(/\//g, '_')" />
          </keep-alive>
        </transition>
      </main>
    </section>
  </div>
</template>

<script>
  import navMenu from '@/views/nav-menu.vue'
  export default {
    components: {
      navMenu
    }
  }

</script>

<style lang="postcss">
  @import '../styles/vars.css';
  .index {
    display: flex;
    height: 100vh;
    &>aside {
      flex-shrink: 0;
    }
    &>section {
      flex-grow: 1;
      min-width: 800px;
      display: flex;
      flex-direction: column;
      &>header {
        flex: 0 1 60px;
        background-color: var(--color-lightBlue);
        display: flex;
        justify-content: center;
        align-items: center;
        &>.search {
          width: 500px;
          margin-right: 20px;
        }
      }
    }
  }

</style>
