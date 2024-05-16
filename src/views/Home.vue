<template>
  <div class="main">
    <topNav />
    <div class="home">
      <img class="img2" src="../assets/doit_01.png" alt="" />
      <p>一款基于vue3.0 和 TypeScript的ui组件库</p>
      <div class="btn">
        <button><router-link to="/Docs">开始使用</router-link></button>
        <button>
          <a href="https://github.com/zhou-ouha/DoIt_ui">Github</a>
        </button>
      </div>
    </div>
    <div class="banner">
      <ul>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-Vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>采用了Composition API</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-typescript-def"></use>
          </svg>
          <h3>基于 TypeScript</h3>
          <p>源代码采用 TypeScript 书写（非严格检查）</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-zhifeiji"></use>
          </svg>
          <h3>轻量化</h3>
          <p>没有其他内部依赖</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-kaiyuan"></use>
          </svg>
          <h3>免费使用</h3>
          <p>
            在
            <a href="https://github.com/zhou-ouha/DoIt_ui">Github</a>
            上开源
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import topNav from "../components/topNav.vue";
export default {
  components: {
    topNav,
  },
};
</script>

<style scoped lang="scss">
.main {
  background-image: linear-gradient(to bottom, #ffa25c, #ff7f1e);
  height: 60vh;
  text-align: center;
  > .home {
    > img {
      margin-top: 60px;
    }
    > p {
      font-size: 26px;
      font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
      color: #fff;
    }
    > .btn {
      margin: 20px;
      > button {
        width: 140px;
        height: 40px;
        background-color: #ff562c;
        color: #fff;
        border-radius: 20px;
        margin: 20px;
        font-size: 18px;
        font-weight: bold;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
  > .banner {
    margin-top: 12vh;
    > ul {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      > li {
        color: #000;
        > svg {
          width: 100px;
          height: 100px;
        }
        > p a {
          color: #000;
        }
      }
    }
  }
}
</style>
