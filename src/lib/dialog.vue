<template>
  <div v-if="visible">
    <teleport to='body'>
      <div class="doit-dialog-mask" @click="isCloseByMask == true ? close() : ''"></div>
      <div class="doit-dialog-wrapper">
        <div class="doit-dialog">
          <header>
            <slot name="title"/>
            <span @click="close" class="doit-dialog-close"></span>
          </header>
          <main>
            <slot name="content"/>
          </main>
          <footer>
            <Doitbutton status="info" @click="close" v-if="showBtn">取消</Doitbutton>
            <Doitbutton status="primary" @click="close" v-if="showBtn">确定</Doitbutton>
          </footer>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import Doitbutton from "../lib/button.vue"
export default {
  components:{Doitbutton},
  props:{
    visible:{
      type:Boolean,
      default:false
    },
    close:{
      type:Function
    },
    isCloseByMask:{
      type:Boolean,
      default:true
    },
    showBtn:{
      type:Boolean,
      default:true
    }
  },
  setup(props,context){
    return {
    }
  }

}
</script>

<style scoped lang="scss">
.doit-dialog{
  min-width: 25em;
  max-width: 90%;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  &-mask{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  &-wrapper{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  header{
    padding: 12px 16px;
    border-bottom: 1px solid rgb(184, 184, 184);
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  main{
    padding: 12px 16px;
  }
  footer{
    padding: 12px 16px;
    text-align: right;
  }
  &-close{
    position: relative;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,&::after{
      content: '';
      height: 1px;
      background-color: black;
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>