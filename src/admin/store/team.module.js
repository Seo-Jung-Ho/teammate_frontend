import axios from 'axios';
import { API_TEAM } from '../util/api';

export const teamModule = {
    state: {
        teamList: []
    },
    mutations: {
        GET_TEAM_LIST(state, teamList) {
            state.teamList = teamList;
        }
    },
    actions: {
        getTeamList({ commit }) {
            return axios.get(API_TEAM, {})
                .then((result) => {
                    commit('GET_TEAM_LIST', result.data);
                });
        }
    }
}