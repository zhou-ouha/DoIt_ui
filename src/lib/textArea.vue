<template>
  <div class="doit-textA">
    <textarea class="doit-textA-inner" name="" id="" :cols="sizeCols" :rows="sizeRows" :placeholder="placeholder" :disabled="disabled"></textarea>
  </div>
</template>

<script>
export default {
  props:{
    placeholder:{
      type:String
    },
    disabled:{
      type:Boolean
    },
    sizeCols:{
      type:String,
      default:"40"
    },
    sizeRows:{
      type:String,
      default:"4"
    }
  }
}
</script>

<style scoped lang="scss">
.doit-textA{
  padding: 14px 2px;
  &-inner{
    padding: 8px 12px;
    border: 1px solid #c5d9e8;
    border-radius: 4px;
    &:focus{
      border-color: #ff830f;
    }
    &:disabled{
      cursor: not-allowed;
    }
  }
}
</style>