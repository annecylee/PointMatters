<template>
  <div class="container-fluid">
    <nav class="navbar navbar-default row" id="header">
      <div class="navbar-header">
        <a class="navbar-brand" href="index.html"><h1><span>Point</span>Matters</h1><small>{{ description[lanCode] }}</small></a>
      </div>
      <span class="glyphicon glyphicon-menu-hamburger menu" aria-hidden="true"></span>
      <ul class="nav navbar-nav navbar-right" id="navigation">
        <li class="active"><a href="index.html">{{ home[lanCode] }}</a></li>
        <li><a href="index.html">{{ about[lanCode] }}</a></li>
        <li><a href="index.html">{{ contact[lanCode] }}</a></li>
      </ul>
    </nav>
    <my-language />
  </div>
</template>

<script>
import Language from './Language.vue'
import { EventBus } from './event-bus.js'

export default {
  components: {
    'my-language': Language,
  },

  data: function () {
    return {
      description: ['A smart way to spend your points', ' 消费每一点，价值多一点'],
      home: ['Home', '主页'],
      about: ['About', '关于我们'],
      contact: ['Contact Us', '联系我们'],
      lanCode: 0,
    }
  },

  created: function () {
    EventBus.$on('setLan', (lanCode) => {
      this.lanCode = lanCode
    })
  },
}

</script>

<style>

.navbar-default {
  background-color: #fff;
  border: none;
  border-bottom: 1px solid #ccc;
  border-radius: 0;
  margin: 0 2px;
  height: 60px;
  color: #fff;
  padding: 10px;
  padding-top: 0;
}

.navbar-brand {
  line-height: 12px;
  padding-left: 0;
}

h1 {
  margin: 0;
  font-family: 'Cabin Sketch', cursive;
  font-size: 20px;
  text-align: left;
  color: #333;
}

h1 span {
  color: #6699cc;
  font-size: 25px;
  font-weight: 600;
}

.navbar-brand small {
  color: #737373;
  font-size: 14px;
  display: none;
}

.menu {
  float: right;
  color: #0099ff;
  font-size: 20px;
  top: -30px;
}

#navigation {
  display: none;
  margin-top: 15px;
  font-size: 14px;
}

#navigation .active > a {
  background: none;
  color: #0099ff;
  font-weight: bolder;
}

@media(min-width:768px) {

  .navbar-default {
    height: 80px;
    padding: 50px;
    padding-top: 0;
  }

  .navbar-brand small {
    display: inline;
  }

  .menu {
    display: none;
  }

  #navigation {
    display: inline;
  }


}
</style>
