
import Vue from 'vue';
import Vuex from 'vuex';

import { memberModule } from './member.module';
import { teamModule } from './team.module';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        memberModule: memberModule,
        teamModule: teamModule
    }
});