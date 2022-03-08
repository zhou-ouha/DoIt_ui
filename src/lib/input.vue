<template>
  <div class="doit-input">
    <input 
      class="doit-input-inner"
      :class="inputClass" 
      :type="type" 
      :placeholder="placeholder" 
      :disabled="disabled"
    >
  </div>
  
</template>

<script lang="ts">
import {computed} from "vue"
export default {
  props:{
    clear:{
      type:String,
      default:"text"
    },
    size:{
      type:String,
      default:"normal"
    },
    disabled:{
      type:Boolean
    },
    placeholder:{
      type:String
    },
    status:{
      type:String,
      default:"normal"
    }
  },
  setup(props,context){
    const {size,status,clear} = props;
    const inputClass = computed(()=>{
      return {
        [`doit-input-${size}`]:size,
        [`doit-input-${status}`]:status
      }
    })
    const type = computed(()=>{
      return clear === "clear" ? "search" : "text"
    })
    return {
      inputClass,type
    }
  }
}
</script>

<style scoped lang="scss">
.doit-input{
  margin: 14px 2px;
  &-inner{
    padding: 8px 10px;
    border: 1px solid #c5d9e8;
    border-radius: 4px;
    &:focus{
      border-color: #ff830f;
    }
    &:disabled{
      cursor: not-allowed;
    }
  }
  &-large{
    height: 30px;
  }
  &-small{
    height: 11px;
    line-height: 11px;
    font-size: 8px;
  }
  &-success{
    border-color: #48ff00;
    &:focus{
      border-color: #48ff00;
    }
  }
  &-warning{
    border-color: #ff9736;
  }
  &-error{
    border-color: #ff0000;
    &:focus{
      border-color: #ff0000;
    }
  }
}
</style>