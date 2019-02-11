<template>
    <div v-if="currentMember">
        <h3>메인 페이지</h3>
        <h4>현재 유저: {{currentMember.id}} / {{currentMember.name}}</h4>
        <h4>소속 팀: {{currentMember.team.name}}</h4>
        <!-- <button v-on:click="goToMemberEditView()" class="btn btn-default">개인정보 수정</button> -->
        <br>
        <br>
        <h4>팀원</h4>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>번호</th>
                    <th>이름</th>
                    <th>아이디</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, key) in teamMate" v-bind:key="key">
                    <td>{{key + 1}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.id}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
// import router from "../router";
// import { API_MAIN } from "../util/api/index";

export default {
    name: "PageMain",
    computed: {
        currentMember() {
            return this.$store.state.LoginModule.currentMember;
        },
        teamMate() {
            return this.$store.state.teamMate;
        }
    },
    mounted: function() {
        this.$store.dispatch("getMemberById");
        this.$store.dispatch("getTeamMateById");
    },
    methods: {}
};
</script>

<style>
</style>
