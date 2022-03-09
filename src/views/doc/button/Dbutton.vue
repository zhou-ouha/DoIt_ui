<template>
  <div class="buttonBox">
    <h2>button按钮</h2>
    <hr>
    <h3>默认按钮</h3>
    <p>默认样式的按钮,可以通过设置buttonType考虑按钮的使用场景</p>
    <Demo :component="button1"/>
    <h3>基础按钮</h3>
    <p>可以通过设置status改变按钮的颜色</p>
    <Demo :component="button2"/>
    <h3>禁用按钮</h3>
    <p>可以通过设置disabled改变按钮的颜色</p>
    <div class="disabled">
       <Demo :component="button3"/>
    </div>
    <h3>基础按钮</h3>
    <p>可以通过设置status改变按钮的颜色</p>
    <Demo :component="button4"/>
    <h3>加载按钮</h3>
    <p>loading属性可以让按钮处于加载中状态</p>
    <Demo :component="button5"/>
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
            <td>buttonType</td>
            <td>控制按钮的type属性</td>
            <td>String</td>
            <td>button/reset/submit</td>
            <td>button</td>
          </tr>
          <tr>
            <td>status</td>
            <td>按钮的种类（主要按钮、危险按钮、警告按钮等）</td>
            <td>String</td>
            <td>primary/error/wraning/success</td>
            <td>primary</td>
          </tr>
          <tr>
            <td>iscircle</td>
            <td>控制按钮是方形按钮还是圆角按钮</td>
            <td>Boolean</td>
            <td>true/false</td>
            <td>false</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>控制按钮是否可用</td>
            <td>Boolean</td>
            <td>true/false</td>
            <td>flase</td>
          </tr>
          <tr>
            <td>size</td>
            <td>控制按钮大小</td>
            <td>String</td>
            <td>small/normal/large</td>
            <td>normal</td>
          </tr>
          <tr>
            <td>loading</td>
            <td>按钮是否正在加载中</td>
            <td>Boolean</td>
            <td>true/false</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Demo from "../../../components/Demo.vue"
import button1 from "../button/button1.preview.vue"
import button2 from "../button/button2.preview.vue"
import button3 from "../button/button3.preview.vue"
import button4 from "../button/button4.preview.vue"
import button5 from "../button/button5.preview.vue"
  export default{
    components:{Demo},
    setup(){
      return {
        button1,button2,button3,button4,button5
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