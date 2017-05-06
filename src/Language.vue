<template>
  <div id="language" v-on:click="setLan">{{ lan[lanCode] }}</div>
</template>

<script>
import { EventBus } from './event-bus.js'
export default {
  data: function () {
    return {
      lan: ['中文', 'En'],
      lanCode: 0,
      isEn: true,
    }
  },

  methods: {
    setLan: function () {
      this.isEn = !this.isEn
      if (this.isEn) {
        this.lanCode = 0
      } else {
        this.lanCode = 1
      }
      // return this.lanCode
      EventBus.$emit('setLan', this.lanCode);
    }
  },

}
</script>

<style>

#language {
  float: right;
  width: 40px;
  height: 26px;
  padding-top: 5px;
  position: relative;
  background: #0099ff;
  color: white;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-align: center;
  text-transform: uppercase;
}
#language:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 0;
  border-bottom: 4px solid;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
}

</style>
