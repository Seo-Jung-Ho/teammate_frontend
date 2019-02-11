import axios from 'axios';
import { API_MEMBER } from '../util/api';

export const memberModule = {
    state: {
        memberList: []
    },
    mutations: {
        GET_MEMBER_LIST(state, memberList) {
            state.memberList = memberList;
        }
    },
    actions: {
        getMemberList({ commit }, searchCondition) {
            let params = {};
            if (searchCondition.teamSeq) {
                params.teamSeq = searchCondition.teamSeq;
            }
            if (searchCondition.searchText) {
                params.searchText = searchCondition.searchText;
            }
            axios.get(API_MEMBER, {
                params: params,
            }).then((result) => {
                console.log(result);
                commit('GET_MEMBER_LIST', result.data);
            });
        }

    },

}