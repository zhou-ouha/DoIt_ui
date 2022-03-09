<template>
  <span class="doit-button">
    <button 
      class="doit-button-inner"
      :class="buttonClass"
      :type="buttonType"
      :disabled="disabled || loading"
    >
      <span v-show="loading" class="loadingIcon"></span>
      <slot></slot>
    </button>
  </span>
  
</template>

<script lang="ts">
import {ref,computed} from "vue"
export default {
  props:{
    buttonType:{
      type:String,
      default:"button"
    },
    status:{
      type:String,
      default:"primary"
    },
    iscircle:{
      type:Boolean,
      default:false
    },
    disabled:{
      type:Boolean,
      default:false
    },
    size:{
      type:String,
      default:"normal"
    },
    loading:{
      type:Boolean,
      default:false
    }
  },
  setup(props) {
    
    const {status,iscircle,size} = props;
    const buttonClass = computed(()=>{
      if(props.iscircle){
        return {
          [`doit-button-${props.status}`]:status,
          ['doit-button-circle']:iscircle,
          [`doit-button-${props.size}`]:size
        }
      }
      return {
        [`doit-button-${props.status}`]:status,
        [`doit-button-${props.size}`]:size
      }
    })
    return {
      buttonClass
    }
  }
}
</script>

<style scoped lang="scss">
  .doit-button{
    margin: 10px 10px;
    &-inner{
      margin: 10px 0;
      padding: 7px 10px;
      border-radius: 5px;
      color:#fff;
      &:hover{
        cursor:pointer
      }
      &:disabled{
        cursor: not-allowed;
      }
      .loadingIcon{
        display: inline-block;
        width: 10px;
        height: 10px;
        margin-right: 4px;
        border: 1px solid;
        border-color: #fff #fff #fff transparent;
        border-radius: 10px;
        animation: loadingMove .9s infinite linear;
      }
    }
    &-primary{
      background-color: rgb(15, 167, 255);
      border-color: rgb(15, 167, 255);
    }
    &-success{
      background-color: #67C23A;
      border-color: #67C23A;
    }
    &-warning{
      background-color: #ff9736;
      border-color: #ff9736;
    }
    &-error{
      background-color: #ff0000;
      border-color: #ff0000;
    }
    &-info{
      background-color: #808080;
      border-color: #808080;
    }
    &-circle{
      border-radius: 26px;
      padding: 6px 10px;
    }
    &-small{
      padding: 5px;
      font-size: 12px;
    }
    &-large{
      padding: 12px 16px;
      font-size: 16px;
    }
  }
  @keyframes loadingMove{
    0%{
      transform: rotate(0);
    }
    90%{
      transform: rotate(300deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
</style>