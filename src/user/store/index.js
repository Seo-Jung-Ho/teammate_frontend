import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

import { LoginModule } from './login';

import { API_MEMBER_ID, API_MEMBER } from '../util/api';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        teamMate: [],
    },
    getters: {
        getMemberByName: (state) => (name) => {
            return state.memberList.find(item => item.name === name);
        },
    },
    mutations: {
        SET_CURRENT_MEMBER(state, member) {
            state.LoginModule.currentMember = member;
        },
        SET_TEAM_MATE(state, teamMate) {
            state.teamMate = teamMate;
        }
    },
    actions: {
        getMemberById({ commit }) {
            axios.get(API_MEMBER_ID(this.state.LoginModule.currentMemberId))
                .then((result) => {
                    console.log(result.data);
                    commit('SET_CURRENT_MEMBER', result.data);
                })
        },
        getTeamMateById({ commit }) {
            axios.get(API_MEMBER, {
                params: {
                    id: this.state.LoginModule.currentMemberId
                }
            }).then((result) => {
                console.log(result.data);
                commit('SET_TEAM_MATE', result.data);
            });
        }
    },
    modules: {
        LoginModule
    }
})