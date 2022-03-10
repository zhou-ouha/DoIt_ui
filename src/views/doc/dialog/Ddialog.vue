<template>
  <div class="buttonBox">
    <h2>dialog弹窗</h2>
    <hr>
    <h3>默认弹窗</h3>
    <p>默认样式的按钮,可以通过设置buttonType考虑按钮的使用场景</p>
    <Demo :component="dialog1"/>
    <h3>不带按钮的弹窗</h3>
    <p>将showBtn设为false可以不展示底部按钮</p>
    <Demo :component="dialog2"/>
    <div class="button-attribute">
      <h2>Button 参数</h2>
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
            <td>visible</td>
            <td>弹出框的展示与隐藏</td>
            <td>Boolean</td>
            <td>false/true</td>
            <td>false</td>
          </tr>
          <tr>
            <td>close</td>
            <td>弹窗框的关闭函数</td>
            <td>Function</td>
            <td>*</td>
            <td>*</td>
          </tr>
          <tr>
            <td>isCloseByMask</td>
            <td>是否可以通过点击遮罩层关闭弹窗</td>
            <td>Boolean</td>
            <td>true/false</td>
            <td>true</td>
          </tr>
          <tr>
            <td>showBtn</td>
            <td>是否展示底部按钮</td>
            <td>Boolean</td>
            <td>true/false</td>
            <td>true</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Demo from "../../../components/Demo.vue"
import dialog1 from "../dialog/dialog1.preview.vue"
import dialog2 from "../dialog/dialog2.preview.vue"
  export default{
    components:{Demo},
    setup(){
      return {
        dialog1,dialog2
      }
    }
  }
</script>

<style scoped lang="scss">
.buttonBox{
  padding: 5vh 2vw;
  h2{
    margin-bottom: 2vh;
  }
  h3{
    margin: 2vh 0;
  }
  p{
    color: #ff830f;
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