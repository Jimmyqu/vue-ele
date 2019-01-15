<template>
    <div class="switch-container">
      <input ref="btn" type="checkbox" id="radio" name="switch" hidden >
      <label for="radio" class="radio" @click="changeSwitch">
        <span class="circle"></span>
        <span class="text on">ON</span>
        <span class="text off">OFF</span>
      </label>
    </div>
</template>

<script>
import {SWITCH_BTN} from '../store/mutation-types'

    export default {
        name: "switch-btn",
        data(){
          return {

          }
        },
        mounted(){

        },
        methods:{
          changeSwitch(){
            !this.$refs.btn.checked
            this.$store.commit(SWITCH_BTN,this.$refs.btn.checked)
          }
        }
    }
</script>

<style scoped>
  .switch-container{
    position: absolute;
    top:10px;
    right: 5px;
  }
  .text {
    display: none;
  }
  .on{
    color:#333;
  }
  .off{
    color:#eee;
  }
  .circle {
    position: absolute;
    display: inline-block;
  }

  #radio ~label {
    background-color: grey;
  }

  #radio ~label .circle {
    left: 0;
    transition: all 0.3s;
    --webkit-transition: all 0.3s;
  }

  #radio ~label .on {
    display: none;
  }

  #radio ~ label .off {
    display: inline-block;
  }

  #radio:checked ~ label {
    background: lime;
  }

  #radio:checked ~label .circle {
    left: 50px;
  }
  #radio:checked ~label .on {
    display: inline-block;
  }

  #radio:checked ~ label .off {
    display: none;
  }

  label {
    display: inline-block;
    position: relative;
    height: 30px;
    width: 80px;
    border-top-left-radius: 15px 50%;
    border-bottom-left-radius: 15px 50%;
    border-top-right-radius: 15px 50%;
    border-bottom-right-radius: 15px 50%;
    box-shadow: 0 0 2px black;
  }

  label .circle {
    display: inline-block;
    height: 26px;
    width: 26px;
    border-radius: 50%;
    border: 2px solid #333;
    background-color: #eee;
  }

  label .text {
    width: 100%;
    text-align: center;
    line-height: 2;
    font-size: 14px;
    text-shadow: 0 0 2px #ddd;
  }

</style>
