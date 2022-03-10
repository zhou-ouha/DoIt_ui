<template>
  <div class="docBox">
    <topNav />
    <div class="doc">
      <aside>
        <h2>快速开始</h2>
          <ul>
            <li><router-link to="/Docs/introduce">介绍</router-link></li>
            <li><router-link to="/Docs/start">快速开始</router-link></li>
          </ul>
        <h2>组件</h2>
        <ul>
          <li><router-link to="/Docs/Dinput">input输入框</router-link></li>
          <li><router-link to="/Docs/Dbutton">button按钮</router-link></li>
          <li><router-link to="/Docs/Ddialog">dialog弹窗</router-link></li>
        </ul>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
  
</template>

<script lang="ts">
import topNav from "../components/topNav.vue"
export default {
  components:{
    topNav
  }
}
</script>

<style lang="scss" scoped>
.doc{
  height: 94vh;
  display: flex;
  flex-direction: row;
  box-shadow: inset 0 20px 20px rgb(241, 241, 241);
  >aside{
    width: 12vw;
    height: 92vh;
    padding-top: 2vh;
    border-right: 1px solid rgb(211, 211, 211);
    >h2{
      margin: 2vh 1vw;
    }
    >ul li{
        box-sizing: border-box;
        width: 100%;
        height: 6vh;
        font-weight: bold;
        line-height: 6vh;
        padding-left: 2vw;
        &:hover{
          cursor: pointer;
          
        }
        >a{
          color: #000;
        }
        .router-link-active{
          // background-color: #ff830f;
          border-bottom: 3px solid tomato;
        }
      }
  }
  >main{
    width: 100%;
    height: 94vh;
    overflow: auto;
    // overflow-y: hidden;
    &::-webkit-scrollbar{
      display: none;
    }
  }
}
</style>