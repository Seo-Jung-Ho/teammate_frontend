
export const LoginModule = {
    state: {
        currentMemberId: undefined,
        currentMember: undefined,
    },
    getters: {
        isAuthenticated: (state) => {
            return state.currentMemberId !== undefined;
        }
    },
    mutations: {
        LOGIN(state, id) {
            state.currentMemberId = id;
        },
        LOGOUT(state) {
            state.currentMemberId = undefined;
            state.currentMemberId = undefined;
        },
    },
    actions: {
        login({ commit }, id) {
            commit('LOGIN', id);
        },
        logout({ commit }) {
            commit('LOGOUT');
        }
    }
}