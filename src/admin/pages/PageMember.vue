<template>
    <div>
        <div>
            <h3>맴버 리스트</h3>
            <br>
            <div class="form-inline">
                <div class="form-group">
                    <label class="sr-only" for>label</label>
                    <select
                        v-on:change="selectTeamChanged()"
                        v-model="selectedTeamSeq"
                        class="form-control"
                        placeholder="Input field"
                    >
                        <option value="0">전체</option>
                        <option
                            v-for="(item, key) in teamList"
                            v-bind:key="key"
                            v-bind:value="item.seq"
                        >{{item.name}}</option>
                    </select>
                </div>&nbsp;
                <div class="form-group">
                    <label class="sr-only" for>label</label>
                    <input
                        v-on:keyup.enter="search()"
                        v-model="searchText"
                        type="text"
                        class="form-control"
                        id
                        placeholder="아이디 혹은 이름을 입력해 주세요"
                    >
                </div>&nbsp;
                <button v-on:click="search()" class="btn btn-primary">검색</button>
            </div>
            <br>
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>팀</th>
                        <th>이름</th>
                        <th>아이디</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-on:click="goToMemberEdit(item.id)"
                        v-for="(item, key) in memberList"
                        v-bind:key="key"
                    >
                        <td>{{key + 1}}</td>
                        <td>{{item.team.name}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.id}}</td>
                    </tr>
                    <tr v-if="memberList.length === 0">
                        <td colspan="9999">결과가 없습니다.</td>
                    </tr>
                </tbody>
            </table>
            <button v-on:click="goToMemberAdd()" class="btn btn-default">사원 추가</button>
            &nbsp;
            <button v-on:click="goToTeamManage()" class="btn btn-default">팀 관리</button>
        </div>
    </div>
</template>
<script>
import router from "../router";
export default {
    name: "PageMember",
    computed: {
        memberList() {
            return this.$store.state.memberModule.memberList;
        },
        teamList() {
            return this.$store.state.teamModule.teamList;
        }
    },
    data() {
        return {
            selectedTeamSeq: 0,
            searchText: ""
        };
    },
    mounted: function() {
        this._getDataFromRoute(this.$route);
        this.$store.dispatch("getMemberList", {
            teamSeq: this.selectedTeamSeq,
            searchText: this.searchText
        });
        this.$store.dispatch("getTeamList");
    },
    watch: {
        $route(to) {
            this._getDataFromRoute(to);
            this.$store.dispatch("getMemberList", {
                teamSeq: this.selectedTeamSeq,
                searchText: this.searchText
            });
        }
    },
    methods: {
        selectTeamChanged: function() {
            console.log(this.selectedTeamSeq);
            this._search();
        },
        search: function() {
            this._search();
        },
        goToMemberAdd: function() {
            router.push("/member/edit");
        },
        goToMemberEdit: function(memberId) {
            router.push(`/member/edit/${memberId}`);
        },
        goToTeamManage: function() {
            router.push("/team");
        },
        _getDataFromRoute: function(route) {
            this.selectedTeamSeq = route.query.teamSeq
                ? route.query.teamSeq
                : 0;
            this.searchText = route.query.searchText
                ? route.query.searchText
                : "";
        },
        _search: function() {
            router.push({
                path: "./",
                query: {
                    teamSeq: this.selectedTeamSeq,
                    searchText: this.searchText
                }
            });
        }
    }
};
</script>

<style scoped>
</style>