import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import menuMobile from "./store/menuMobile";
import modal from "./store/modal";

const store = () =>
    new Vuex.Store({
        modules: {
            menuMobile,
            modal
        }
    });

export default store;
