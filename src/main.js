'use strict';

import Vue from 'vue';

import router   from './router';
import urls     from './config/urls';
import request  from './config/request';

import './style/global.less';

import './config/filter';
import './config/mixins';
import './views/components';

Vue.prototype.$urls = urls;
Vue.prototype.$get  = request.get;
Vue.prototype.$post = request.post;

new Vue({
  el: '#app',
  router,
  template: '<router-view />'
});
