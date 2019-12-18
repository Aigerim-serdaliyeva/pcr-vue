const TOGGLE_MODAL = "TOGGLE_MODAL";

export default {
    namespaced: true,
    state: {
        modal_state: false
    },
    mutations: {
        [TOGGLE_MODAL](state) {
            state.modal_state = !state.modal_state;
        }
    }
};
