const MENU_TOGGLE = "MENU_TOGGLE";

export default {
    namespaced: true,
    state: {
        menu_state: false
    },
    mutations: {
        [MENU_TOGGLE](state) {
            state.menu_state = !state.menu_state;
        }
    }
};
