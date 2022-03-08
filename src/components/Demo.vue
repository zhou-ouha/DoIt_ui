<template>
  <div class="demo">
    <div class="demo-component">
      <component :is="component"/>
    </div> 
    <div class="demo-actions">
      <div @click="toggleCode" v-if="codeVisible">隐藏代码</div>
      <div @click="toggleCode" v-else>查看代码</div>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-html" v-html="html"/>
    </div>
  </div>
</template>

<script lang="ts">
// @ts-nocheck
import 'prismjs';
import 'prismjs/themes/prism-coy.css';
import {computed, ref} from 'vue';
const Prism = (window as any).Prism;
export default {
  props:{
    component: Object
  },
  setup(props){
    const html = computed(()=>{
      console.log(props.component)
      return Prism.highlight(props.component.__sourceCode,
          Prism.languages.html,'html')
    })
    const codeVisible = ref(false)
    const toggleCode = ()=>{
      codeVisible.value = !codeVisible.value
    }
    return {Prism, html, codeVisible,toggleCode}
  }
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
$font-color:#2c405a;
.demo {
  border: 1px solid #ff830f;
  margin: 16px 0 32px;
  > h2 {
    font-size: 18px;
    color: $font-color;
    font-weight: bold;
    padding: 8px 16px;
    border-bottom: 1px solid #ff830f;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    font-size: 14px;
    font-weight: bold;
    border-top: 1px dashed #ff830f;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: #fafbfc;
    color: #ff830f;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed #ff830f;

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
      &.language-html:after{
        display: none;
      }
      &.language-html::before{
        display: none;
      }
    } 
  }
}
</style>