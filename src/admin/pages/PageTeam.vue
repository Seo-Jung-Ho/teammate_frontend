<template>
    <div>
        <h3>팀 리스트</h3>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>번호</th>
                    <th>팀명</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, key) in teamList" v-bind:key="key">
                    <td>{{key + 1}}</td>
                    <td>
                        <input
                            type="text"
                            class="form-control"
                            v-model="item.name"
                            v-on:keyup.enter="updateTeam(item)"
                        >
                    </td>
                </tr>
            </tbody>
        </table>
        <div>
            <input v-model="newTeamName" type="text" class="form-control">
            <br>
            <button v-on:click="addTeam()" class="btn btn-primary">추가</button>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { API_TEAM_SEQ, API_TEAM } from "../util/api";
export default {
    name: "PageTeam",
    computed: {
        teamList() {
            return this.$store.state.teamModule.teamList;
        }
    },
    data() {
        return {
            newTeamName: ""
        };
    },
    methods: {
        addTeam() {
            axios
                .post(API_TEAM, "", {
                    params: {
                        name: this.newTeamName
                    }
                })
                .then(() => {
                    this.$store.dispatch("getTeamList");
                    this.newTeamName = "";
                });
        },
        updateTeam(team) {
            axios
                .patch(API_TEAM_SEQ(team.seq), "", {
                    params: {
                        name: team.name
                    }
                })
                .then(result => {
                    console.log(result);
                });
        }
    }
};
</script>

<style scoped>
</style>