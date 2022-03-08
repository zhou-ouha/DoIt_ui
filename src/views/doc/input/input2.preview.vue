<preview>可清空内容</preview>
<template>
  <Input v-model="inputVal" :placeholder="placeholderText" :clear="type"/>
</template>
<script lang="ts">
import {ref} from "vue"
import Input from "../../../lib/input.vue"
export default {
  components:{Input},
  setup(){
    let placeholderText = ref('可清空内容');
    let ver = ref(true);
    let type = ref("clear")
    let inputVal = ref("");
    return{
      placeholderText,ver,type,inputVal
    }
  }
}
</script>
