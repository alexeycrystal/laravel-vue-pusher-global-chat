import Vue from 'vue';
import Vuex from 'vuex';

import chat from './modules/chat';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        chat
    },
    strict: process.env.NODE_ENV !== 'production'
});