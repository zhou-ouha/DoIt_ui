<template>
  <div class="inputBox">
    <h2>input输入框</h2>
    <hr>
    <h3>单行输入框</h3>
    <p>基本输入框，可以使用禁用模式</p>
    <Demo :component="inputDemo1"/>
    <h3>可清空内容的输入框</h3>
    <p>可清空内容</p>
    <Demo :component="inputDemo2"/>
    <h3>多行文本输入框</h3>
    <p>可以输入多行文本的输入框</p>
    <Demo :component="inputDemo3"/>
    <h3>可控大小的输入框</h3>
    <p>通过设置size可以改变输入框的大小</p>
    <Demo :component="inputDemo4"/>
    <h3>含输入状态的输入框</h3>
    <p>可以通过status设置输入框输入内容的状态</p>
    <Demo :component="inputDemo5"/>
    <div class="input-attribute">
      <h2>Input 参数</h2>
      <table class="attribute-table" border="0" align="center">
        <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>clear</td>
            <td>控制是否可以清除内容</td>
            <td>String</td>
            <td>noclear/clear</td>
            <td>noclear</td>
          </tr>
          <tr>
            <td>size</td>
            <td>控制输入框大小</td>
            <td>String</td>
            <td>normal/small/large</td>
            <td>normal</td>
          </tr>
          <tr>
            <td>status</td>
            <td>显示输入框输入内容的状态</td>
            <td>String</td>
            <td>nomal/success/warning/error</td>
            <td>normal</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>控制输入框是否禁用</td>
            <td>Boolean</td>
            <td>true/false</td>
            <td>flase</td>
          </tr>
          <tr>
            <td>sizeCols</td>
            <td>多行文本的宽</td>
            <td>String</td>
            <td>40/50/60等数字</td>
            <td>40</td>
          </tr>
          <tr>
            <td>sizeCols</td>
            <td>多行文本的高</td>
            <td>String</td>
            <td>7/8/9等数字</td>
            <td>4</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import inputDemo1 from "./input1.preview.vue"
import inputDemo2 from "./input2.preview.vue"
import inputDemo3 from "./input3.preview.vue"
import inputDemo4 from "./input4.preview.vue"
import inputDemo5 from "./input5.preview.vue"
import Demo from "../../../components/Demo.vue"
  export default{
    components:{Demo},
    setup(){
      return {
        inputDemo1,inputDemo2,inputDemo3,inputDemo4,inputDemo5
      }
    }
  }
</script>

<style scoped lang="scss">
.inputBox{
  padding: 5vh 2vw;
  h2{
    margin-bottom: 2vh;
  }
  h3{
    margin: 2vh 0;
  }
  p{
    color:#ff830f;
  }
  .attribute-table{
    background-color: black;
    width: 100%;
    th{
      background-color: rgb(255, 163, 78);
      padding: 12px;
    }
    td{
      background-color: #fff;
      padding: 10px;
      text-align: center;
    }
  }
  .input-attribute{
    margin-bottom: 8vh;
  }
}
</style>