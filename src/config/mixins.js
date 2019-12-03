'use strict';
import Vue from 'vue';

Vue.mixin({
  methods: {
    test: function () {
      console.log(arguments);
    }
  }
});
